export default function Header(){
    return(
        <header className="pb-6 bg-white lg:pb-0 border-b-2 text-black">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="/" title="" className="flex text-4xl font-black">
                💷HMS
              </a>
            </div>

            

            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-pink-600 focus:text-pink-600"
              >
                {" "}
                Features{" "}
              </a>

              <a
                href="/user/dashboard"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-pink-600 focus:text-pink-600"
              >
                {" "}
                Dashboard{" "}
              </a>

              <a
                href="/contact"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-pink-600 focus:text-pink-600"
              >
                {" "}
                Contact{" "}
              </a>

              <a
                href="/about"
                title=""
                className="text-base font-medium text-black transition-all duration-200 hover:text-pink-600 focus:text-pink-600"
              >
                {" "}
                About{" "}
              </a>
            </div>

            <a
              href="/book-event"
              title=""
              className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-pink-600 border border-transparent rounded-md lg:inline-flex hover:bg-pink-700 focus:bg-pink-700"
              role="button"
            >
              {" "}
              Book Event{" "}
            </a>
            <a
              href="/user/signup"
              title=""
              className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-pink-600 border border-transparent rounded-md lg:inline-flex hover:bg-pink-700 focus:bg-pink-700"
              role="button"
            >
              {" "}
              Signup{" "}
            </a>
          </nav>

          <nav className="pt-4 pb-6 bg-transparent border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                <a
                  href="#"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Features{" "}
                </a>

                <a
                  href="/user/dashboard"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Dashboard{" "}
                </a>

                <a
                  href="/contact"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  Contact{" "}
                </a>

                <a
                  href="/about"
                  title=""
                  className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  {" "}
                  About{" "}
                </a>
              </div>
            </div>

            <div className="px-6 mt-6">
              <a
                href="/book-event"
                title=""
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-pink-600 border border-transparent rounded-md tems-center hover:bg-pink-700 focus:bg-pink-700"
                role="button"
              >
                {" "}
                Book Event{" "}
              </a>
            </div>
          </nav>
        </div>
      </header>
    )
}