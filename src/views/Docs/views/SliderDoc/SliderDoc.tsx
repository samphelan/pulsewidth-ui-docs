import { Slider } from "pulsewidth-ui";
import ComponentBody from "../../components/ComponentBody/ComponentBody";
import ComponentHeader from "../../components/ComponentHeader/ComponentHeader";
import ComponentPageLayout from "../../components/ComponentPageLayout/ComponentPageLayout";
import Sandbox, {
  SandboxControls,
  SandboxDisplay,
} from "../../components/Sandbox/Sandbox";
import VariantPicker from "../../components/VariantPicker/VariantPicker";
import ColorVariantPicker from "../../components/ColorVariantPicker/ColorVariantPicker";
import { useState } from "react";
import { Colors, Variant } from "pulsewidth-ui";

export const SliderSandbox = () => {
  const [val, setVal] = useState(5);
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");

  const code = () => {
    return `
<Slider variant={${selectedVariant}} colorVariant={${selectedColor}} />
    `;
  };

  return (
    <Sandbox>
      <SandboxDisplay code={code()}>
        <Slider
          style={{ minWidth: "200px" }}
          value={val}
          min={0}
          max={10}
          onChange={(n) => {
            setVal(n);
          }}
        ></Slider>
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
  );
};

const SliderDoc = () => {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Slider"
        description='Renders a component that extends the design and functionality of the html <input type="range" /> tag'
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Slider"
      ></ComponentHeader>
      <ComponentBody>
        <SliderSandbox />
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default SliderDoc;
