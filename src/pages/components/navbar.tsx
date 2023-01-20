import { type NextPage } from "next";
import Image from "next/image";
import logo from "../../../public/images/logo.png";

const Navbar: NextPage = () => {
  return (
    <>
      <nav className="w-full absolute top-0 border-b-2 border-black">
        <div className="mx-auto px-2 sm:px-6 lg:px-10">

          {/* Larger screens nav bar */}
          <div className=" relative flex h-16 items-center">
            <div className="flex flex-1 items-center sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Image className="h-10 w-auto" src={logo} alt="logo" />
              </div>
              <div className="hidden md:block absolute right-0 ">
                <div className="flex space-x-4">
                  <a href="#" className="text-black-900 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                  <a href="#" className="text-black-900 hover:bg-gray-700 hover:text-white px-7 py-2 rounded-full text-sm font-medium outline outline-offset-2 outline-1">Contact</a>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Screen */}

        </div>
      </nav>
    </>
  );
};

export default Navbar;