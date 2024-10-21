import { List, ListItem, Radio, RadioGroup } from "pulsewidth-ui";
import { Variant } from "pulsewidth-ui";

type VariantPickerProps = {
  selected: Variant;
  onChange: (v: Variant) => void;
};

const VariantPicker = ({ selected, onChange }: VariantPickerProps) => {
  return (
    <RadioGroup>
      <List direction={"row"}>
        {(["plain", "outline", "soft", "solid"] as Variant[]).map((v) => (
          <ListItem
            style={{ marginRight: "10px", marginBottom: "5px" }}
            key={v}
          >
            <Radio
              label={v}
              checked={selected === v}
              onChange={(e) => {
                if (e.currentTarget.value === "on") onChange(v);
              }}
              disableIcon
              variant="soft"
              colorVariant="blue"
            ></Radio>
          </ListItem>
        ))}
      </List>
    </RadioGroup>
  );
};

export default VariantPicker;
