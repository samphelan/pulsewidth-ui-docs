import { Checkbox, List, ListItem, Radio, RadioGroup } from "pulsewidth-ui";
import ComponentBody from "../../components/ComponentBody/ComponentBody";
import ComponentHeader from "../../components/ComponentHeader/ComponentHeader";
import ComponentPageLayout from "../../components/ComponentPageLayout/ComponentPageLayout";
import Sandbox, {
  SandboxControls,
  SandboxDisplay,
} from "../../components/Sandbox/Sandbox";
import { useState } from "react";
import { Colors, Variant } from "pulsewidth-ui";
import ColorVariantPicker from "../../components/ColorVariantPicker/ColorVariantPicker";
import VariantPicker from "../../components/VariantPicker/VariantPicker";

const RadioDoc = () => {
  const [selectedVariant, setSelectedVariant] = useState("outline" as Variant);
  const [selectedColor, setSelectedColor] = useState("gray" as Colors);
  const [selectedRadio, setSelectedRadio] = useState("first");
  const [disableIcon, setDisableIcon] = useState(false);

  const code = () => {
    return `
<Radio variant={${selectedVariant}} colorVariant={${selectedColor}} />
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Radio"
        description='Renders a component that extends the design and functionality of the html input[type="radio"] tag'
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Radio"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <RadioGroup name="display">
              <List>
                {["First", "Second", "Third"].map((r) => (
                  <ListItem key={r} className="mb1">
                    <Radio
                      key={r}
                      label={r}
                      variant={selectedVariant}
                      colorVariant={selectedColor}
                      checked={selectedRadio.toLowerCase() === r.toLowerCase()}
                      onChange={() => {
                        setSelectedRadio(r.toLowerCase());
                      }}
                      disableIcon={disableIcon}
                    ></Radio>
                  </ListItem>
                ))}
              </List>
            </RadioGroup>
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
            <h5 className="mt3">Disable Icon</h5>
            <Checkbox
              checked={disableIcon}
              onChange={() => {
                setDisableIcon((current) => !current);
              }}
              label={"Disable Icon"}
            ></Checkbox>
          </SandboxControls>
        </Sandbox>
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default RadioDoc;
