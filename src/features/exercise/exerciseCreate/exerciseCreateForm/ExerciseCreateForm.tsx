import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '#components/Form';
import './styles.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '#components/Input';
import { TextArea } from '#components/TextArea';

const exerciseCreateFormSchema = z.object({
	exerciseName: z.string().trim().min(1, 'Required').max(250),
	exerciseDescription: z.string().trim().min(1, 'Required').max(500),
	defaultRepetitions: z.coerce.number().positive().min(1),
	defaultSets: z.coerce.number().positive().min(1),
});

type ExerciseCreateFormSchema = z.input<typeof exerciseCreateFormSchema>;

function ExerciseCreateForm() {
	const form = useForm<ExerciseCreateFormSchema>({
		resolver: zodResolver(exerciseCreateFormSchema),
		defaultValues: {
			exerciseName: '',
			exerciseDescription: '',
			defaultRepetitions: 1,
			defaultSets: 1,
		},
		mode: 'onTouched',
	});
	const {
		handleSubmit,
		control,
		formState: { isValid, isSubmitted, isDirty },
	} = form;

	function onSubmit(values: ExerciseCreateFormSchema) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{!isValid && isSubmitted && (
					<span className="textDestructive">Please address the errors below</span>
				)}
				<FormField
					control={control}
					name="exerciseName"
					render={({ field }) => (
						<FormItem className="formItemLayout">
							<div className="formItemDetails">
								<FormLabel>Name</FormLabel>
								<FormMessage />
							</div>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="exerciseDescription"
					render={({ field }) => (
						<FormItem className="formItemLayout">
							<div className="formItemDetails">
								<FormLabel>Description</FormLabel>
								<FormMessage />
							</div>
							<FormControl>
								<TextArea {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<h2 className="h4">Defaults</h2>
				<FormField
					control={control}
					name="defaultRepetitions"
					render={({ field }) => (
						<FormItem className="formItemLayout">
							<div className="formItemDetails">
								<FormLabel>Repetitions</FormLabel>
								<FormMessage />
							</div>
							<FormControl>
								<Input type="number" min={1} {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name="defaultSets"
					render={({ field }) => (
						<FormItem className="formItemLayout">
							<div className="formItemDetails">
								<FormLabel>Sets</FormLabel>
								<FormMessage />
							</div>
							<FormControl>
								<Input {...field} min={1} type="number" />
							</FormControl>
						</FormItem>
					)}
				/>
				<button type="submit" className="formButton" disabled={!isDirty && !isValid}>
					Submit
				</button>
			</form>
		</Form>
	);
}

export default ExerciseCreateForm;
