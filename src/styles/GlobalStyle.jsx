import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
/* Red */
--color-red-50: #e98284;
  --color-red-100: #e4696b;
  --color-red-200: #e05053;
  --color-red-300: #db373a;
  --color-red-400: #d71e22;
  --color-red-500: #d20509;
  --color-red-600: #bd0508;
  --color-red-700: #a80407;
  --color-red-800: #930406;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #eae9ea;
  --color-grey-100: #d4d3d4;
  --color-grey-200: #a9a7a9;
  --color-grey-300: #7f7a7e;
  --color-grey-400: #696469;
  --color-grey-500: #544e53;
  --color-grey-600: #3e383e;
  --color-grey-700: #292228;
  --color-grey-800: #211b20;
  --color-grey-900: #191418;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
  
  --image-grayscale: 0;
  --image-opacity: 100%;

  }

  &.dark-mode {

    /* Red */
--color-red-50: #e98284;
  --color-red-100: #e4696b;
  --color-red-200: #e05053;
  --color-red-300: #db373a;
  --color-red-400: #d71e22;
  --color-red-500: #d20509;
  --color-red-600: #bd0508;
  --color-red-700: #a80407;
  --color-red-800: #930406;

  /* Grey */
  --color-grey-0: #000000;
  --color-grey-50: #171717;
  --color-grey-100: #2f2f2f;
  --color-grey-200: #5e5d5e;
  --color-grey-300: #757575;
  --color-grey-400: #8c8c8c;
  --color-grey-500: #d3d2d3;
  --color-grey-600: #eae9ea;
  --color-grey-700: #ecebec;
  --color-grey-800: #eeedee;
  --color-grey-900: #f9f8f9;

  --backdrop-color: rgba(0, 0, 0, 0.3);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

  --image-grayscale: 10%;
  --image-opacity: 90%;

  }

  --color-brand-1: #292228;
  --color-brand-2: #D20509;
  --color-brand-3: #FC8917;
  --color-brand-4: #E4E4EB;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
    margin: 0;
    color: var(--color-grey-700);
    font-family: 'Lato', sans-serif;
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p {
  font-family: 'Crimson Pro', serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Poppins', sans-serif;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  /* hyphens: auto; */
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;

export default GlobalStyles;
