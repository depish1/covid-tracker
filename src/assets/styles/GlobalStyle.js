import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html {
    box-sizing: border-box;
}

canvas {
    width: 100%; height: 100%;
}

*, *::after, *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Roboto', sans-serif;
}

a, button {
    font-family: 'Roboto', sans-serif;
}
`;

export default GlobalStyle;
