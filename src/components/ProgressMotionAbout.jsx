import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

function ProgressMotionAbout(props) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "start center"]
        }
    )

    return (
        <div className="">


            <div className=" flex gap-4 p-4 h-full sm:p-0" ref={ref} >
                <span>{props.svg}</span>
                <p className="font-semibold">{props.title}</p>
                <motion.div
                    className="flex my-auto bg-yellow-400 w-full h-2  rounded-sm origin-right"
                    style={{ scaleX: scrollYProgress }} />
            </div>
        </div>
    )
}

export default ProgressMotionAbout