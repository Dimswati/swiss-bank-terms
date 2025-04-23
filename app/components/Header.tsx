import React from 'react'
import Logo from "../../public/swiss-logo.jpg"
import Image from 'next/image'
import { UserRound } from 'lucide-react'

const Header = () => {
    return (
        <header className='w-full h-20 bg-white shadow-md z-10 sticky top-0'>
            <div className='max-w-screen-lg container h-full w-full lg:p-0 flex justify-between items-center '>
                <Image src={Logo} alt='swiss-bank-logo' className='aspect-auto' width={180} />
                <div className='flex gap-x-2 items-center'>
                    <div className='w-full flex flex-col'>
                        <h4 className='uppercase font-bold text-right'>john soliday</h4>
                            <span className='uppercase text-sm text-red-500 font-medium text-right'>eth ledger</span>
                    </div>
                    <UserRound />
                </div>
            </div>
        </header>
    )
}

export default Header