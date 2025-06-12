import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";

const DashboardPage = () => {
	const { user, logout } = useAuthStore();

	const handleLogout = () => {
		logout();
	};

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.5 }}
			className='max-w-md w-full mx-auto mt-10 p-8 bg-slate-800/30 border border-slate-700/50 rounded-xl shadow-xl backdrop-blur-sm'
		>
			<h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text'>
				Dashboard
			</h2>

			<div className='space-y-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className='p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 backdrop-blur-sm'
				>
					<h3 className='text-xl font-semibold text-blue-400 mb-3'>Profile Information</h3>
					<p className='text-slate-300'>Name: {user.name}</p>
					<p className='text-slate-300'>Email: {user.email}</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className='p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 backdrop-blur-sm'
				>
					<h3 className='text-xl font-semibold text-blue-400 mb-3'>Account Activity</h3>
					<p className='text-slate-300'>
						<span className='font-bold'>Joined: </span>
						{new Date(user.createdAt).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</p>
					<p className='text-slate-300'>
						<span className='font-bold'>Last Login: </span>
						{formatDate(user.lastLogin)}
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					className='p-4 bg-slate-900/50 rounded-xl border border-slate-700/50 backdrop-blur-sm'
				>
					<h3 className='text-xl font-semibold text-blue-400 mb-3'>Verification Status</h3>
					<p className='text-slate-300'>
						<span className='font-bold'>Email: </span>
						<span className={`${user.isVerified ? "text-green-400" : "text-yellow-400"}`}>
							{user.isVerified ? "Verified" : "Pending"}
						</span>
					</p>
				</motion.div>

				<motion.button
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8 }}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleLogout}
					className='w-full py-3 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition duration-200'
				>
					Logout
				</motion.button>
			</div>
		</motion.div>
	);
};
export default DashboardPage;
