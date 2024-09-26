import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ExerciseCreateForm from '../ExerciseCreateForm';

describe('<ExerciseCreateForm />', () => {
	test('should render all form inputs', () => {
		render(<ExerciseCreateForm />);
		expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
		expect(screen.getByRole('textbox', { name: /description/i })).toBeInTheDocument();
		expect(screen.getByRole('spinbutton', { name: /repetitions/i })).toBeInTheDocument();
		expect(screen.getByRole('spinbutton', { name: /sets/i })).toBeInTheDocument();
	});

	describe('errors', () => {
		test('should display errors when form is invalid', async () => {
			render(<ExerciseCreateForm />);
			const nameInput = screen.getByRole('textbox', { name: /name/i });
			// need to make a change to activate submit button
			await userEvent.type(nameInput, '           ');
			await userEvent.click(screen.getByRole('button', { name: /submit/i }));
			expect(screen.queryByText(/please address the errors below/i)).toBeInTheDocument();
			// name and description are required
			expect(screen.getAllByText(/required/i)).toHaveLength(2);
		});
	});
});
