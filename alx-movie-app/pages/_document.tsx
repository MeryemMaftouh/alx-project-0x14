import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link the manifest.json */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme color for browser UI */}
        <meta name="theme-color" content="#0070f3" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
