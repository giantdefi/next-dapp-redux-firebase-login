import Link from 'next/link'

import Head from 'next/head'

import { useSelector, useDispatch } from 'react-redux';

import Mainheader from 'templates/Mainheader'


export default function Home() {

  const { isLogin, userid, email } = useSelector((state) => state.AuthReducer)


  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NextJS Login Firebase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Mainheader />

      <main className='container px-20  pt-10 pb-40'>


        <p className='mb-5 mt-2 font-bold text-3xl'>Implementation of NexJS, Tailwind, Redux Toolkit and Firebase Login</p>
   
   <p>You must register to firebase to get credential key data.</p>
   
        <div className='font-bold mb-2 text-lg mt-2'>Current Login Status : </div>
        <p className='mb-2'>is Login : {isLogin ? 'YES, you are logged in' : 'NO, you are not login!'} </p>
        <p>Userid : {userid || '----'} </p>
        <p>Email : {email || '----'} </p>

        <div className="mt-5">
          <p className='font-bold mb-2 text-xl'>How it works?</p>

          <p>When user login with Google Firebase, then he is logged in on the server side.</p><br />

          <p>When reload or refresh the page, this app send POST request to server to get the login status :</p>
          <p className="font-serif text-blue-800">https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIza.........</p>
          <p>This request requires some seconds to get the response.</p><br />
          <p>So, we implement redux persist to store user data on local storage to faster getting login data on page refresh
            without waiting response from the server.</p>
            <p>Please open the console and check the local storage</p>
            <p>Also, check the Redux Dev tool on your browser to show the redux states.</p>
            <br />
          <p>If user delete the local storage and refresh the page, this app will get the login status from the server and restore the login status on the local storage.</p>
          <p>Meaning, user can not logout by deleting the local storage.</p>
          <p>Logout can only be performed by logout from the server side.</p>
        </div>

      </main>


    </div>
  )
}
