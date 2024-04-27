import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '#components/Form';
import { z } from 'zod';
import './styles.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '#components/Input';

const exerciseCreateFormSchema = z.object({
	exerciseName: z.string().min(1).max(250),
	exerciseDescription: z.string().min(1, 'please provide an exercise description').max(500),
	defaultRepetitions: z.coerce.number().min(1),
	defaultSets: z.coerce.number().min(1),
});

function ExerciseCreateForm() {
	const form = useForm<z.infer<typeof exerciseCreateFormSchema>>({
		resolver: zodResolver(exerciseCreateFormSchema),
		defaultValues: {
			exerciseName: '',
			exerciseDescription: '',
			defaultRepetitions: 1,
			defaultSets: 1,
		},
	});

	function onSubmit(values: z.infer<typeof exerciseCreateFormSchema>) {
		console.log(values);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="exerciseName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Exercise Name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="exerciseDescription"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Exercise Description</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="defaultRepetitions"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Default Repetitions</FormLabel>
							<FormControl>
								<Input type="number" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="defaultSets"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Default Sets</FormLabel>
							<FormControl>
								<Input {...field} type="number" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<button type="submit" className="formButton">
					Submit
				</button>
			</form>
		</Form>
	);
}

export default ExerciseCreateForm;
