import { Input } from '../../../components/Input';

export function ExerciseCreateForm() {
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		// TODO: Implement form submission. I'm thinking of creating a hook to use the local cache. Or maybe IndexDB.
		event.preventDefault();
		// biome-ignore lint/style/noNonNullAssertion: exerciseCreateForm defined in this file.
		const formElement = document.getElementById('exerciseCreateForm')!;
		if (!isHtmlFormElement(formElement)) {
			throw new Error('Form element is not an HTMLFormElement');
		}
		const form = new FormData(formElement);
		console.dir(form.entries());
		const exerciseCreateInput = Object.fromEntries(form.entries());
		console.dir(exerciseCreateInput);
	}

	return (
		<form id="exerciseCreateForm" onSubmit={handleSubmit}>
			<Input name="exerciseName" id="exerciseName" label="Exercise Name" type="text" required />
			<Input
				name="exerciseDescription"
				id="exerciseDescription"
				label="Exercise Description"
				type="text"
				required
			/>
			<section>
				<h6>Defaults</h6>
				<Input
					name="defaultRepetitions"
					label="Default Repetitions"
					id="defaultRepetitions"
					type="number"
					min={1}
				/>
				<Input name="defaultSets" label="Default Sets" id="defaultSets" type="number" min={1} />
			</section>
			<button type="submit">Create</button>
		</form>
	);

	function isHtmlFormElement(element: HTMLElement): element is HTMLFormElement {
		return element instanceof HTMLFormElement;
	}
}
