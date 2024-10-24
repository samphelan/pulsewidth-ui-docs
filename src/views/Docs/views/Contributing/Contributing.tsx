import { Link } from "react-router-dom";
import { CodeBlock } from "../../components/CodeBlock/CodeBlock";
import PageLayout from "../../components/PageLayout/PageLayout";
import styles from "./contributing.module.css";

const Contributing = () => {
  const margin = 5;
  return (
    <PageLayout>
      <h1>Contributing to Pulsewidth UI</h1>
      <p className={`mt${margin}`}>
        We welcome contributions to Pulsewidth UI! Whether it's fixing a bug,
        suggesting a new feature, improving documentation, or contributing code,
        all contributions are greatly appreciated. This guide will help you get
        started and understand how to contribute effectively.
      </p>
      <h2 className={`mt${margin}`}>Getting Started</h2>
      <ol className={`mt${margin} ${styles["indent"]}`}>
        <li className={`mt${margin}`}>
          <b>Fork the repository</b>
          <br />
          <ul className={[styles["indent"], `mt${margin}`].join(" ")}>
            <li>
              Navigate to the Pulsewidth UI GitHub repo and click on the "Fork"
              button.
            </li>
          </ul>
        </li>
        <li className={`mt${margin}`}>
          <b>Clone your fork:</b>
          <br />
          <CodeBlock
            className={`mt${margin}`}
            str={`
git clone https://github.com/YOUR-USERNAME/pulsewidth-ui.git
cd pulsewidth-ui
`}
          ></CodeBlock>
        </li>
        <li className={`mt${margin}`}>
          <b>Install Dependencies:</b> We use pnpm for managing packages. If you
          don’t have it installed, you can install it by running:
          <CodeBlock
            className={`mt${margin}`}
            str={`
npm install -g pnpm
          `}
          ></CodeBlock>
          <p className={`mt${margin}`}>
            Then install the project dependencies:
          </p>
          <CodeBlock
            className={`mt${margin}`}
            str={`
pnpm install
          `}
          ></CodeBlock>
        </li>
        <li className={`mt${margin}`}>
          <b>Start the development environment:</b> Pulsewidth UI uses Vite for
          the development server. To start it, run:
          <CodeBlock
            className={`mt${margin}`}
            str={`
pnpm dev
          `}
          ></CodeBlock>
          <p className={`mt${margin}`}>
            You can now work on the library, view live changes, and test
            components.
          </p>
        </li>
      </ol>
      <h2 className={`mt${margin}`}>Development Workflow</h2>
      <ol className={`${styles["indent"]}`}>
        <li className={`mt${margin}`}>
          <p>
            <b>Create a new branch:</b> For every contribution (whether it's a
            bug fix or new feature), create a new branch:
          </p>
          <CodeBlock
            className={`mt${margin}`}
            str={`
git checkout -b feature/new-component
      `}
          ></CodeBlock>
        </li>
        <li className={`mt${margin}`}>
          <b>Write tests and documentation:</b> Ensure your code is covered by
          unit tests, and update the relevant documentation if necessary.
        </li>
        <li className={`mt${margin}`}>
          <p className={`mt${margin}`}>
            <b>Run linting and formatting:</b> We use ESLint and Prettier to
            maintain code consistency. Run the following command to lint your
            code:
          </p>
          <CodeBlock
            className={`mt${margin}`}
            str={`
pnpm lint
      `}
          ></CodeBlock>
          <p className={`mt${margin}`}>
            To automatically fix formatting issues, run:
          </p>
          <CodeBlock
            className={`mt${margin}`}
            str={`
pnpm format
      `}
          ></CodeBlock>
        </li>
        <li className={`mt${margin}`}>
          <p>
            <b>Run the test suite:</b> We use Vitest for running tests. Ensure
            that all tests pass before submitting a pull request:
          </p>
        </li>
        <CodeBlock
          className={`mt${margin}`}
          str={`
pnpm test
      `}
        ></CodeBlock>
      </ol>
      <h2 className={`mt${margin}`}>Code Guidelines</h2>
      <ul className={`mt${margin} ${styles["indent"]}`}>
        <li>Components: Keep components small, modular, and reusable.</li>
        <li>
          TypeScript: All new code must be written in TypeScript. Strong typing
          is key to maintainability.
        </li>
        <li>
          CSS: We follow a BEM-inspired methodology for styling, and you should
          follow the existing conventions.
        </li>
        <li>
          Tests: Write unit tests for every feature and component using Vitest.
        </li>
      </ul>
      <h2 className={`mt${margin}`}>Commit Message Guidelines</h2>
      <p className={`mt${margin}`}>
        We follow the Conventional Commits specification to standardize our
        commit messages. Examples:
      </p>
      <ul className={`mt${margin} ${styles["indent"]}`}>
        <li>
          <code>feat(button): add new primary button style</code>
        </li>
        <li>
          <code>fix(input): resolve focus issue</code>
        </li>
        <li>
          <code>docs: update contributing guide</code>
        </li>
      </ul>
      <h2 className={`mt${margin}`}>Pull Request Process</h2>
      <ol className={`${styles["indent"]} mt${margin}`}>
        <li>
          <b>Push your changes to your branch:</b>
          <CodeBlock
            className={`mt${margin}`}
            str={`
pnpm test
      `}
          ></CodeBlock>
        </li>
        <li className={`mt${margin}`}>
          <b>Open a Pull Request:</b>
          <ul className={`${styles["indent"]} mt${margin}`}>
            <li>Go to the original Pulsewidth UI repository on GitHub.</li>
            <li>Open a new Pull Request (PR) from your branch.</li>
            <li>
              Ensure that the PR description clearly explains the problem and
              solution.
            </li>
            <li>Reference any related issues or feature requests.</li>
          </ul>
        </li>
        <li className={`mt${margin}`}>
          <b>Review Process:</b>
          <ul className={`${styles["indent"]} mt${margin}`}>
            <li>
              Your PR will be reviewed by a maintainer. You might be asked to
              make changes.
            </li>
            <li>Once approved, it will be merged into the main branch.</li>
          </ul>
        </li>
      </ol>
      <h2 className={`mt${margin}`}>Reporting Bugs</h2>
      <p className={`mt${margin}`}>
        If you encounter a bug, please{" "}
        <Link to={"https://github.com/samphelan/pulsewidth-ui/issues"}>
          open an issue
        </Link>{" "}
        with the following details:
      </p>
      <ul className={`${styles["indent"]} mt${margin}`}>
        <li>A clear description of the bug</li>
        <li>Steps to reproduce it</li>
        <li>Expected behavior</li>
        <li>Screenshots, if applicable</li>
      </ul>
      <h2 className={`mt${margin}`}>Suggesting Features</h2>

      <p className={`mt${margin}`}>
        We're open to new ideas! To suggest a feature,{" "}
        <Link to={"https://github.com/samphelan/pulsewidth-ui/issues"}>
          open an issue
        </Link>{" "}
        and include:
      </p>
      <ul className={`${styles["indent"]} mt${margin}`}>
        <li>A detailed explanation of the feature and its use case</li>
        <li>Potential implementation ideas</li>
        <li>Any relevant examples or inspiration</li>
      </ul>
    </PageLayout>
  );
};

