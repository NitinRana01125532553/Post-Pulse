import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 rounded-lg shadow mt-4">
      <div className="w-full max-w-screen-xl mx-auto py-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <h1 className='text-3xl font-bold'>Post-Pulse</h1>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
        <span className="block text-sm sm:text-center">
          © 2023{" "}
          <a href="https://Post-Pulse.com/" className="hover:underline">
            Post-Pulse™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer