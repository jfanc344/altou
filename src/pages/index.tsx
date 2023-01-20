import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>atlou</title>
        <meta name="description" content="atlou" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center main-page">
        <Navbar />
        test

      </main>
    </>
  );
};

export default Home;
