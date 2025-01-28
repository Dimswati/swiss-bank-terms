"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Cookies from "js-cookie"


const SubmitForm = () => {

    const router = useRouter()

    const [isChecked, setIsChecked] = useState(false)

    const handleSubmit = () => {
        
        Cookies.set("agreed-terms", "yes", { expires: 1 })

        return router.replace("/thank-you")
    }


    return (
        <div>
            <form className='mb-2'>
                <label htmlFor="agreechecked" className='uppercase font-semibold'>
                    <input id='agreechecked' type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}></input>
                    I have read and understood the above terms and conditions
                </label>
            </form>
            <button disabled={!isChecked} onClick={handleSubmit} className='uppercase disabled:bg-[#073871]/60 disabled:cursor-not-allowed cursor-pointer w-full bg-[#073871] h-11 flex justify-center items-center text-neutral-100'>I agree</button>
        </div>
    )
}

export default SubmitForm