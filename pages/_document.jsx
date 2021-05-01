import Document, { Html, Head, Main, NextScript } from 'next/document';
import { join } from 'ramda';
import { extractCritical } from '@emotion/server';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);

    return { ...initialProps, ...page, ...styles };
  }

  render() {
    const { ids, css } = this.props;

    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,800;1,800&family=Nunito+Sans:ital,wght@0,300;0,600;1,300;1,600&family=Scope+One&display=swap"
            rel="stylesheet"
          />
          <style data-emotion-css={join(' ', ids)} dangerouslySetInnerHTML={{ __html: css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
