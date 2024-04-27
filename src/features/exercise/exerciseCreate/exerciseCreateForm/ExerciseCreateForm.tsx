import './styles.css';

function ExerciseCreateForm() {
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
		<form className="center" id="exerciseCreateForm" onSubmit={handleSubmit}>
			<div className="formGroup">
				<label htmlFor="exerciseName">Exercise Name</label>
				<input type="text" name="exerciseName" id="exerciseName" required />
			</div>
			<div className="formGroup">
				<label htmlFor="exerciseDescription">Exercise Description</label>
				<input type="textarea" name="exerciseDescription" id="exerciseDescription" required />
			</div>
			<section>
				<h6>Defaults</h6>
				<div className="formGroup">
					<label htmlFor="defaultRepetitions">Default Repetitions</label>
					<input type="number" min={1} name="defaultRepetitions" id="defaultRepetitions" required />
				</div>
				<div className="formGroup">
					<label htmlFor="defaultSets">Default Sets</label>
					<input type="number" min={1} name="defaultSets" id="defaultSets" required />
				</div>
			</section>
			<button className="formButton" type="submit">
				Create
			</button>
		</form>
	);

	function isHtmlFormElement(element: HTMLElement): element is HTMLFormElement {
		return element instanceof HTMLFormElement;
	}
}

export default ExerciseCreateForm;
