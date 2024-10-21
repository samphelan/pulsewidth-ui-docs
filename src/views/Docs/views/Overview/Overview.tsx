import { Button, Flex } from "pulsewidth-ui";
import PageLayout from "../../components/PageLayout/PageLayout";
import logo from "../../../../assets/logo_transparent.png";
import { ReactNode } from "react";
import NavFooter from "../../components/NavFooter/NavFooter";
import Sandbox, { SandboxDisplay } from "../../components/Sandbox/Sandbox";
import { Link } from "react-router-dom";
import { SelectSandbox } from "../SelectDoc/SelectDoc";

type SectionProps = {
  children?: ReactNode;
};

const Section = ({ children }: SectionProps) => {
  return (
    <Flex direction="column" style={{ marginBottom: "30px" }}>
      {children}
    </Flex>
  );
};

const Overview = () => {
  const code = () => {
    return `
import { Link } from "react-router-dom";

<Button
  as={Link}
  to="https://github.com/samphelan/pulsewidth-ui"
  variant="outline"
>
  Github
</Button>
    `;
  };

  return (
    <PageLayout>
      <Flex
        style={{ marginBottom: "30px", position: "relative", right: "8px" }}
      >
        <img src={logo} style={{ height: "100px" }} />
        <Flex direction="column">
          <h1>PulsewidthUI - Overview</h1>
          <p>
            Pulsewidth UI is an open-source, flexible & intuitive UI library for
            React.
          </p>
        </Flex>
      </Flex>
      <Section>
        <h2>Why Pulsewidth UI?</h2>
        <p>
          The Pulsewidth UI library was built to support the proprietary
          applications developed by Pulsewidth Labs. Other UI libraries were too
          rigid or lacked certain features that were needed for these specific
          projects, so we decided to make our own that prioritized flexibility
          and developer experience.
        </p>
      </Section>
      <Section>
        <h3>Customization</h3>
        <p>
          Pulsewidth components are intended to extend the features of basic
          html tags. The simpler components that correspond directly to these
          tags often do exactly that -- they extend the ComponentProps of the
          underlying html tag so that it can be used in the same way it would be
          without a library, but with additional features and styling.
        </p>
        <br />
        <SelectSandbox />
      </Section>
      <Section>
        <h3>Polymorphic Components</h3>
        <p>
          Many components are also polymorphic, meaning the root element can be
          overridden with another React component or an html element.
        </p>
        <br />
        <p>
          Below is a Pulsewidth Button component whose root has been replaced by
          a react-router &lt;Link&gt; component, which renders an html &lt;a&gt;
          tag. The result is a component with the styling of the Button
          component but the functionality and accessibility features of an
          anchor tag.
        </p>
        <br />
        <Sandbox>
          <SandboxDisplay code={code()}>
            <Button
              as={Link}
              to="https://github.com/samphelan/pulsewidth-ui"
              variant="outline"
            >
              Github
            </Button>
          </SandboxDisplay>
        </Sandbox>
      </Section>
      <Section>
        <h3>Lightweight</h3>
        <p>
          Theming and styling is done with CSS modules and global CSS with CSS
          variables - no external libraries. It is fast, lightweight, and
          reliable, and it doesn't require you to download any libraries other
          than React itself.
        </p>
      </Section>
      <Section>
        <h3>Accessibility</h3>
        <p>
          We strive to make all components accessible to end users who require
          assistive technology, and offer recommendations for optimizing
          accessibility throughout our documentation. Our development process
          includes automated a11y accessibility checks to guarantee usability
          for everyone.
        </p>
      </Section>
      <NavFooter nextPath="/docs/Installation" nextTitle="Installation" />
    </PageLayout>
  );
};

export default Overview;
