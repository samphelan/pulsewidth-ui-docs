import { CodeBlock } from "../../components/CodeBlock/CodeBlock";
import PageLayout from "../../components/PageLayout/PageLayout";

const Installation = () => {
  return (
    <PageLayout>
      <h1>Installation</h1>
      <p className={"mb6"}>
        Run the following command to add Pulsewidth UI to your project:
      </p>

      <CodeBlock
        str={`
pnpm add pulsewidth-ui
        `}
        className={"mb6"}
      ></CodeBlock>
      <h2>Peer Dependencies</h2>
      <p className={"mb6"}>
        Please note that react and react-dom are peer dependencies, meaning you
        should ensure they are installed before installing Pulsewidth UI.
      </p>
      <CodeBlock
        str={`
"peerDependencies": {
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
}
    `}
        className={"mb6"}
      ></CodeBlock>
    </PageLayout>
  );
};

export default Installation;
