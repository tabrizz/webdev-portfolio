import Link from "next/link";

export default () => (
  <header className="bg-black text-white">
    <nav className="mx-auto flex flex-row lg:flex-col justify-between lg:h-screen items-center p-2">
      <div>
        <a href="#" className="flex items-center lg:flex-col">
          <svg
            className="h-12 w-12 md:h-20 md:w-20"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="250"
            height="250"
            viewBox="0 0 66.146 66.146"
          >
            <defs>
              <linearGradient id="b">
                <stop offset="0" stopColor="#b2b2b2" />
                <stop offset="1" stopColor="#e5e5e5" stopOpacity=".769" />
              </linearGradient>
              <linearGradient id="a">
                <stop offset="0" stopColor="#fe7a1c" stopOpacity=".915" />
                <stop offset="1" stopColor="#e5e5e5" stopOpacity=".387" />
              </linearGradient>
              <linearGradient
                xlinkHref="#a"
                id="c"
                gradientUnits="userSpaceOnUse"
                x1="8.187"
                y1="263.257"
                x2="62.506"
                y2="262.723"
              />
              <linearGradient
                xlinkHref="#b"
                id="d"
                x1="40.491"
                y1="271.81"
                x2="61.873"
                y2="271.676"
                gradientUnits="userSpaceOnUse"
              />
            </defs>
            <path
              fill="url(#c)"
              d="M2.441 248.659h31.735v31.601H2.441z"
              transform="translate(0 -230.854)"
            />
            <path
              fill="url(#d)"
              d="M29.266 256.509h32.607v30.335H29.266z"
              transform="translate(0 -230.854)"
            />
            <path
              d="M-3.969-.756v72.76h77.296V-.756H-3.969zm48.966 20.488l4.914 1.134.188.945.19 2.268.566 4.346 1.512 5.48 1.701-.566.19.945 1.7.189.567.945 1.134.378-1.89 1.7-1.89 2.08.756 2.078-.378 1.512-1.134 2.457-2.457 2.079-1.7.19-.946-.568-1.7-.567.377-.378.19-.756-1.134-.567-1.134-.944.567-.567 1.511-.379 1.323-.377v-1.135l-.377-.944-1.512.377-2.268.567h-1.701l-1.512.19-.756-.567-.756-.946-.378-1.323-.567 1.135h-.756l.19.756-.946.944-.756 1.89v2.457l-.566.19-1.135.377.567 1.323-1.134-.378h-.944l-.945-.756-1.512-.945-.567-1.7-.378-.19.188-.378.946-1.89 2.268-5.669 2.078-4.536-.188-.378 1.133-2.267 2.646-4.158h.567l.945.189.756-.568 1.89-1.133 2.457-3.59zm-19.088.378h2.646l2.835 2.268v.945l-.378.756-2.08 1.7-5.291 1.135-3.59.756-2.269.755-1.7.568 1.133 1.322 3.591.378 1.89-.189 1.323-.378 2.268-.567-.567 1.323.378 1.512-.567 1.323 1.7-.378c-.193.968-.29 1.086-1.322 1.323l-2.079 1.7-3.024.568H16.46l-1.7-.19-1.89 4.159 2.834.378 3.78-.567 1.134.377 1.701-.944h1.512l1.89-.567.567.378 1.323 1.323.756.566.378.946.189.377-1.701 2.457-2.835 1.134-5.292.567-.189-.189-5.48.945-3.024-.189-2.268-1.7-.945-1.702-.756-5.102.945-1.323.756-1.512 1.512-2.268c.937-4.215.753-3.81-1.134-8.126l.19-1.134 4.724-2.457 2.267-.378 4.914-1.134s4.536-.945 5.292-.945zm18.332 9.45l-2.835 4.346-1.512 2.079 3.024-.378 2.835-.378h.378l-1.89-5.67z"
              stroke="#171513"
              strokeWidth=".20002247999999997"
            />
            <g fill="#fff" stroke="#fffcfc">
              <path
                d="M30.102 18.185h-2.646c-.756 0-5.292.945-5.292.945l-4.913 1.134-2.268.378-4.725 2.457-.189 1.134c1.887 4.316 2.07 3.91 1.134 8.126l-1.512 2.268-.756 1.512-.945 1.323.756 5.103.945 1.7 2.268 1.702 3.024.188 5.48-.944.19.189 5.291-.567 2.835-1.134 1.7-2.457-.188-.378-.378-.945-.756-.567-1.323-1.323-.567-.378-1.89.567h-1.512l-1.7.945-1.135-.378-3.78.567-2.834-.378 1.89-4.158 1.7.19h4.347l3.024-.568 2.079-1.7c1.031-.238 1.13-.356 1.323-1.324l-1.701.378 1.323-1.89-1.134-.944.567-1.323-2.268.567-1.323.378-1.89.189-3.59-.378-1.134-1.323 1.7-.567 2.268-.756 3.591-.756 5.292-1.134 2.079-1.701.378-.756v-.945z"
                strokeWidth=".265"
              />
              <path
                d="M46.544 17.807l-2.457 3.591-1.89 1.134-.756.567-.945-.189h-.567l-2.646 4.157-1.133 2.269.188.377-2.079 4.536-2.267 5.67-.945 1.89-.189.378.378.189.567 1.7 1.512.945.944.756h.945l1.134.379-.567-1.323 1.134-.378.568-.19V41.81l.755-1.89.945-.945-.189-.756h.756l.567-1.134.378 1.323.756.945.756.567 1.512-.19h1.701l2.268-.566 1.512-.378.377.945v1.134l-1.322.378-1.512.378-.567.567 1.134.945 1.134.566-.19.757-.377.378 1.7.567.946.567 1.7-.19 2.457-2.079 1.134-2.456.378-1.512-.756-2.08 1.89-2.078 1.89-1.7-1.134-.379-.567-.945-1.7-.189-.19-.945-1.7.567-1.513-5.48-.566-4.347-.19-2.268-.189-.945zm-.756 9.828l1.89 5.67H47.3l-2.835.377-3.024.378 1.512-2.079z"
                strokeWidth=".26458"
              />
            </g>
          </svg>
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
        <ul className="flex-col text-center">
          <li className="mb-4">
            <Link href="/">
              <a className="uppercase text-sm">Home</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/about">
              <a className="uppercase text-sm">About</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/skills">
              <a className="uppercase text-sm">Skills</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/portfolio">
              <a className="uppercase text-sm">Portfolio</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/contact">
              <a className="uppercase text-sm">Contact</a>
            </Link>
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
