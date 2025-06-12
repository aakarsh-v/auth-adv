import { MailtrapClient } from "mailtrap"
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { mailTrapClient, sender } from "./mailtrap.config.js"


export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}]

    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email verification"
        })
        console.log(`Verification number sent succesfully to:`, JSON.stringify(response, null, 2))
    } catch (error) {
        console.error(`Error sending verification ${error}`)
        throw new Error(`Error sending verification email: ${error}`)
    }
}

export const sendWelcomeEmail = async (email, username) => {
    const recipient = [{email}]

    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: `Welcome ${username}`,
            html: WELCOME_EMAIL_TEMPLATE
        });

        console.log("Welcome email sent successfully", response);
    } catch (error) {
        throw new Error(`Error sending welcome email: ${error}`)
    }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{email}];
    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password reset"
        })
    console.log("Password reset email sent successfully:", JSON.stringify(response, null, 2));
    } catch (error) {
        console.error(`Error sending verification ${error}`)
        throw new Error(`Error sending verification email: ${error}`)
    }
}

export const sendResetSuccessEmail = async(email) => {
    const recipient = [{email}];
    try {
        const response = await mailTrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password reset succesfull",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password reset"
        })

        console.log("Password reset email sent successfully:", JSON.stringify(response, null, 2));
     } catch (error) {
        console.error(`Error sending password reset success email: ${error}`)
        throw new Error(`Error sending password reset success email: ${error}`)
    }
}

