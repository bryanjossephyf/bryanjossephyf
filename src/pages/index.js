import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import HeroImg from "../../public/images/profile/brain-img.jpg"

import { motion } from "framer-motion"
import Layout from '@/components/Layaout'
import TransitionEffect from '@/components/TransitionEffect'
import Script from 'next/script'

{/**animate h1 */ }

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
{/**SVG buttoms */ }

const btnSvg1 = (<svg class="w-6 h-6 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" d="M12 17a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Z" />
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.8 9h2.7a2 2 0 1 0-1-3.7 1.9 1.9 0 0 0-.4-1.4 2 2 0 0 0-3.1-.2 2 2 0 0 0-3.5 1.6 2 2 0 1 0-1 3.7h3.4m3-1v3.6M10.1 9v2.6M15 16h0m-6 0h0m12-4.4a1.8 1.8 0 0 1-1.8 1.3 1.9 1.9 0 0 1-1.8-1.3 1.9 1.9 0 0 1-3.6 0 1.8 1.8 0 0 1-1.7 1.3 2 2 0 0 1-2-1.3 1.8 1.8 0 0 1-1.6 1.3 2 2 0 0 1-2-1.3 1.9 1.9 0 0 1-1.8 1.3A1.8 1.8 0 0 1 3 11.6v.4a9 9 0 0 0 18 0v-.4Z" />
</svg>)

const btnSvg2 = (<svg class="w-6 h-6 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18.5A2.5 2.5 0 0 1 7.5 20h0a2.5 2.5 0 0 1-2.4-3.2 3 3 0 0 1-.8-5.2 2.5 2.5 0 0 1 .9-3.2A2.5 2.5 0 0 1 7 5a2.5 2.5 0 0 1 5 .5m0 13v-13m0 13a2.5 2.5 0 0 0 4.5 1.5h0a2.5 2.5 0 0 0 2.4-3.2 3 3 0 0 0 .9-5.2 2.5 2.5 0 0 0-1-3.2A2.5 2.5 0 0 0 17 5a2.5 2.5 0 0 0-5 .5m-8 5a2.5 2.5 0 0 1 3.5-2.3m-.3 8.6a3 3 0 0 1-3-5.2M20 10.5a2.5 2.5 0 0 0-3.5-2.3m.3 8.6a3 3 0 0 0 3-5.2" />
</svg>)


{/**reactComponet */ }

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bryan josseph</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {/**<!-- Google tag (gtag.js) -->/**/}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-R1CKGB1ZDE"></Script>
        <Script id='google-analytics'>
          {
            `window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
  
            gtag('config', 'G-R1CKGB1ZDE');`
          }
        </Script>
        {/**============================ */}

      <TransitionEffect></TransitionEffect>
      <main className='flex items-center text-black w-full min-h-screen'>
        <Layout className='pt-8 md:pt-16 sm:pt-8'>


          <div className='flex items-center justify-between w-full lg:flex-col'> {/** */}
            <div className='w-1/2 md:w-full'>
              <Image src={HeroImg} alt='cerebro' loading='lazy' className='w-full h-auto  md:inline-block md:w-full' sizes='(max-width: 768px) 100vw,  (max-width:1200px) 50vw, 33vw'></Image>
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              {/** */}
              <div className='w-full mx-auto py-2 flex items-center justify-center text-center sm:py-0 xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl mb-2'>

                <motion.h1 className='inline-block w-full text-black font-bold capitalize text-8xl md:text-5xl sm:text-3xl' variants={animateH1} initial="initial" animate="animate">Hola!, Soy Bryan</motion.h1>
              </div>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>Un estudiante de marketing 😄</p>

              <div className='flex items-center mt-2 sm: sm:gap-3'>
                <Link href="/about" className='flex items-center  bg-black text-white p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-black border border-solid border-transparent hover:border-black md:p-2 md:px-4 md:text-base'>Sobre mi <span className='ml-1'> {btnSvg1}</span></Link>
                <Link href="/projects" className='ml-4 text-lg font-medium capitalize text-black border border-solid hover:border-black p-2.5 rounded-lg flex items-center justify-center md:text-base'>Proyectos <span className='ml-1'>{btnSvg2}</span></Link>
              </div>
            </div>
          </div>
        </Layout>


      </main>
    </>
  )
}


