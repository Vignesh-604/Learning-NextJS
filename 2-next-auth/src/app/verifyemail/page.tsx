'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function VerifyEmailPage() {
    const [token, setToken] = useState("")
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState(false)

    // const router = useRouter()           // not mounted error (not used anyway)

    const verifyEmail = async () => {
        try {
            await axios.post(`/api/users/verify`, token)
            setVerified(true)
            setError(false)
        } catch (error: any) {
            console.log(error.response.data)
            setError(true)
        }
    }

    useEffect(() => {
        setError(false)
        const urlToken = window.location.search.split("=")[1]       // normal method
        setToken(urlToken || "")

        // const { query } = router         // accessing query token using nextJS methods
        // const url = query.token
    }, [])

    useEffect(() => {
        setError(true)
        if (token.length > 0) verifyEmail()
    }, [token])


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">

            <h1 className="text-4xl">Verify Email</h1>
            <h2 className="p-2 bg-orange-500 text-black">{token ? `${token}` : "no token"}</h2>

            {verified && (
                <div>
                    <h2 className="text-2xl">Email Verified</h2>
                    <Link href="/login">Login</Link>
                </div>
            )}
            {error && (
                <div>
                    <h2 className="text-2xl bg-red-500 text-black">Error</h2>
                </div>
            )}
        </div>
    )
}