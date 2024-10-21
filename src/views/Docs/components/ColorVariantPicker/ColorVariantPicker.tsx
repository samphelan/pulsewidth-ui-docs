import { List, ListItem, Radio, RadioGroup } from "pulsewidth-ui";
import { Colors } from "pulsewidth-ui";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./colorVariantPicker.module.css";

type ColorVariantPickerProps = {
  selected: Colors;
  onChange: (C: Colors) => void;
};

const ColorVariantPicker = ({
  selected,
  onChange,
}: ColorVariantPickerProps) => {
  return (
    <List direction="row">
      <RadioGroup>
        {(["gray", "red", "green", "blue", "orange"] as Colors[]).map((c) => (
          <ListItem
            key={c}
            style={{
              minWidth: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Radio
              label={c}
              checked={selected === c}
              onChange={(e) => {
                if (e.currentTarget.value === "on") onChange(c);
              }}
              colorVariant={c}
              variant="solid"
              customIcon={faCheck}
              labelPos="top"
              slotProps={{
                label: { className: styles["radio-label"] },
              }}
              spacing={1}
              size="large"
            ></Radio>
          </ListItem>
        ))}
      </RadioGroup>
    </List>
  );
};

export default ColorVariantPicker;
