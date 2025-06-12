import bcrypt from "bcrypt"
import crypto from "crypto"

import { User } from "../models/user.model.js";
import { generateVerificationCode} from "../utils/generateVerificationCode.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomeEmail, sendPasswordResetEmail, sendResetSuccessEmail } from "../mailtrap/emails.js";


export const signup = async(req, res) => {
    const {name, email, password} = req.body;
    try {
        if(!email || !name || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }
        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists) {
            return res.status(400)
            .json({
                success: false,
                message: "User already exists"
            })
        }

        const hashedPass = await bcrypt.hash(password, 10);
        const verificationToken = generateVerificationCode();
        const user = new User({
            name,
            email,
            password: hashedPass,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 *60 * 1000 //24 hours
        })

        await user.save();

        // jwt token
        generateTokenAndSetCookie(res, user._id);

        await sendVerificationEmail(user.email, verificationToken);

        res.status(200)
            .json({ success: true,
                message: "User created succesfully",
                user: {
                    ...user._doc,
                    password: undefined,
                }
            })
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

export const verifyEmail = async(req, res) => {
    const {code} = req.body;
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: { $gt: Date.now() }
        })

        if(!user) {
            return res.status(400)
                .json({
                    success: false,
                    message: "Invalid or expired verification code"
                })
        }
        
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined
        
        await user.save();

        await sendWelcomeEmail(user.email, user.name);

        return res.status(200).json({
            success: true,
            message: "Email verified succcessfully",
            user: {
                ...user._doc,
                password: undefined,
            }
        })

    } catch (error) {
        console.error("Error in verifyEmail:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}

export const login = async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(400)
            .json({
                success: false,
                message: "Invalid credentials"
            })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400)
            .json({
                success: false,
                message: "Invalid credentials"
            })
        }
        if(!user.isVerified){
            return res.status(400).json({
                success: false,
                message: "Account not verified"
            })
        }
        generateTokenAndSetCookie(res, user._id);

        user.lastLogin = new Date();
        await user.save();
        
        res.status(200).json({
            success: true,
            message: "Logged in succesfully",
            user: {
                ...user._doc,
                password: undefined,
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

export const logout = async(req, res) => {
    res.clearCookie("token");
    res.status(200).json({ success:true, message: "Logged out successfully"})
}

export const forgotPassword = async(req, res) => {
    const {email} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user){
            return res.status(404)
            .json({
                success: false,
                message: "User not found"
            })
        }

    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiryAt = Date.now() + 1 * 60 * 60 * 1000;

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiryAt;

    await user.save();

    //send email
    const url = process.env.RESETPASSWORD_TOKEN
    await sendPasswordResetEmail(user.email, `${url}/${resetToken}`);

    res.status(200).json({
        success: true,
        message: "Password reset link sent to your email"
    })

    } catch (error) {
        console.error("Error in forgotPassword:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}

export const resetPassword = async(req, res) => {
    try {
        const {token} = req.params;
        const {password} = req.body;

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpiresAt: { $gt: Date.now() }
        });

        if(!user){
            return res.status(404).json({
                success: false,
                message: "Invalid or expired reset token"
            })
        }
        const samePass = await bcrypt.compare(password, user.password);

        if(samePass){
            return res.status(400).json({
                success: false,
                message: "Password should not match previous one"
            })
        }

        const hashedPass = await bcrypt.hash(password, 10);
        user.password = hashedPass;

        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresAt = undefined;

        await user.save();

        await sendResetSuccessEmail(user.email);

        res.status(200).json({
            success: true,
            message: "Password reset successfull",
            user: {
                ...user._doc,
                password: undefined,
            }
        })

    } catch (error) {
        console.error("Error in resetPassword: ", error);
        res.status(400).json({
            success: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

export const checkAuth = async(req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");
        if(!user){
            return res.status(400)
                .json({
                    success: false,
                    message: "User not found"
                })
        }
        res.status(200).json({
            success: true,
            message: "User found",
            user: {
                ...user._doc,
                password: undefined,
            }
        })

    } catch (error) {
        console.error("Error in checkAuth:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message
        });
    }
}