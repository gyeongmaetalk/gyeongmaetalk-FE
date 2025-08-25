import { Textarea } from ".";

export const TextareaExamples = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-bold">Textfield</h2>
      <Textarea label="Normal" placeholder="Placeholder" helperText="Helper Text" />
      <Textarea label="Error" placeholder="Placeholder" errorText="Error Text" />
      <Textarea label="Disabled" placeholder="Placeholder" helperText="Helper Text" disabled />
    </section>
  );
};
