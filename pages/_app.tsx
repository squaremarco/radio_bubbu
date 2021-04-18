import { GlobalStyles } from 'twin.macro';
import tw from 'twin.macro';

function App({ Component, pageProps }) {
  return (
    <div tw="h-screen overflow-hidden">
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default App;
