"use client"

import { Check, Clock, RotateCcw } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { twMerge } from 'tailwind-merge'

const TransferProcess = () => {

    const [acknowledge, setAcknowledge] = useState<boolean>(false)

    useEffect(() => {
        const acknowledge = Cookies.get("acknowledge")
        if (acknowledge) {
            setAcknowledge(true)
        }
    }, [])

    return (
        <div className='rounded-md shad p-4 mb-4 shadow-md border border-neutral-100'>
            <h4 className='font-bold uppercase mb-4'>transfer in progress</h4>
            <div className={twMerge('bg-green-200 px-2 py-1 rounded-md flex gap-x-1 text-sm items-center font-medium w-fit mb-4')}>
                <RotateCcw size={16} />
                Awaiting Reinitiation
            </div>
            <div className='flex gap-x-4 w-full'>
                <div className='relative'>
                    <div className=' text-white bg-green-500 rounded-full p-2 flex items-center justify-center w-9 h-9'>
                        <Check size={18} />
                    </div>
                    <div className='bg-green-500 w-[2px] absolute inset-0 mx-auto -z-10'></div>
                </div>
                <div className='w-full mb-8'>
                    <h4 className='mb-2 font-bold'>Transfer Initiated</h4>
                    <div className='flex justify-between gap-x-4 w-full'>
                        <span>Transaction ID: <span className='uppercase font-bold'>#TXD015</span></span>
                        <p className='text-neutral-500'>Feb 20, 3:36 AM</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-x-4 w-full'>
                <div className='relative'>
                    <div className=' text-white bg-green-500 rounded-full p-2 flex items-center justify-center w-9 h-9'>
                        <Check size={18} />
                    </div>
                    <div className='bg-yellow-400 w-[2px] absolute inset-0 mx-auto -z-10'></div>
                </div>
                <div className='w-full mb-8'>
                    <h4 className='mb-2 font-bold'>Payment Confirmed</h4>
                    <p>All fees cleared, ledger debit process initiated</p>
                </div>
            </div>
            <div className='flex gap-x-4 w-full'>
                <div className='relative'>
                    <div className='text-black bg-yellow-400 rounded-full p-2 flex items-center justify-center w-9 h-9'>
                        <Clock size={18} />
                    </div>
                    <div className='bg-neutral-100 w-[2px] absolute inset-0 mx-auto -z-10'></div>
                </div>
                <div className='w-full mb-8'>
                    <h4 className='mb-2 font-bold'>Sending to BTC Address</h4>
                    <div className='bg-green-100 px-4 py-4 rounded'>
                        <h5 className='font-bold mb-1'>{acknowledge ? "Transfer Reinitiation Process Ongoing" : "Awaiting Your Review"}</h5>
                        {/* <p className='mb-2'>Information uploaded successfully, pending payment</p> */}
                        <p className='mb-2'>{acknowledge ? "We thank you for compliance to our client verification process" : "We highly appreciate your compliance in uploading required information. As we are currently reviewing your submitted documentation, we ask you to review and acknowledge as per our client verification process procedure"}</p>
                        {!acknowledge && <Link className='text-green-600 text-sm font-medium px-3 py-1 border-2 border-green-600 rounded-full' href="/client-verification">review and acknowledge</Link>}
                    </div>
                </div>
            </div>
            <div className='flex gap-x-4 w-full'>
                <div className=' bg-neutral-100 rounded-full p-2 flex items-center justify-center w-9 h-9'>
                </div>
                <div className='w-full'>
                    <h4 className='mb-2 font-bold'>Transfered Successful</h4>
                    <p><span className='font-bold'>2.5098 BTC</span> transferred to <span className='font-bold break-all'>392NQstZKRCHBGNR4nNR7PRhQtXS5xRKAV</span></p>
                </div>
            </div>
        </div>
    )
}

export default TransferProcess