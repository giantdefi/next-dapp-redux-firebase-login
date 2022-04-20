import React, { useEffect } from "react";
import Link from 'next/link'

import JoinButton from '../firebase/JoinButton';

//---- REDUX STORE ---------------------
import { useSelector, useDispatch } from 'react-redux';
import { setLogin, setLogout } from 'redux/auth/AuthReducer';
//--------------------------------------

//----------- Firebase checking user Authentication -----------------
import { auth } from "../firebase/firebaseConfig";
import {
    // createUserWithEmailAndPassword,
    //  signInWithEmailAndPassword,
   // GoogleAuthProvider,
   // signInWithPopup,
    onAuthStateChanged,
   // signOut,
} from "firebase/auth";
//const provider = new GoogleAuthProvider();
//--------------------------------------------------------------------


export default function Home() {

    const dispatch = useDispatch();

  //  const data = useSelector((state) => state.authReducer)

    //--- When user remove/delete local storage
    // When user Login using Firebase, then he can not logout until he logout from the server side
    // Deleting the local storage will not make effect. User will logged in again when page refreshed
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        //   console.log(currentUser.email)
        //   console.log(currentUser.uid)
          if (!currentUser) {
            // make user logout
            dispatch(setLogout())
          } else {
            // keep user user login
            dispatch(setLogin({isLogin : true, userid : currentUser.uid, email : currentUser.email}))
          }
        });
        return unsubscribe;
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


    //console.log(data2)

    return (
        <nav className="navbar bg-blue-800 ">
            <div className="navbar_nav">
                <div className="p-2 flex flex-row  justify-start">

                    <button className="md:hidden rounded-lg focus:outline-none focus:shadow-none">
                        <svg width="20px" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
                        </svg>
                    </button>

                    <Link href="/"><a className="text-2xl md:text-3xl font-bold tracking-normal  rounded-lg focus:outline-none focus:shadow-outline ml-5 md:ml-0">
                        NextDapp
                    </a></Link>
                </div>


                <div className="font-sans flex-col flex-grow pb-4 md:pb-0 hidden md:flex md:justify-end md:flex-row">
                    <div className="-mx-1">
                        <ul className="flex w-full flex-wrap items-center h-10">
                            <li className="block relative" >
                                <Link href="/"><a className="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline 
      hover:no-underline transition-colors duration-100 mx-1 hover:bg-blue-900" >
                                    <span>Home page</span>
                                    <span className="ml-2">
                                    </span>
                                </a></Link>
                            </li>

                            <li className="block relative" >
                                <Link href="/about"><a className="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline 
      hover:no-underline transition-colors duration-100 mx-1 hover:bg-blue-900" >
                                    <span>About page</span>
                                    <span className="ml-2">
                                    </span>
                                </a></Link>
                            </li>

                            <li className="block relative" >
                                <Link href="/dashboard"><a className="flex items-center h-10 leading-10 px-4 rounded cursor-pointer no-underline 
      hover:no-underline transition-colors duration-100 mx-1 hover:bg-blue-900" >
                                    <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="font-bold">Protected page</span>
                                    <span className="ml-2">
                                    </span>
                                </a></Link>
                            </li>

                        </ul>
                    </div>

                    <JoinButton />

                </div>
            </div>

        </nav>
    )
}
