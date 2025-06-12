import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const SignUpPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();

	const { signup } = useAuthStore();

	const handleSignUp = async (e) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);

		try {
			await signup(email, password, name);
			toast.success("Account created successfully! Please verify your email.");
			navigate("/verify-email");
		} catch (error) {
			setError(error.message || "An error occurred during signup");
			toast.error(error.message || "An error occurred during signup");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-slate-900/20 backdrop-blur-2xl border border-slate-800/50 rounded-3xl shadow-2xl overflow-hidden relative flex flex-col'
		>
			{/* Glow Effect */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl z-0"></div>
			
			<div className='relative p-8 flex-grow overflow-y-auto'>
				<div className="text-center mb-8">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.2 }}
						className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/25 "
					>
						<User className="w-8 h-8 text-white" />
					</motion.div>
					<h2 className='text-3xl font-bold text-white mb-2'>
						Create Account
					</h2>
					<p className="text-slate-400 text-sm">Join us and start your journey</p>
				</div>

				<form onSubmit={handleSignUp} className="space-y-6">
					<Input
						icon={User}
						type='text'
						placeholder='Full Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
					<Input
						icon={Mail}
						type='email'
						placeholder='Email Address'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<Input
						icon={Lock}
						type='password'
						placeholder='Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					{error && (
						<motion.p 
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							className='text-red-400 font-medium text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-6'
						>
							{error}
						</motion.p>
					)}

					<div className="mb-6">
						<PasswordStrengthMeter password={password} />
					</div>

					<motion.button
						className='w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 relative overflow-hidden group'
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type='submit'
						disabled={isLoading}
					>
						<div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 "></div>
						<span className="relative z-10">
							{isLoading ? <Loader className='animate-spin mx-auto' size={24} /> : "Create Account"}
						</span>
					</motion.button>
				</form>
			</div>

			<div className='px-8 py-6 bg-slate-900/30 border-t border-slate-800/50 flex justify-center z-10 relative'>
				<p className='text-sm text-slate-400'>
					Already have an account?{" "}
					<Link to="/login" className='text-blue-400 hover:text-cyan-400 font-medium transition-colors duration-200'>
						Sign in
					</Link>
				</p>
			</div>
		</motion.div>
	);
};

export default SignUpPage;
