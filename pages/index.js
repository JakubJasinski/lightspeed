import Head from "next/head";
import TestFunction from "./TestFetch";
import { useRef, useEffect } from "react";
import * as d3 from "d3";

const Circle = () => {
  const ref = useRef();

  useEffect(() => {
    const svgElement = d3.select(ref.current);
    svgElement.append("circle").attr("cx", 150).attr("cy", 70).attr("r", 50);
  }, []);

  return <svg ref={ref} />;
};
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TestFunction></TestFunction>
        <Circle />

        <h1>LightSpeed</h1>
      </main>
    </div>
  );
}
