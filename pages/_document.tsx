import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

type DocumentProps = {
  styleTags: Array<React.ReactElement<{}>>;
};

export default class MyDocument extends Document<DocumentProps> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  setGoogleTag() {
    return {
      __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-169802119-1')`,
    };
  }

  public render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
