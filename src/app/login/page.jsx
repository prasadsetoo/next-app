"use client"

import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'

function Login() {
    const router = useRouter()
    const username = useRef(null)
    const password = useRef(null)
    async function login(e) {
        e.preventDefault();
        console.log(username.current.value)
        let res = await fetch("https://testapp-1-rcf6.onrender.com/api/auth/local", {
            method: 'POST',
            body: JSON.stringify({ "identifier": username.current.value, "password": password.current.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let data = await res.json();
        console.log(data.jwt)
        localStorage.setItem("token-testapp", data.jwt)
        router.push("/")

    }
    return (
        <><div>Login now ...</div>
            <form onSubmit={login}>
                <label htmlFor="username">username</label>
                <input type="text" ref={username} />
                <label htmlFor="password"></label>
                <input type="password" ref={password} />
                <button type='submit'>submit</button>
            </form>
        </>

    )
}

export default Login