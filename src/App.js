import Router from "./Router";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { defaultTheme } from "./shared/theme";
import reset from "./shared/reset.css";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
${reset}; // Reset CSS

body, button, input, textarea {
  color: #444444;
  font-family: ${(props) => props.theme.fontFamily.default}, sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}
`;

export default App;
