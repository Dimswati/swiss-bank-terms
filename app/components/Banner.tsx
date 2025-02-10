"use client"

import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { twMerge } from "tailwind-merge"
import useBTCAdress from "@/lib/hooks"

type Props = {}

const Banner = () => {

    // const [verifiedAddress, setVerifiedAddress] = useState<string>()

    // useEffect(() => {
    //     const btcaddress = Cookies.get("btcaddress")
    //     if(btcaddress) {
    //         setVerifiedAddress(btcaddress)
    //     }
    // }, [])

    const { verifiedAddress } = useBTCAdress()

    return (
        <section className='max-w-screen-lg container mt-4 mb-8'>
            <div className='mb-4'>
                <p>Transaction ID:  <span className='font-bold'>#TXD015</span></p>
            </div>
            <div className={twMerge('bg-red-100 p-4 flex md:flex-row flex-col gap-y-4 justify-between md:items-center items-start rounded-md', Boolean(verifiedAddress) && "bg-green-100")}>
                <div>
                    <h4 className='text-lg font-semibold'>{Boolean(verifiedAddress) ? <>BTC Address Confirmed</> : <>Pending btc address verification</>}</h4>
                    <p>{Boolean(verifiedAddress) ? <><span className="font-bold">2.52098</span> BTC will be debited to <span className="font-bold break-all">{verifiedAddress}</span> after all fees are cleared</> : <>Verify address to receive the payout</>}</p>
                </div>
            </div>
        </section>
    )
}

export default Banner