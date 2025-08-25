import { TextField } from ".";

export const TextFieldExamples = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-bold">TextField</h2>
      <TextField label="Normal" placeholder="Placeholder" helperText="Helper Text" />
      <TextField label="Success" placeholder="Placeholder" successText="Success Text" />
      <TextField label="Error" placeholder="Placeholder" errorText="Error Text" />
      <TextField label="Disabled" placeholder="Placeholder" helperText="Helper Text" disabled />
    </section>
  );
};
