import React from 'react';
import { Link } from 'react-router-dom';
// import { tw } from '@/utils/tailwindMerge';

export function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 left-0 bg-white text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3  text-2xl text-black-500">Seggle</span>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div className="hidden md:flex header">
              <Link className="mr-5 hover:text-gray-900 hover:font-bold" to="/contest">
                대회
              </Link>
              <Link className="mr-5 hover:text-gray-900 hover:font-bold" to="class">
                수업
              </Link>
              <Link className="mr-5 hover:text-gray-900 hover:font-bold" to="board">
                건의게시판
              </Link>
              <Link className="mr-5 hover:text-gray-900 hover:font-bold" to="announcements">
                공지사항
              </Link>
              <Link className="mr-5 hover:text-gray-900 hover:font-bold" to="faq">
                FAQ
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
