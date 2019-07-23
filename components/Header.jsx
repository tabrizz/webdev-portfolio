export default () => (
  <header>
    <nav className="mx-auto flex flex-row lg:flex-col justify-between lg:h-screen items-center p-2">
      <div>
        <a href="#" className="flex items-center lg:flex-col">
          <img src="" alt="logo" />
        </a>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:block py-2 lg:p-2">
        <ul className="flex-col">
          <li>
            <a href="#" className="uppercase text-sm">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="uppercase text-sm">
              About
            </a>
          </li>
          <li>
            <a href="#" className="uppercase text-sm">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="uppercase text-sm">
              My Work
            </a>
          </li>
          <li>
            <a href="#" className="uppercase text-sm">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <ul className="flex-col">
          <li>
            <a href="#" className="uppercase text-sm">
              T
            </a>
          </li>
          <li>
            <a href="#" className="uppercase text-sm">
              I
            </a>
          </li>
          <li>
            <a href="#" className="uppercase text-sm">
              F
            </a>
          </li>
          <li>
            <a href="#" className="uppercase text-sm">
              G
            </a>
          </li>
          <li>
            <a href="#" className="uppercase text-sm">
              M
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
