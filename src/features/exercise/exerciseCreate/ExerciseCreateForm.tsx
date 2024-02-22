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
			<div>
				<label htmlFor="exerciseName">Name</label>
				<input id="exerciseName" name="exerciseName" type="text" required />
			</div>
			<div>
				<label htmlFor="exerciseDescription">Description</label>
				<input id="exerciseDescription" name="exerciseDescription" type="text" required />
			</div>
			<fieldset>
				<legend>Defaults</legend>
				<div>
					<label htmlFor="defaultRepetitions">Repetitions</label>
					<input id="defaultRepetitions" name="defaultRepetitions" type="number" min={1} />
				</div>
				<div>
					<label htmlFor="defaultSets">Sets</label>
					<input id="defaultSets" name="defaultSets" type="number" min={1} />
				</div>
			</fieldset>
			<button type="submit">Create</button>
		</form>
	);

	function isHtmlFormElement(element: HTMLElement): element is HTMLFormElement {
		return element instanceof HTMLFormElement;
	}
}
