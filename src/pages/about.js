import Link from 'next/link'

import Head from 'next/head'

import { useSelector, useDispatch } from 'react-redux';

import Mainheader from 'templates/Mainheader'


export default function About () {

    const { isLogin, userid, email } = useSelector((state) => state.AuthReducer)


    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="NextJS Login Firebase" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Mainheader />

            <main className='container px-20  pt-10'>


                <p className='mb-5 mt-2 font-bold text-3xl'>About page</p>
                <p>User can visit this page with or without Login</p><br />

                <div className='font-bold mb-2 text-lg'>Current Login Status : </div>
                <p className='mb-2'>is Login : {isLogin ? 'YES, you are logged in' : 'NO, you are not login!'} </p>
                <p>Userid : {userid || '----'} </p>
                <p>Email : {email || '----'} </p>


            </main>


        </div>
    )
}
