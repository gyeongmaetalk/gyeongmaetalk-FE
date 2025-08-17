import { Checkbox } from ".";

export const CheckboxExamples = ({ size }: { size: "default" | "sm" }) => {
  return (
    <section className="space-y-5">
      <h1 className="text-2xl font-bold">Checkbox (size만 조절 가능)</h1>
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm text-gray-500">Default</h3>
          <Checkbox size={size} />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm text-gray-500">Non-Checked</h3>
          <Checkbox checked={false} size={size} />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm text-gray-500">Checked</h3>
          <Checkbox checked size={size} />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm text-gray-500">Disabled</h3>
          <Checkbox disabled size={size} />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm text-gray-500">Disabled & Checked</h3>
          <Checkbox disabled checked size={size} />
        </div>
      </div>
    </section>
  );
};
