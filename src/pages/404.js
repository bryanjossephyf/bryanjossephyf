import Layout from "@/components/Layaout";
import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
    return (
        <Layout className="text-center h-full ">
            <Head>
                <title>404 | Error :(</title>
                <meta name="description" content="404 Pagina no encontrada" />
            </Head>
            <div className="h-auto sm:h-screen">

                <h1 className="text-5xl mb-8">404 - Pagina no encontrada :( </h1>
                <Link href="/" className='text-lg font-medium capitalize text-black border border-solid sm:border-yellow-400 hover:border-yellow-400 p-2.5 rounded-lg items-center justify-center md:text-base'>Volver</Link>

            </div>
        </Layout>

    )

}