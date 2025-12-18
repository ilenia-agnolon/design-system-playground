// Storybook type helpers.
// - Meta describes the story configuration (title, component, docs)
// - StoryObj is used to type individual stories
// Imported as `type` to avoid adding runtime code.
import type { Meta, StoryObj } from "@storybook/react";

/*
  Typography preview story (Foundations).

  This is NOT a reusable React component.
  It is a visual reference page to validate global typography rules:
  - font family
  - font sizes
  - line height
  - text colors (semantic tokens)
*/
const meta: Meta = {
  title: "Foundations/Typography",
  tags: ["autodocs"],
};

export default meta;

// Generic Storybook story type.
// Used when the story is not linked to a specific React component,
// but only renders static or exploratory markup (e.g. foundations previews).
type Story = StoryObj;

export const Preview: Story = {
  render: () => {
    // This wrapper keeps the preview readable and consistent across screens.
    return (
      <div style={{ padding: 24, maxWidth: 720 }}>
        {/* Heading samples */}
        <h1 style={{ marginBottom: 8 }}>Heading 1 — Page title</h1>
        <p style={{ marginBottom: 24, color: "var(--color-neutral)" }}>
          Subtitle — neutral text using a semantic color token.
        </p>

        {/* Body text sample */}
        <p style={{ marginBottom: 16 }}>
          This is a paragraph example used to check readability, line height,
          and overall rhythm. The goal is to validate global typography rules
          before building text components.
        </p>

        <p style={{ marginBottom: 24 }}>
          A second paragraph helps you spot inconsistencies in spacing and
          ensures that longer text blocks feel comfortable to read.
        </p>

        {/* Semantic color samples */}
        <h2 style={{ marginBottom: 8 }}>Semantic text colors</h2>

        <p style={{ marginBottom: 8, color: "var(--color-text-neutral)" }}>
          Neutral — used for secondary information.
        </p>

        <p style={{ marginBottom: 8, color: "var(--color-text-positive)" }}>
          Positive — used for success messages.
        </p>

        <p style={{ marginBottom: 8, color: "var(--color-text-negative)" }}>
          Negative — used for errors or destructive actions.
        </p>
      </div>
    );
  },
};
