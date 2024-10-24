import { CodeBlock } from "../../components/CodeBlock/CodeBlock";

import PageLayout from "../../components/PageLayout/PageLayout";

const Usage = () => {
  return (
    <PageLayout>
      <h1>Usage</h1>
      <p>Learn the basics of building applications with PulsewidthUI</p>
      <h2 className={"mt7"}>Quickstart</h2>
      <p>
        Once Pulsewidth is installed, you can start using any component by
        importing from 'pulsewidth-ui'.
      </p>
      <br />
      <CodeBlock
        str={`
import Button from "pulsewidth-ui";

export default function ButtonUsage() {
  return <Button variant="solid">Hello world</Button>;
}
    `}
        className={"mb6"}
      ></CodeBlock>
      <h2 className={"mt7"}>Import Styles</h2>
      <p>
        Be sure to add the following line to the top of your index file (usually
        index.{"{"}jsx, tsx{"}"} or main.{"{"}jsx, tsx{"}"}) for Pulsewidth
        components to render properly. Nearly every component's styles can be
        overridden with the className prop or by using slotProps. Rare
        exceptions should be noted in the component's documentation.
      </p>
      <br />
      <CodeBlock
        str={`
import "pulsewidth-ui/dist/style.css";
    `}
        className={"mb6"}
      ></CodeBlock>
    </PageLayout>
  );
};

export default Usage;
