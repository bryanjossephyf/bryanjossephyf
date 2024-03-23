import Layout from "./Layaout";
import {motion} from "framer-motion"
import FramerSkills from "@/components/framer-skills/FramerSkills.jsx"

const animateH1 = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.9
      }
    }
  }



function Skills() {
  return (
    <>
      <Layout>
        <div className="w-full mx-auto py-2 flex items-center justify-center text-center mt-16 mb-32 ">
          <motion.h1
            className="inline-block w-full text-black font-bold capitalize text-8xl sm:text-6xl"
            variants={animateH1}
            initial="initial"
            animate="animate"
          >
            Skills
          </motion.h1>
        </div>

        <div>
        <motion.h1
            className="inline-block w-full text-black font-bold capitalize text-5xl sm:text-2xl text-center mb-10"
            variants={animateH1}
            initial="initial"
            animate="animate"
          >
            Cursos complementarios
          </motion.h1>
          <FramerSkills></FramerSkills>
        </div>
        
      </Layout>
    </>
  );
}

export default Skills;
