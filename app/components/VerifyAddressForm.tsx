"use client"

import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { CheckCheck } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import useBTCAdress from '@/lib/hooks'

type FormProps = {
    btcaddress: string
}

const VerifyAddressForm = () => { 

    const router = useRouter()
    const { setAddress } = useBTCAdress()
    const [verifiedAddress, setVerifiedAddress] = useState<string>()

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>()

    useEffect(() => {

        const address = Cookies.get("btcaddress")
        if (address && verifiedAddress === undefined) {
            setVerifiedAddress(address)
            setAddress(address)
        }

    })

    const onSubmit = (formValues: FormProps) => {
        const submittedaddress = formValues.btcaddress
        Cookies.set("btcaddress", submittedaddress, { expires: 1 })
        setVerifiedAddress(submittedaddress)
        setAddress(submittedaddress)
        router.refresh()
    }

    return (
        <div className='bg-neutral-200 p-4 rounded-md'>
            <h4 className='font-semibold uppercase mb-4'>receipt btc address</h4>
            <form action="" onSubmit={handleSubmit(onSubmit)} className='flex md:flex-row flex-col justify-between gap-y-4 gap-x-4'>
                <div className='w-full'>
                    <div className={twMerge('w-full bg-white break-words px-3 py-2 rounded-md border border-red-600 mb-3', Boolean(verifiedAddress) && "border-green-600")}>{Boolean(verifiedAddress) ? verifiedAddress : <>392NQstZKRCHBGNR4nNR7PRhQtXS5xRKAV</>}</div>
                    {Boolean(verifiedAddress) ? null : <input type="text" {...register("btcaddress", { required: "BTC address required" })} placeholder='INPUT YOUR ADDRESS' className='w-full h-10 border-2 border-neutral-200 placeholder:text-neutral-300 outline-none focus-visible:outline-none pl-4 rounded-t-md mb-2' />}
                    {Boolean(verifiedAddress) ? null : <span className='text-red-600'>{errors.btcaddress?.message}</span>}
                </div>
                {Boolean(verifiedAddress) ? <div className=' bg-green-100 font-medium px-6 h-9 flex gap-x-2
                \
                 justify-center rounded-full items-center whitespace-nowrap'><CheckCheck size={20}/>Address Verified</div> : <button className='text-base font-medium px-6 h-9 flex items-center justify-center bg-red-700 rounded-full text-white whitespace-nowrap'>Verify Address</button>}
            </form>
        </div>
    )
}

export default VerifyAddressForm

{/* <span className='text-sm font-normal lowercase'>(pending verification)</span> */}