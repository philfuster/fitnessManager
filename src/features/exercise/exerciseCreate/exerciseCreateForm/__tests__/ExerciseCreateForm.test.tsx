import { render, screen } from '@testing-library/react';
import ExerciseCreateForm from '../ExerciseCreateForm';

test('should have a an exerciseName control', () => {
	render(<ExerciseCreateForm />);
	const message = screen.queryByLabelText(/Name/i);
	expect(message).toBeDefined();
});
