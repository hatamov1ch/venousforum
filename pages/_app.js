import Head from "next/head";
import GlobalStyle from "../styles/global.styled";
import { ThemeProvider } from "styled-components";

const theme = {
  containerWidth: "1400px",
  fontPrimary: "Roboto",
  background: {
    smoke: "#fafafa",
    white: "#ffffff",
    primary: "#4895ef",
  },
  color: {
    light: "#ffffff",
    dark: "#1c1c1c",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Форум флебологов в Ташкенте | Главная страница</title>
        {/*Google Fonts API*/}
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;