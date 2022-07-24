/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import ROUTES from '../routes';
import { useMoralis } from 'react-moralis'

export default function Example() {

  const moralis = useMoralis()

  return (
    <nav className="px-2 flex bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    
  <div className="w-full md:block flex" id="mobile-menu">
      <a href="#" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </a>
      <ul className="flex md:space-x-8 md:mt-0  md:font-medium">
        <li>
              <a href={ROUTES.CREATE_ADV} className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Send Advice</a>
        </li>
        <li>
          <a href={ROUTES.ADVICE} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Recieve Advice</a>
        </li>
        <li>
          <a href={ROUTES.CALCULATE_FINDER} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Send your info</a>
        </li>
        <li>
          <a href={ROUTES.COLLEGE_FINDER} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Recieve recommendations</a>
            </li>
        <li>
            <button onClick={() => moralis.isAuthenticated ? moralis.logout() : moralis.authenticate({ signingMessage: 'Login with your wallet to College Unlock'})}>
                {moralis.isAuthenticated ? moralis.user.get('ethAddress') : "Connect Wallet"}
            </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}