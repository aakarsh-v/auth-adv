import { motion } from "framer-motion";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";
import Input from "../components/Input";
import { ArrowLeft, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
	const [email, setEmail] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const { isLoading, forgotPassword } = useAuthStore();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await forgotPassword(email);
		setIsSubmitted(true);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-slate-900/20 backdrop-blur-2xl border border-slate-800/50 rounded-3xl shadow-2xl overflow-hidden relative'
		>
			{/* Glow Effect */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl z-0"></div>
			
			<div className='relative p-8'>
				<div className="text-center mb-8">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.2 }}
						className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/25"
					>
						<Mail className="w-8 h-8 text-white" />
					</motion.div>
					<h2 className='text-3xl font-bold text-white mb-2'>
						Forgot Password
					</h2>
					<p className="text-slate-400 text-sm">Reset your password</p>
				</div>

				{!isSubmitted ? (
					<form onSubmit={handleSubmit} className="space-y-6">
						<p className='text-slate-400 text-center'>
							Enter your email address and we'll send you a link to reset your password.
						</p>
						<Input
							icon={Mail}
							type='email'
							placeholder='Email Address'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className='w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 relative overflow-hidden group'
							type='submit'
						>
							<div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
							<span className="relative z-10">
								{isLoading ? <Loader className='w-6 h-6 animate-spin mx-auto' /> : "Send Reset Link"}
							</span>
						</motion.button>
					</form>
				) : (
					<div className='text-center'>
						<motion.div
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							transition={{ type: "spring", stiffness: 500, damping: 30 }}
							className='w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25'
						>
							<Mail className='h-8 w-8 text-white' />
						</motion.div>
						<p className='text-slate-400'>
							If an account exists for {email}, you will receive a password reset link shortly.
						</p>
					</div>
				)}
			</div>

			<div className='px-8 py-6 bg-slate-900/30 border-t border-slate-800/50 flex justify-center  z-10 relative'>
				<Link to={"/login"} className='text-sm text-blue-400 hover:text-cyan-400 font-medium transition-colors duration-200 flex items-center'>
					<ArrowLeft className='h-4 w-4 mr-2' /> Back to Login
				</Link>
			</div>
		</motion.div>
	);
};

export default ForgotPasswordPage;