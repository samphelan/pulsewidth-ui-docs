import { Autocomplete, Slider } from "pulsewidth-ui";
import ComponentBody from "../../components/ComponentBody/ComponentBody";
import ComponentHeader from "../../components/ComponentHeader/ComponentHeader";
import ComponentPageLayout from "../../components/ComponentPageLayout/ComponentPageLayout";
import Sandbox, {
  SandboxControls,
  SandboxDisplay,
} from "../../components/Sandbox/Sandbox";
import { useState } from "react";
import ColorVariantPicker from "../../components/ColorVariantPicker/ColorVariantPicker";
import VariantPicker from "../../components/VariantPicker/VariantPicker";
import { Colors, Radius, Variant } from "pulsewidth-ui";

const AutocompleteDoc = () => {
  const [val, setVal] = useState("");
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");
  const [roundness, setRoundness] = useState<Radius>(3);

  const code = () => {
    return `
<Autocomplete
  variant={${selectedVariant}}
  colorVariant={${selectedColor}}
  radius={${roundness}}
/>
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Autocomplete"
        description="A text input that displays a list of autocomplete suggestions"
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Autocomplete"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <Autocomplete
              placeholder="Autocomplete"
              value={val}
              onChange={(e) => {
                setVal(e.currentTarget.value);
              }}
              suggestions={["Suggestion 1", "Suggestion 2"]}
              variant={selectedVariant}
              colorVariant={selectedColor}
              radius={roundness}
            ></Autocomplete>
          </SandboxDisplay>
          <SandboxControls>
            <h5>Variant</h5>
            <VariantPicker
              selected={selectedVariant}
              onChange={(v) => {
                setSelectedVariant(v);
              }}
            ></VariantPicker>
            <h5 className="mt3">Color</h5>
            <ColorVariantPicker
              selected={selectedColor}
              onChange={(c) => {
                setSelectedColor(c);
              }}
            ></ColorVariantPicker>
            <h5 className="mt3">Roundness</h5>
            <Slider
              min={0}
              max={9}
              value={roundness}
              onChange={(n) => {
                setRoundness(n as Radius);
              }}
            />
          </SandboxControls>
        </Sandbox>
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default AutocompleteDoc;
