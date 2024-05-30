import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import  Themebutton from '../ThemeButton/Themebutton'
import { useTheme } from '../../context/ThemeContext'
import useLocalStorage from "use-local-storage";
import { Outlet, Link } from "react-router-dom";
import './Navbar.css';


const navigation = [
  // { name: 'Home', href: '#', current: true , path: '/' },
  { name: 'About', href: '#aboutSec', current: false , path: '/about' },
  { name: 'Skills', href: '#skillSec', current: false , path: '/skills' },
  { name: 'Projects', href: '#projectSec', current: false , path: '/projects'},
  { name: 'Contact', href: '#contactSec', current: false  , path: '/contact'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Navbar() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  const {theme, toggleTheme}= useTheme();

  return (

    <div>

    <Disclosure as="nav" className={theme === 'light' ? 'lightThemebg' : 'darkThemebg'}>
      {({ open }) => (
        <>
          <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                 <Link to='/'>
                 <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                 </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a href={item.href}
                        key={item.name}
                        
                        // className={item.current 
                        //   ? 'nav-btn activenav-btn' 
                        //   : 'nav-btn'
                        // }
                        onClick={() =>{item.current = true}}
                        className={`nav-btn ${theme === 'light' ? 'lightThemenavli' : 'darkThemenavli'}`}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                        </a>
                    ))}
              
                  </div>
                </div>
                
                <div className='hidden sm:ml-6 sm:block '>
              <Themebutton   />
            </div>
              </div>
              
            </div>
          </div>
             {/* mobile menu  */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-2 px-2 pb-3 pt-2 flex-column gap-6">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`nav-btn ${theme === 'light' ? 'lightThemenavli' : 'darkThemenavli'}`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            {/* theme btnt */}
            <div className=''>
              <Themebutton    />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <div className='nav-border'></div>
    </div>
  )
}
