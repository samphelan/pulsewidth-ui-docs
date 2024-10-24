import { Button, Slider } from "pulsewidth-ui";
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
import { Colors, Radius, Variant } from "pulsewidth-ui";

export const ButtonSandbox = () => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>("outline");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");
  const [roundness, setRoundness] = useState<Radius>(3);

  const code = () => {
    return `
<Button
  variant={${selectedVariant}}
  colorVariant={${selectedColor}}
  radius={${roundness}}
>
Click Me
</Button>
    `;
  };

  return (
    <Sandbox>
      <SandboxDisplay code={code()}>
        <Button
          variant={selectedVariant}
          colorVariant={selectedColor}
          radius={roundness}
        >
          Click Me
        </Button>
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
        ></Slider>
      </SandboxControls>
    </Sandbox>
  );
};

const ButtonDoc = () => {
  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Button"
        description="Renders a component that extends the design and functionality of the html <button> tag"
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Select"
        polymorphic={true}
      ></ComponentHeader>
      <ComponentBody>
        <ButtonSandbox />
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default ButtonDoc;
