const Input = ({ icon: Icon, ...props }) => {
	return (
		<div className='relative mb-6'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10'>
				<Icon className='w-5 h-5 text-blue-400' />
			</div>
			<input
				{...props}
				className='w-full pl-12 pr-4 py-3 bg-slate-800/30 border border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-400 transition-all duration-200 backdrop-blur-sm focus:bg-slate-800/50 hover:border-slate-600'
			/>
		</div>
	);
};

export default Input;