import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '#components/Form';
import './styles.css';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '#components/Input';

const exerciseCreateFormSchema = z.object({
	exerciseName: z.string().min(1).max(250),
	exerciseDescription: z.string().min(1, 'please provide an exercise description').max(500),
	defaultRepetitions: z.coerce.number().positive().min(1),
	defaultSets: z.coerce.number().positive().min(1),
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
			<form onSubmit={form.handleSubmit(onSubmit)} style={{ padding: '20px' }}>
				<FormField
					control={form.control}
					name="exerciseName"
					render={({ field }) => (
						<FormItem className="formItemLayout">
							<div className="formItemDetails">
								<FormLabel>Exercise Name</FormLabel>
								<FormMessage />
							</div>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="exerciseDescription"
					render={({ field }) => (
						<FormItem className="formItemLayout">
							<div className="formItemDetails">
								<FormLabel>Exercise Description</FormLabel>
								<FormMessage />
							</div>
							<FormControl>
								<Input {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="defaultRepetitions"
					render={({ field }) => (
						<FormItem className="formItemLayout">
							<div className="formItemDetails">
								<FormLabel>Default Repetitions</FormLabel>
								<FormMessage />
							</div>
							<FormControl>
								<Input type="number" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="defaultSets"
					render={({ field }) => (
						<FormItem className="formItemLayout">
							<div className="formItemDetails">
								<FormLabel>Default Sets</FormLabel>
								<FormMessage />
							</div>
							<FormControl>
								<Input {...field} type="number" />
							</FormControl>
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
