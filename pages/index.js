import Head from "next/head";
import TestFunction from './TestFetch';

export default function Home() {
  

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <TestFunction></TestFunction>
        <h1>LightSpeed</h1>
      </main>
    </div>
  );
}
