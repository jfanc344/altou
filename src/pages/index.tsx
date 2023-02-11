import { type NextPage } from "next"
import React, { useState, useEffect  } from 'react'
import Head from "next/head"
import Navbar from "./components/navbar"
import LandingPage from "./components/landingPage"
import ContentPage from "./components/contentPage"
import useHorizontal from '@oberon-amsterdam/horizontal/hook'


const Home: NextPage = () => {


  const handleContentScroll = (direction: string) => {
    console.log(direction)
    
    if (direction === "right") {
      const element = document.getElementById('sec1')
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    if (direction === "left") {
      const element = document.getElementById('sec2')
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }


  const Page = () => {
    useHorizontal();

    return (
      <div className="overflow-x-auto flex">

        <div className="w-screen flex flex-col h-screen" id="sec1">
          <div className="h-20"></div>
          <div className="grow relative">
            <LandingPage handleScroll={handleContentScroll}/>
          </div>
        </div>

        <div className="w-fit flex flex-col h-screen" id="sec2">
          <div className="h-20"></div>
          <div className="grow relative">
            <ContentPage />
          </div>
        </div>

      </div>
    );
  };

  return (
    <>
      <Head>
        <title>atlou</title>
        <meta name="description" content="atlou" />
      </Head>
      <main className="min-h-screen flex-col main-page w-fit">
        <Navbar />
        <Page />

      </main>
    </>
  );
};

export default Home;
