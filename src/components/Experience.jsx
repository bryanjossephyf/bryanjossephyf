import {motion, useScroll} from "framer-motion"
import { useRef } from "react";



const dataWork = [
  {
    puesto: "Practicante de marketing",
    empresa: "Google empresa",
    tiempo: "6 meses",
    descripcion: "Encercado de llevar las redes de la empresa",
    linkEmpresa: "/",
    direccion: "calle 123",
  },
  {
    puesto: "Practicante de marketing",
    empresa: "Google empresa",
    tiempo: "6 meses",
    descripcion: "Encercado de llevar las redes de la empresa",
    linkEmpresa: "/",
    direccion: "calle 123",
  },
  {
    puesto: "analista de marketing",
    empresa: "Google empresa",
    tiempo: "6 meses",
    descripcion: "Encercado de llevar las redes de la empresa",
    linkEmpresa: "/",
    direccion: "calle 123",
  },
  {
    puesto: "Comunity manager",
    empresa: "Google empresa",
    tiempo: "6 meses",
    descripcion: "Encercado de llevar las redes de la empresa",
    linkEmpresa: "/",
    direccion: "calle 123",
  },
];

{
  /** */
}
function Experience() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experiencia
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full sm:p-5">
        <motion.div  style={{scaleY: scrollYProgress}} className="absolute left-8 top-8 w-[4px] h-full bg-yellow-400 origin-top border"></motion.div>



        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {dataWork.map((data, index) => (
            <li key={index} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
              <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className="capitalize font-bold text-2xl">
                  {data.puesto} |
                  <a
                    href={data.linkEmpresa}
                    target="_blank"
                    className="text-yellow-400"
                  >
                    @{data.empresa}
                  </a>
                </h3>
                <span className="capitalize font-medium text-black/75">
                  {data.tiempo} | {data.direccion}
                </span>
                <p className="font-medium w-full">{data.descripcion}</p>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Experience;
