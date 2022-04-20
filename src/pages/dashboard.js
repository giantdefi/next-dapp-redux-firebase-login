import React, {useEffect } from "react";
import { useRouter } from 'next/router'

import Head from 'next/head'

import { useSelector, useDispatch } from 'react-redux';

import Mainheader from 'templates/Mainheader'


export default function Dashboard() {

    const router = useRouter()

    const { isLogin, userid, email } = useSelector((state) => state.AuthReducer)


    //======= CHECK IS ALREADY LOGIN =====================
    useEffect(() => { 
        if (!isLogin) {
        router.push('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    //==========================================


    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="NextJS Login Firebase" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Mainheader />

            <main className='container px-20  pt-10'>


                <p className='mb-5 mt-2 font-bold text-3xl'>Dashboard page</p>
                <p>User can only visit this page with  Login credential</p><br />

                <div className='font-bold mb-2 text-lg'>Current Login Status : </div>
                <p className='mb-2'>is Login : {isLogin ? 'YES, you are logged in' : 'NO, you are not login!'} </p>
                <p>Userid : {userid || '----'} </p>
                <p>Email : {email || '----'} </p>


            </main>


        </div>
    )
}
