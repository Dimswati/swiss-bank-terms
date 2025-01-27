"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

type Props = {}

const SubmitForm = (props: Props) => {

    const router = useRouter()

    const [isChecked, setIsChecked] = useState(false)

    return (
        <div>
            <form className='mb-2'>
                <label htmlFor="agreechecked" className='uppercase font-semibold'>
                    <input id='agreechecked' type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}></input>
                    I have read and understood the above terms and conditions
                </label>
            </form>
            <button disabled={!isChecked} onClick={() => router.replace("/thank-you")} className='uppercase disabled:bg-[#073871]/60 disabled:cursor-not-allowed cursor-pointer w-full bg-[#073871] h-11 flex justify-center items-center text-neutral-100'>I agree</button>
        </div>
    )
}

export default SubmitForm