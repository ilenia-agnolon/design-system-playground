// This file is used for a minimal Storybook entry.
// It exists to avoid an "empty Storybook" state and to preview global tokens later.

// Enables automatic documentation in Storybook
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Tokens Preview",
  tags: ["autodocs"], // Enables automatic documentation in Storybook
};

export default meta;

type Story = StoryObj;

// export const Preview: Story = {
//   render: () => {
//     return (
//       <div style={{ padding: 16 }}>
//         {/* This is a quick visual smoke test to confirm Storybook renders React/TS */}
//         <h1 style={{ marginBottom: 8 }}>Storybook is running ✅</h1>
//         <p>
//           This story will later be used to verify global styles (reset, tokens,
//           typography) imported in preview.ts.
//         </p>
//       </div>
//     );
//   },
// };
