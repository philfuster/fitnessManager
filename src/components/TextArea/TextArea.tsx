import { clsx } from 'clsx';
import React from 'react';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
	({ className, ...props }, ref) => {
		return <textarea className={clsx(className)} ref={ref} rows={5} {...props} />;
	},
);

TextArea.displayName = 'TextArea';

export default TextArea;
