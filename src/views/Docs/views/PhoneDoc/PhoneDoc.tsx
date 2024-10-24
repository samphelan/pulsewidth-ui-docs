import { Phone, Slider } from "pulsewidth-ui";
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

const PhoneDoc = () => {
  const [val, setVal] = useState("");
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");
  const [roundness, setRoundness] = useState<Radius>(3);

  const code = () => {
    return `
<Phone 
  variant={${selectedVariant}} 
  colorVariant={${selectedColor}}
  radius={${roundness}}
/>
`;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Phone"
        description="A text input specifically for phone numbers"
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Phone"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <Phone
              value={val}
              onChange={(v) => {
                setVal(v);
              }}
              variant={selectedVariant}
              colorVariant={selectedColor}
              radius={roundness}
            ></Phone>
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

export default PhoneDoc;
