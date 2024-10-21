import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Highlight, themes } from "prism-react-renderer";
import { Button, Flex } from "pulsewidth-ui";
import { Fragment, useEffect, useState } from "react";

type CodeBlockProps = {
  str: string;
  className?: string;
};

export const CodeBlock = ({ str, className: _className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(str);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }, [copied]);

  return (
    <div style={{ position: "relative" }} className={_className}>
      <Highlight theme={themes.okaidia} code={str} language="tsx">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              padding: "20px 80px 20px 20px",
              borderRadius: "30px",
              backgroundColor: "var(--pulsewidth-color-gray-9)",
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
            <Flex
              style={{
                height: "100%",
                position: "absolute",
                top: "0",
                right: "20px",
              }}
              direction="column"
              align="center"
              justify="center"
            >
              <Button
                onClick={handleCopy}
                className={className}
                variant="outline"
                style={{
                  ...style,
                }}
              >
                {copied ? (
                  "Copied"
                ) : (
                  <Fragment>
                    <FontAwesomeIcon
                      icon={faCopy}
                      style={{ marginRight: "10px" }}
                    />{" "}
                    Copy
                  </Fragment>
                )}
              </Button>
            </Flex>
          </pre>
        )}
      </Highlight>
    </div>
  );
};
