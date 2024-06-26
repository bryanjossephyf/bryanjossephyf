import Head from "next/head"
import { motion } from "framer-motion"
import Layout from "@/components/Layaout"
import TransitionEffect from "@/components/TransitionEffect"
import Image from "next/image"

import banner from "../../public/images/proyectBanner.png"
import bannerImg from "../../public/images/projectsImg/banner-fremob.webp"


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


function projects() {
    return (
        <>
            <Head>
                <title>Bryan Josseph | Mis projectos</title>
                <meta name="description" content="Generated by create next app" />
            </Head>
            <TransitionEffect></TransitionEffect>
            <main className="w-full mb-16 flex flex-col items-center justify-center">
                <Layout className="pt-16">
                    <div className='w-full mx-auto py-2 flex items-center justify-center text-center mt-16 mb-32'>
                        <motion.h1 className='inline-block w-full text-black font-bold capitalize text-8xl sm:text-5xl ' variants={animateH1} initial="initial" animate="animate">Proyectos</motion.h1>
                    </div>


                    <div className="grid grid-cols-12 grid-rows-2 gap-4  sm:grid-rows-4">

                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            href="https://mypersonalblog-indol.vercel.app/blog/fremob/" className="sm:col-span-12 col-span-5 bg-customPing overflow-hidden rounded-2xl shadow-xl">
                            <div className="flex flex-col">
                                <div className="text-end mr-10 my-4 sm:my-2 sm:mr-5">
                                    <span className="text-xl sm:text-sm text-customColorText">Branding</span>
                                    <h2 className="text-5xl sm:text-3xl text-customColorText">Fremob</h2>
                                </div>
                                <div className="relative -right-12 sm:-right-6" >
                                    <Image src={bannerImg} alt="imagen de proyecto" className="rounded-md" ></Image>
                                </div>
                            </div>
                        </motion.a>


                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            href="/" className="sm:col-span-12 col-span-7 col-start-6 overflow-hidden bg-customOrange rounded-2xl shadow-xl">
                            <div className="flex flex-col">
                                <div className="text-end mr-10 my-4 sm:my-2 sm:mr-5">
                                    <span className="text-xl   sm:text-sm text-customColorText">subtitulo</span>
                                    <h2 className="text-5xl  sm:text-3xl text-customColorText">titulo</h2>
                                </div>
                                <div className="relative -right-12  sm:-right-6" >
                                    <Image src={banner}  alt="imagen de proyecto" ></Image>
                                </div>
                            </div>
                        </motion.a>


                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            href="/" className="sm:col-span-12 col-span-5   overflow-hidden bg-customBlue rounded-2xl shadow-xl">
                            <div className="flex flex-col">
                                <div className="text-end mr-10 my-4 sm:my-2 sm:mr-5">
                                    <span className="text-xl  sm:text-sm text-customColorText">subtitulo</span>
                                    <h2 className="text-5xl sm:text-3xl text-customColorText">titulo</h2>
                                </div>
                                <div className="relative -right-12 sm:-right-6" >
                                    <Image src={banner} alt="imagen de proyecto"  ></Image>
                                </div>
                            </div>
                        </motion.a>


                        <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.8 }}
                            href="/" className="sm:col-span-12 col-span-7 row-start-2 overflow-hidden bg-customGreen rounded-2xl shadow-xl">
                            <div className="flex flex-col">
                                <div className="text-end mr-10 my-4 sm:my-2 sm:mr-5">
                                    <span className="text-xl sm:text-sm text-customColorText">subtitulo</span>
                                    <h2 className="text-5xl sm:text-3xl text-customColorText">titulo</h2>
                                </div>
                                <div className="relative -right-12 sm:-right-6" >
                                    <Image src={banner}  alt="imagen de proyecto" ></Image>
                                </div>
                            </div>
                        </motion.a>
                    </div>



                </Layout>
            </main>
        </>
    )
}

export default projects


