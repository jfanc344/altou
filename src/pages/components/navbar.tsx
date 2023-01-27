import { type NextPage } from "next";
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../../../public/images/logo.png"
import Image from "next/image"

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar: NextPage = () => {
  return (
    <Disclosure as="nav" className="w-full border-b-2 border-secondary">
      {({ open }) => (
        <>
          <div className="mx-auto  px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-secondary ">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image className=" block h-8 w-auto" src={logo} alt="logo" />
                </div>
                <div className="hidden sm:ml-6 sm:block absolute right-0">
                  <div className="flex space-x-4">
                    <a href="#" className="text-secondary hover:bg-secondary hover:text-white px-7 py-2 rounded-full text-sm font-semibold outline outline-offset-2 outline-1">Services</a>
                    <a href="#" className="text-secondary hover:bg-secondary hover:text-white px-7 py-2 rounded-full text-sm font-semibold outline outline-offset-2 outline-1">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Mobile version  */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-secondary text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <Disclosure.Button as="a" className="text-secondary hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"> Services</Disclosure.Button>
              <Disclosure.Button as="a" className="text-secondary hover:bg-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"> Contact</Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;