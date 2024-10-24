import { Button, Drawer } from "pulsewidth-ui";
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

const DrawerDoc = () => {
  const [open, setOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<Variant>("soft");
  const [selectedColor, setSelectedColor] = useState<Colors>("gray");

  const code = () => {
    return `
<Drawer 
  variant={${selectedVariant}} 
  colorVariant={${selectedColor}}
  open={${open}}
/>
    `;
  };

  return (
    <ComponentPageLayout>
      <ComponentHeader
        name="Drawer"
        description="Renders a fixed position drawer that opens from a side of the screen and often serves as a navigation menu on smaller screens and mobile devices"
        github="https://github.com/samphelan/pulsewidth-ui/tree/main/lib/Drawer"
      ></ComponentHeader>
      <ComponentBody>
        <Sandbox>
          <SandboxDisplay code={code()}>
            <Drawer
              onExit={() => {
                setOpen(false);
              }}
              open={open}
              variant={selectedVariant}
              colorVariant={selectedColor}
            >
              <div style={{ padding: "20px" }}>
                <h2>Drawer Content Goes Here</h2>
                <p>Click outside the drawer to exit.</p>
              </div>
            </Drawer>
            <Button
              onClick={() => {
                setOpen((prev) => !prev);
              }}
            >
              Open Drawer
            </Button>
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
          </SandboxControls>
        </Sandbox>
      </ComponentBody>
    </ComponentPageLayout>
  );
};

export default DrawerDoc;
