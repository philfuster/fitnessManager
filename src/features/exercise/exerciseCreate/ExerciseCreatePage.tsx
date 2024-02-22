import { ContentWrapper } from '../../../components';
import { ExerciseCreateForm } from './ExerciseCreateForm';

export function ExerciseCreatePage() {
	return (
		<ContentWrapper>
			<h1>Create an Exercise</h1>
			<ExerciseCreateForm />
		</ContentWrapper>
	);
}