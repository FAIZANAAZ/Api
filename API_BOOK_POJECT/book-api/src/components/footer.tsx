import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="bg-black py-10 px-8 font-sans tracking-wide relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Quick Links */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <Link href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm transition-all">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-3">
              <li>
                <Link href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm transition-all">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm transition-all">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex items-center justify-center h-[150px] w-[150px] ml-[40%]">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={150}
              height={150}
              className="object-fill"
            />
          </div>
        </div>

        <hr className="my-6 border-gray-600" />

        {/* Footer Bottom */}
        <div className="flex sm:justify-between items-center flex-wrap gap-4">
          <p className="text-white text-sm">© 2024 MyBookSite. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm transition-all">
              <svg className="w-5 h-5 fill-white hover:fill-gray-300" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.558V12h2.77l-.443 2.89h-2.327V22C18.343 21.128 22 16.991 22 12"></path>
              </svg>
            </Link>
            <Link href="javascript:void(0)" className="text-white hover:text-gray-300 text-sm transition-all">
              <svg className="w-5 h-5 fill-white hover:fill-gray-300" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.486 2 2 6.486 2 12c0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm0 1.542c4.951 0 8.458 3.392 8.458 8.458 0 4.949-3.391 8.458-8.458 8.458-4.948 0-8.458-3.391-8.458-8.458 0-4.949 3.392-8.458 8.458-8.458zM9.743 16.747V7.128l6.027 4.31-6.027 4.309z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
