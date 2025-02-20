"use client"

import Image from "next/image"
import Cookies from "js-cookie"

import securelogo from "../../public/security-lock.png"
import { useForm } from "react-hook-form"
import { useRouter } from 'next/navigation'
import { useState } from "react"

type FormProps = {
  username: string,
  authtoken: string
}

const LoginForm = () => {

  const username = "johnsoliday"
  const token = "YxF7CVf0bL0KOHGDHSl3n3oZA"

  const router = useRouter()
  const [error, setError] = useState<string>()

  const { handleSubmit, register } = useForm<FormProps>()

  const onSubmit = (formValues: FormProps) => {
    if (formValues.authtoken == token && formValues.username == username) {
      // set cookie
      // redirect to homepage
      Cookies.set("token", formValues.authtoken, { expires: 1 })
      router.replace("/")
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col mt-4 mx-4'>
      <label htmlFor="" className="mb-4">
        <span className='block mb-2 uppercase font-medium'>username</span>
        <input type="text" {...register("username", { required: "username required" })} className='w-full h-10 border-2 border-neutral-200 outline-none focus-visible:outline-none pl-4' />
      </label>
      <label htmlFor="" className="mb-4">
        <span className='block mb-2 uppercase font-medium'>authentication token</span>
        <input type="password" {...register("authtoken", { required: "token required" })} className='w-full h-10 border-2 border-neutral-200 outline-none focus-visible:outline-none pl-4' />
      </label>
      <button className='bg-[#051F3C] h-10 text-neutral-100 rounded mb-2'>ACCESS</button>
      {error ? <span className="text-red-500 font-medium text-sm w-full text-center">{error}</span> : <></>}
      <div className="flex gap-1 text-sm uppercase items-center w-full justify-center font-semibold text-neutral-500">
        <Image src={securelogo} width={48} className="aspect-square" alt="3dsecure" />
        <p>3d secure authentication</p>
      </div>
    </form>
  )
}

export default LoginForm
