"use client"
import { useState, useEffect } from "react"

type Props = {
    connectButton: () => void
}

const ConnectButton = ({ connectButton }: Props) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        if (!isMounted) {
            setIsMounted(true)
        }
    }, [])

    if (!isMounted) return null

    return (
        <>
            {(typeof window.ethereum !== "undefined") ? <button onClick={connectButton} className="bg-green-600 text-white font-medium px-3 h-9 flex items-center justify-center rounded-full uppercase disabled:bg-green-300 disabled:cursor-not-allowed">connect metamask</button> : <span className="text-neutral-600 italic">Install Metamask to your browser</span>}
        </>
    )
}

export default ConnectButton