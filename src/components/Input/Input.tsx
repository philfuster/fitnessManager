import { InputHTMLAttributes } from 'react';
import './styles.css';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	name: string;
	label: string;
};

function Input(props: InputProps) {
	const { name, type, id, label, ...restOfProps } = props;

	return (
		<div className="formGroup">
			<label htmlFor={id ?? name}>{label}</label>
			<input id={id ?? name} type={type} {...restOfProps} />
		</div>
	);
}

export default Input;
