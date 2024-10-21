import { Checkbox } from "pulsewidth-ui";
import ComponentHeader from "../../components/ComponentHeader/ComponentHeader";
import ComponentPageLayout from "../../components/ComponentPageLayout/ComponentPageLayout";
import Sandbox, {
  SandboxControls,
  SandboxDisplay,
} from "../../components/Sandbox/Sandbox";
import { useState } from "react";
import { Colors, Variant } from "pulsewidth-ui";
import ComponentBody from "../../components/ComponentBody/ComponentBody";
import VariantPicker from "../../components/VariantPicker/VariantPicker";
import ColorVariantPicker from "../../components/ColorVariantPicker/ColorVariantPicker";
import NavFooter from "../../components/NavFooter/NavFooter";

const CheckboxDoc = () => {
  const [circle, setCircle] = useState(false);
  const [checked, setChecked] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");

  const code = () => {
    return `
<Checkbox 
  variant={${selectedVariant}} 
  colorVariant={${selectedColor}}
  circle={${circle}}
/>
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Checkbox"
        description='Renders a checkbox that extends the design and functionality of the html input[type="checkbox"] tag'
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Checkbox"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <Checkbox
              label="Label"
              variant={selectedVariant}
              colorVariant={selectedColor}
              checked={checked}
              onChange={(v) => {
                setChecked(v.currentTarget.checked);
              }}
              circle={circle}
            ></Checkbox>
          </SandboxDisplay>
          <SandboxControls>
            <h5>Variant</h5>
            <VariantPicker
              selected={selectedVariant}
              onChange={(v) => {
                setSelectedVariant(v);
              }}
            />
            <h5 className="mt3">Color</h5>
            <ColorVariantPicker
              selected={selectedColor}
              onChange={(c) => {
                setSelectedColor(c);
              }}
            />
            <h5 className="mt3">Shape</h5>
            <Checkbox
              checked={circle}
              onChange={(e) => {
                setCircle(e.currentTarget.checked);
              }}
              className="mt3"
              label="Circle"
            />
          </SandboxControls>
        </Sandbox>
        <NavFooter
          className="mt7"
          previousPath="/docs/Autocomplete"
          previousTitle="Autocomplete"
          nextPath="/docs/Password"
          nextTitle="Password"
        />
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default CheckboxDoc;
