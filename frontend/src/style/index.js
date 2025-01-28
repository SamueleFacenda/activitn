import { grommet as grommetTheme } from 'grommet';
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
            brand: '#228BE6',
        },
        font: {
            family: "Roboto",
            size: "18px",
            height: "20px",
        },
    },
    formField: {
        border: { position: 'inner', side: 'all' },
        margin: { vertical: 'small' },
    },
    textInput: inputTheme,
    textArea: inputTheme,
});

export { theme };