import { type NextPage } from "next"
import Head from "next/head"
import Navbar from "./components/navbar"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>atlou</title>
        <meta name="description" content="atlou" />
      </Head>
      <main className="flex min-h-screen flex-col main-page">
        <Navbar />
        <div className="pt-8 pl-2 md:pl-8 lg:pl-12 lg:pt-12" >
          <p className="text-secondary text-7xl sm:text-8xl lg:text-9xl font-semibold ">We are your</p>
          <p className="text-secondary text-7xl sm:text-8xl lg:text-9xl font-semibold">creative studio</p>
        </div>

        {/* Social media links */}
        <div className="absolute bottom-20 left-10 pb-20 pl-20 ">
          <a className="text-2xl font-bold block"> Instagram</a>
          <a className="text-2xl font-bold block"> Instagram</a>
          <a className="text-2xl font-bold block"> Instagram</a>
        </div>

      </main>
    </>
  );
};

export default Home;
