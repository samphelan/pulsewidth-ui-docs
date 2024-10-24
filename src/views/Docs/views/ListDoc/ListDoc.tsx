import { List, ListItem } from "pulsewidth-ui";
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

const ListDoc = () => {
  const [selectedVariant, setSelectedVariant] = useState<Variant>("plain");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");

  const code = () => {
    return `
<List variant={${selectedVariant}} colorVariant={${selectedColor}}>
  {["List Item 1", "List Item 2", "List Item 3"].map((item) => (
    <ListItem key={item}>{item}</ListItem> 
  ))}
</List>
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="List"
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/List"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <List variant={selectedVariant} colorVariant={selectedColor}>
              <ListItem>List Item 1</ListItem>
              <ListItem>List Item 2</ListItem>
              <ListItem>List Item 3</ListItem>
            </List>
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

export default ListDoc;
