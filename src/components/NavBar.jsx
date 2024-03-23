import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useState } from "react";

{
  /**DATA */
}
const customLinks = [
  { url: "/", title: "Inicio", styletail: "mr-4" },
  { url: "/about", title: "Sobre mi", styletail: "mx-4" },
  { url: "/projects", title: "Proyectos", styletail: "mx-4" },
  { url: "/articles", title: "Blog", styletail: "ml-4" },
];

const navRedes = [
  {
    url: "https://pe.linkedin.com/",
    svg: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 448 512"
        class="w-6 h-6 text-blue-800 bg-white rounded-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
      </svg>
    ),
  },
  {
    url: "https://www.instagram.com/",
    svg: (
      <svg
        class="w-7 h-7 dark:text-white text-blue-600 bg-white rounded-lg"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    url: "https://github.com/bryanjossephyf",
    svg: (
      <svg
        class="w-7 h-7  dark:text-white text-gray-600 bg-white rounded-lg"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
];

{
  /**ReactComponet */
}
function NavBar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const handClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 ,md:px-12 sm:px-8 ">
      {/**NavLinks */}

      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handClick}
        aria-label="Menu"
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -tralate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -tralate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      {/**navBar */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          {customLinks.map((links,index) => (
            <Link
              href={links.url}
              className={`${links.styletail} relative group`}
              key={index}
            >
              {links.title}

              <span
                className={`h-[1px] inline-block  bg-yellow-400 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                  router.asPath === links.url ? "w-full" : "w-0"
                }`}
              >
                &nbsp;
              </span>
            </Link>
          ))}
        </nav>

        {/**NavRedes */}
        <nav className="flex items-center justify-center flex-wrap ">
          {navRedes.map((links,index) => (
            <motion.a
              href={links.url}
              target={"_blank"}
              className="w-6 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              key={index}
            >
              {links.svg}
            </motion.a>
          ))}
        </nav>
      </div>

      {/**mobileNavbar */}
      <motion.div
        className={`max-w-[70vw] w-full flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/90 rounded-lg backdrop-blur-md py-32 ${
          isOpen ? "block" : "hidden"
        }`}
        initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <nav className="flex items-center flex-col justify-center">
          {customLinks.map((links,index) => (
            <Link href={links.url} className={`relative group text-white my-2`} key={index}>
              {links.title}

              <span
                className={`h-[1px] inline-block  bg-yellow-400 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
                  router.asPath === links.url ? "w-full" : "w-0"
                }`}
              >
                &nbsp;
              </span>
            </Link>
          ))}
        </nav>

        {/**NavRedes */}
        <nav className="flex items-center justify-center flex-wrap mt-3">
          {navRedes.map((links,index) => (
            <motion.a
              href={links.url}
              target={"_blank"}
              className="w-6 mx-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              key={index}
            >
              {links.svg}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}

export default NavBar;

