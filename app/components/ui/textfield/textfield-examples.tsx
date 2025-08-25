import { Textfield } from ".";

export const TextfieldExamples = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-bold">Textfield</h2>
      <Textfield label="Normal" placeholder="Placeholder" helperText="Helper Text" />
      <Textfield label="Success" placeholder="Placeholder" successText="Success Text" />
      <Textfield label="Error" placeholder="Placeholder" errorText="Error Text" />
      <Textfield label="Disabled" placeholder="Placeholder" helperText="Helper Text" disabled />
    </section>
  );
};
