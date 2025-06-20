import { Check, X } from "lucide-react";

const PasswordCriteria = ({ password }) => {
	const criteria = [
		{ label: "At least 6 characters", met: password.length >= 6 },
		{ label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
		{ label: "Contains lowercase letter", met: /[a-z]/.test(password) },
		{ label: "Contains a number", met: /\d/.test(password) },
		{ label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
	];

	return (
		<div className='mt-3 space-y-2'>
			{criteria.map((item) => (
				<div key={item.label} className='flex items-center text-xs'>
					{item.met ? (
						<Check className='w-4 h-4 text-blue-400 mr-2 flex-shrink-0' />
					) : (
						<X className='w-4 h-4 text-slate-500 mr-2 flex-shrink-0' />
					)}
					<span className={item.met ? "text-blue-400" : "text-slate-500"}>{item.label}</span>
				</div>
			))}
		</div>
	);
};

const PasswordStrengthMeter = ({ password }) => {
	const getStrength = (pass) => {
		let strength = 0;
		if (pass.length >= 6) strength++;
		if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
		if (pass.match(/\d/)) strength++;
		if (pass.match(/[^a-zA-Z\d]/)) strength++;
		return strength;
	};
	const strength = getStrength(password);

	const getColor = (strength) => {
		if (strength === 0) return "bg-red-500";
		if (strength === 1) return "bg-red-400";
		if (strength === 2) return "bg-yellow-500";
		if (strength === 3) return "bg-blue-400";
		return "bg-blue-500";
	};

	const getStrengthText = (strength) => {
		if (strength === 0) return "Very Weak";
		if (strength === 1) return "Weak";
		if (strength === 2) return "Fair";
		if (strength === 3) return "Good";
		return "Strong";
	};

	return (
		<div className='mt-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-xl backdrop-blur-sm'>
			<div className='flex justify-between items-center mb-3'>
				<span className='text-xs text-slate-400 font-medium'>Password strength</span>
				<span className={`text-xs font-semibold ${
					strength >= 3 ? 'text-blue-400' : strength >= 2 ? 'text-yellow-500' : 'text-red-400'
				}`}>
					{getStrengthText(strength)}
				</span>
			</div>

			<div className='flex space-x-1 mb-2'>
				{[...Array(4)].map((_, index) => (
					<div
						key={index}
						className={`h-2 w-1/4 rounded-full transition-all duration-300 ${
							index < strength ? getColor(strength) : "bg-slate-700"
						}`}
					/>
				))}
			</div>
			<PasswordCriteria password={password} />
		</div>
	);
};

export default PasswordStrengthMeter;
