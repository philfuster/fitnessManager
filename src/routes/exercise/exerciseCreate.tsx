import { ContentWrapper } from "../../components";


export function CreateExercise() {
    return (
      <ContentWrapper>
        <h1>Create an Exercise</h1>
        <form>
          <label>
            Name
            <input type="text" />
          </label>
          <label>
            Description
            <input type="text" />
          </label>
          <fieldset>
            <legend>Defaults</legend>
            <label htmlFor="defaultRepetitions">
              Repetitions
              <input type="number" name="Default Repetitions" id="defaultRepetitions" />
            </label>
            <label htmlFor="defaultSets">
              Sets
              <input type="number" name="Default Sets" id="defaultSets" />
            </label>
          </fieldset>
          <button>Create</button>
        </form>
      </ContentWrapper>
    )
}
