import { motion } from "framer-motion";

const LoadingSpinner = () => {
	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 flex items-center justify-center relative overflow-hidden'>
			{/* Animated Star Field Background */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="stars"></div>
				<div className="twinkling"></div>
			</div>

			{/* Futuristic Loading Spinner */}
			<div className="relative">
				<motion.div
					className='w-16 h-16 border-4 border-slate-700 border-t-blue-500 rounded-full'
					animate={{ rotate: 360 }}
					transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
				/>
				<motion.div
					className='absolute inset-0 w-16 h-16 border-4 border-transparent border-r-cyan-500 rounded-full'
					animate={{ rotate: -360 }}
					transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
				/>
				<div className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl"></div>
			</div>
		</div>
	);
};

export default LoadingSpinner;