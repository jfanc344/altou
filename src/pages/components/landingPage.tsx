import { type NextPage } from "next";

const LandingPage = ({ handleScroll }) => {

  const handleArrowButton = (direction: string) => {
    handleScroll(direction)
  }

  return (
    <div className="flex-col h-full w-full absolute">
      <div className="pt-8 pl-2 md:pl-8 lg:pl-20 lg:pt-12 relative w-full sm:min-h-[60%]" >
        <p className="text-secondary text-7xl sm:text-8xl lg:text-9xl font-plain-medium break-words">a creative <br/> studio.</p>
      </div>

      <div className="grid grid-cols-6 gap-4 h-72 w-full">
        {/* Social media links */}
        <div className="col-span-2 relative">
          <div className="pl-2 pb-5 md:pl-8 lg:pl-20 absolute bottom-0 ">
            <a className="text-2xl font-plain-bold"> Instagram</a>
            <a className="text-2xl font-plain-bold block"> hello@atlou.com</a>
          </div>
        </div>
        {/* Home Page text */}
        <div className="relative col-span-3">
          <div className="h-full flex">
            <p className="text-xl text-zinc-500 font-plain-thin md:px-10 absolute right-0 bottom-0 pb-5 ">atlou. is an innovative media agency rooted in <br/>
             creativity and build on collaboration. We particiculate in <br/> design, imagery, branding strategy and digital content, <br/>
             bringing your ideas to life. </p>
          </div>
        </div>
        {/* Right button */}
        <div className=" flex items-center justify-center">
          <div className="hidden sm:block h-64 w-64 lg:h-[18rem] lg:w-[18rem] bg-secondary text-white rounded-full absolute -right-[9rem] z-10" >

            <div className="h-full w-1/2 rounded-tl-full rounded-bl-full left-0 absolute" onClick={() => handleArrowButton('left')}>
              <div className="pl-5 hover:pl-12 rightArrow h-full w-full rounded-tl-full rounded-bl-full absolute z-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentcolor" className="w-24 h-24 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
            <div className="h-full w-1/2 rounded-tr-full rounded-br-full right-0 absolute" onClick={() => handleArrowButton('right')}></div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage;