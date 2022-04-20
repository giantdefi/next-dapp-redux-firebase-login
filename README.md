# next-dapp-redux-firebase-login
Implementation of NexJS, Tailwind, Redux Toolkit and Firebase Login

This page is the continue version of next-dapps-redux repository

## How it works

When user login with Google Firebase, then he is logged in on the server side.

When reload or refresh the page, this app send POST request to server to get the login status :

https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIza.........

This request requires some seconds to get the response.

So, we implement redux persist to store user data on local storage to faster getting login data on page refresh without waiting response from the server.

Please open the console and check the local storage

If user delete the local storage and refresh the page, this app will get the login status from the server and restore the login status on the local storage.

Meaning, user can not logout by deleting the local storage.

Logout can only be performed by logout from the server side.

Check local storage for persist State.
Also install Redux dev tools to monitor the state.

## Deploy on Vercel

Check out the deployed of this script on vercel.

https://next-dapp-redux-firebase-login.vercel.app/
