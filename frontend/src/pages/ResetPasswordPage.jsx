import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/Input";
import { Lock } from "lucide-react";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { resetPassword, error, isLoading, message } = useAuthStore();

	const { token } = useParams();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}
		try {
			await resetPassword(token, password);
			toast.success("Password reset successfully, redirecting to login page...");
			setTimeout(() => {
				navigate("/login");
			}, 2000);
		} catch (error) {
			console.error(error);
			toast.error(error.message || "Error resetting password");
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full bg-slate-900/20 backdrop-blur-2xl border border-slate-800/50 rounded-3xl shadow-2xl overflow-hidden relative'
		>
			{/* Glow Effect */}
			<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>
			
			<div className='relative p-8'>
				<div className="text-center mb-8">
					<motion.div
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ delay: 0.2 }}
						className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/25"
					>
						<Lock className="w-8 h-8 text-white" />
					</motion.div>
					<h2 className='text-3xl font-bold text-white mb-2'>
						Reset Password
					</h2>
					<p className="text-slate-400 text-sm">Set your new password</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-6">
					{error && (
						<motion.p 
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							className='text-red-400 font-medium text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3'
						>
							{error}
						</motion.p>
					)}
					{message && (
						<motion.p 
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							className='text-blue-400 font-medium text-sm bg-blue-500/10 border border-blue-500/20 rounded-lg p-3'
						>
							{message}
						</motion.p>
					)}

					<Input
						icon={Lock}
						type='password'
						placeholder='New Password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>

					<Input
						icon={Lock}
						type='password'
						placeholder='Confirm New Password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>

					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className='w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 relative overflow-hidden group'
						type='submit'
						disabled={isLoading}
					>
						<div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
						<span className="relative z-10">
							{isLoading ? "Resetting..." : "Set New Password"}
						</span>
					</motion.button>
				</form>
			</div>
		</motion.div>
	);
};

export default ResetPasswordPage;