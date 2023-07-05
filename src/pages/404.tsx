import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Error = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])

    return (
    <>
        <Head>
            <title>Error</title>
        </Head>
        <h1> 404 </h1>
        <h2> Oops! Something is going wrong!... </h2>
    </>
    )
  }
  
  export default Error;