"use client"
import Cookies from "js-cookie"

import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from "react"

type AcknowledgeForm = {
  acknowledge: boolean
}

const AcknowledgeForm = () => {

  // fees cleared - false | true
  const feeCleared = false

  const router = useRouter()
  const [acknowledge, setAcknowledge] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const accepted = e.target.checked

    if (accepted) {
      setAcknowledge(true)
    } else {
      setAcknowledge(false)
    }
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //setting the cookie only
    console.log("cookie set")
    Cookies.set("acknowledge", "accepted", { expires: 30 })
    router.refresh()
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <label htmlFor="acceptCheckbox" className='flex gap-x-2 font-bold uppercase mb-3'>
        <input type="checkbox" id="acceptCheckbox" onChange={handleChange} />
        <p>i acknowledge the information provided is correct and up to date</p>
      </label>
      <button disabled={!feeCleared || !acknowledge} className='h-10 px-4 sm:w-fit w-full bg-green-600 rounded text-neutral-100 font-medium disabled:bg-green-600/50 disabled:cursor-not-allowed uppercase'>i accept</button>
    </form>
  )
}

export default AcknowledgeForm