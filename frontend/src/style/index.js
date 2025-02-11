import { grommet as grommetTheme } from "grommet";
import { deepMerge } from "grommet/utils";

const inputTheme = {
  extend: ({ theme }) => `
    opacity: 0.7;
    transition: all 0.3s ease; 
    &:focus {
      opacity: 1;
      outline: none;
      transform: translateY(${theme.global.edgeSize.xxsmall});
    }
    `,
  placeholder: {
    extend: `
          font-style: italic;
        `,
  },
};

const theme = deepMerge(grommetTheme, {
  global: {
    colors: {
      brand: "#228BE6",
      "background-contrast": {
        dark: "#2D3748",
        light: "#F7FAFC",
      },
      "raking-1": {
        dark: "#CBD5E0",
        light: "#A8E6A3",
      },
      "raking-2": {
        dark: "#A0AEC0",
        light: "#D0F2D6",
      },
      "my-message": {
        dark: "#3a8e3b",
        light: "#a8e6a1",
      },
      "other-message": {
        dark: "#4a4a4a",
        light: "#e0e0e0",
      },
      "small-text": {
        dark: "#CBD5E0",
        light: "#718096",
      },
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
  formField: {
    border: { position: "inner", side: "all" },
    margin: { vertical: "small" },
  },
  textInput: inputTheme,
  textArea: inputTheme,
  button: {
    primary: {
      color: {
        dark: "#22D3EE",
        light: "#00e676",
      },
    },
    border: {
      color: {
        dark: "#FFFFFF",
        light: "#CBD5E1",
      },
    },
    hover: {
      background: {
        color: {
          dark: "#2DD4BF",
          light: "#1D4ED8",
        },
      },
      border: {
        color: {
          dark: "#FFFFFF",
          light: "#1D4ED8",
        },
      },
    },
  },
  anchor: {
    color: {
      dark: "#22D3EE",
      light: "#2563EB",
    },
    extend: `transition: all 0.3s ease, transform 0.3s ease;`,
    hover: {
      extend: `transform: scale(1.1);`,
    },
  },
});

export { theme };