export default Contributing;

/*
Sure! Here's a draft for a **Contributing Guide** page that you can add to your Pulsewidth UI documentation site.

---

# Contributing to Pulsewidth UI

We welcome contributions to Pulsewidth UI! Whether it's fixing a bug, suggesting a new feature, improving documentation, or contributing code, all contributions are greatly appreciated. This guide will help you get started and understand how to contribute effectively.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Development Workflow](#development-workflow)
3. [Code Guidelines](#code-guidelines)
4. [Commit Message Guidelines](#commit-message-guidelines)
5. [Pull Request Process](#pull-request-process)
6. [Reporting Bugs](#reporting-bugs)
7. [Suggesting Features](#suggesting-features)
8. [Code of Conduct](#code-of-conduct)

## Getting Started

To contribute to Pulsewidth UI, follow these steps:

1. **Fork the repository:**
   - Navigate to the [Pulsewidth UI GitHub repo](https://github.com/samphelan/pulsewidth-ui) and click on the "Fork" button.

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/pulsewidth-ui.git
   cd pulsewidth-ui
   ```

3. **Install dependencies:**
   We use `pnpm` for managing packages. If you don’t have it installed, you can install it by running:
   ```bash
   npm install -g pnpm
   ```

   Then install the project dependencies:
   ```bash
   pnpm install
   ```

4. **Start the development environment:**
   Pulsewidth UI uses Vite for the development server. To start it, run:
   ```bash
   pnpm dev
   ```

   You can now work on the library, view live changes, and test components.

## Development Workflow

1. **Create a new branch:**
   For every contribution (whether it's a bug fix or new feature), create a new branch:
   ```bash
   git checkout -b feature/new-component
   ```

2. **Write tests and documentation:**
   Ensure your code is covered by unit tests, and update the relevant documentation if necessary.

3. **Run linting and formatting:**
   We use ESLint and Prettier to maintain code consistency. Run the following command to lint your code:
   ```bash
   pnpm lint
   ```
   To automatically fix formatting issues, run:
   ```bash
   pnpm format
   ```

4. **Run the test suite:**
   We use Vitest for running tests. Ensure that all tests pass before submitting a pull request:
   ```bash
   pnpm test
   ```

## Code Guidelines

- **Components**: Keep components small, modular, and reusable.
- **TypeScript**: All new code must be written in TypeScript. Strong typing is key to maintainability.
- **CSS**: We follow a BEM-inspired methodology for styling, and you should follow the existing conventions.
- **Tests**: Write unit tests for every feature and component using Vitest.

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification to standardize our commit messages. Examples:

- `feat(button): add new primary button style`
- `fix(input): resolve focus issue`
- `docs: update contributing guide`

## Pull Request Process

1. **Push your changes to your branch:**
   ```bash
   git push origin feature/new-component
   ```

2. **Open a Pull Request:**
   - Go to the original Pulsewidth UI repository on GitHub.
   - Open a new Pull Request (PR) from your branch.
   - Ensure that the PR description clearly explains the problem and solution.
   - Reference any related issues or feature requests.

3. **Review Process:**
   - Your PR will be reviewed by a maintainer. You might be asked to make changes.
   - Once approved, it will be merged into the main branch.

## Reporting Bugs

If you encounter a bug, please [open an issue](https://github.com/samphelan/pulsewidth-ui/issues) with the following details:
- A clear description of the bug
- Steps to reproduce it
- Expected behavior
- Screenshots, if applicable

## Suggesting Features

We're open to new ideas! To suggest a feature, [open an issue](https://github.com/samphelan/pulsewidth-ui/issues) and include:
- A detailed explanation of the feature and its use case
- Potential implementation ideas
- Any relevant examples or inspiration

## Code of Conduct

By participating in this project, you agree to uphold our [Code of Conduct](./code-of-conduct). Please be respectful and inclusive to maintain a positive community.

---

If you need any additional information or want to customize this further, feel free to let me know!
*/
