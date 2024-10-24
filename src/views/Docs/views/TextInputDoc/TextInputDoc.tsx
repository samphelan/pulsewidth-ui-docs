import { TextInput } from "pulsewidth-ui";
import ComponentBody from "../../components/ComponentBody/ComponentBody";
import ComponentHeader from "../../components/ComponentHeader/ComponentHeader";
import ComponentPageLayout from "../../components/ComponentPageLayout/ComponentPageLayout";
import Sandbox, {
  SandboxControls,
  SandboxDisplay,
} from "../../components/Sandbox/Sandbox";
import ColorVariantPicker from "../../components/ColorVariantPicker/ColorVariantPicker";
import VariantPicker from "../../components/VariantPicker/VariantPicker";
import { useState } from "react";
import { Colors, Variant } from "pulsewidth-ui";

const TextInputDoc = () => {
  const [val, setVal] = useState("");
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");

  const code = () => {
    return `
<TextInput variant={${selectedVariant}} colorVariant={${selectedColor}} />
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="TextInput"
        description='A text input field that extends the functionality and design of the html input[type="text"] tag.'
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/TextInput"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <TextInput
              value={val}
              onChange={(e) => {
                setVal(e.currentTarget.value);
              }}
              variant={selectedVariant}
              colorVariant={selectedColor}
              placeholder="Text Input"
            ></TextInput>
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
          </SandboxControls>
        </Sandbox>
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default TextInputDoc;
