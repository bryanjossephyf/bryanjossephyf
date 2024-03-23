"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FramerSkills() {
  const [selectedId, setSelectedId] = useState("");
  const items = [
    {
      id: "1",
      title: "Maketing",
      subtitle: "",
      description: (
        <ul className="p-4">
          <li className="list-disc">
            <a href="https://drive.google.com/file/d/17m8Tij6FyuolJhWMgkT_yQiak8pWCNGz/view?usp=sharing">Community Manager ↗︎</a>
          </li>
          <li className="list-disc">
            <a href="https://drive.google.com/file/d/1JG6lYDorrtBJKASRf6oVqLEyJD1zG3aI/view?usp=sharing">Storytelling ↗︎</a>
          </li>
          <li className="list-disc">
            <a href="https://drive.google.com/file/d/1aOZbSN4UzPB7ReXm0VihbOq224Xb3p2n/view?usp=sharing">
              Marketing de Servicios ↗︎
            </a>
          </li>
          <li className="list-disc">
            <a href="https://drive.google.com/file/d/1WSq7mZBpAs0_arfR_TBEZW-wZdSwljUl/view?usp=sharing">
              Emprendimeinto para los negocios ↗︎
            </a>
          </li>
          <li className="list-disc">
            <a href="https://drive.google.com/file/d/1oDh4VjmgAUSrMIBrhrKMUVuWJq0Q497d/view?usp=sharing">
              Branding ↗︎
            </a>
          </li>
        </ul>
      ),
      grid: "col-span-8 sm:col-span-12",
    },
    {
      id: "2",
      title: "Otros",
      subtitle: "",
      description: (
        <ul className="p-4">
          <li className="list-disc">
            <a href="https://drive.google.com/file/d/1ERIXez-UrHPfzgbR7AgRmHznMzu7esU0/view?usp=sharing">Backend↗︎</a>
          </li>
          <li className="list-disc">
            <a href="https://drive.google.com/file/d/1E1wuJghETPcSG1ph4W8xCUKb_Jn36HMX/view?usp=sharing">
              Introduction to Cybersecurity ↗︎
            </a>
          </li>
          <li className="list-disc">
            <a href="https://drive.google.com/file/d/19CFc1hAYdSIEBgYnBnXTDlthlEFExhFD/view?usp=sharing">
              Introduccion a Bases de datos ↗︎
            </a>
          </li>
          <li className="list-disc">
            <a href="https://drive.google.com/file/d/1mhT8xFoxNBYvKxF-cJuGh-XZSdboaUUG/view?usp=sharing">
              Control deversiones - Git y GitHub ↗︎
            </a>
          </li>
          <li className="list-disc">
            <a href="https://drive.google.com/file/d/1HLkDc1sh56egdjNaCLZ8oOE9xrBbC-Oo/view?usp=sharing">
              Introduction to Packet Tracer ↗︎
            </a>
          </li>
          <li className="list-disc">
            <a href="https://drive.google.com/file/d/1TNMwyU8IGhF5_AKUlB36LfAM4YvVpoFo/view?usp=sharing">Python ↗︎</a>
          </li>
        </ul>
      ),
      grid: "col-span-4 sm:col-span-12",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-12 grid-rows-2 gap-4  sm:grid-rows-2">
        {items.map((item) => (
          <motion.div
            className={`card bg-white rounded-lg shadow-md cursor-pointer transform transition-transform duration-100 hover:scale-105 ${
              item.grid
            } ${selectedId === item.id ? "card-selected" : ""}`}
            layoutId={`card-container-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            key={item.id}
            initial={{ scale: 1 }}
            animate={{ scale: selectedId === item.id ? 1.1 : 1 }} // Increase scale on selected card
            transition={{ duration: 0.2 }}
          >
            <div className={`card-content p-5 border rounded-lg`}>
              <motion.h2 className="text-xl font-bold mb-2 text-yellow-400">
                {item.title}
              </motion.h2>
              <motion.h5 className="text-sm font-bold mb-1 text-gray-700">
                {item.subtitle}
              </motion.h5>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {items.map(
              (item) =>
                item.id === selectedId && (
                  <motion.div
                    className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                    layoutId={`card-container-${item.id}`}
                    key={item.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <motion.div className="relative w-96 sm:p-4 sm:w-80">
                      <motion.button
                        className="absolute top-2 right-2 py-1 px-2 text-center text-black"
                        onClick={() => setSelectedId("")}
                      >
                        {/**svgCLOSE */}
                        <svg
                          class="w-6 h-6 text-gray-800 hover:text-red-600 sm:text-red-600"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18 17.94 6M18 18 6.06 6"
                          />
                        </svg>
                      </motion.button>
                      <motion.h2 className="text-3xl font-bold mb-2 text-black/50">
                        {item.title}
                      </motion.h2>
                      <motion.h5 className="text-sm font-bold mb-1 text-gray-700">
                        {item.subtitle}
                      </motion.h5>
                      <motion.p className="text-sm text-gray-700 mb-4">
                        {item.description}
                      </motion.p>
                      <motion.p
                        className="text-md text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      ></motion.p>
                    </motion.div>
                  </motion.div>
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FramerSkills;
