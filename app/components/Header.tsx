import React from 'react'
import Logo from "../../public/swiss-logo.jpg"
import Image from 'next/image'

const Header = () => {
    return (
        <header className='w-full h-20 bg-white'>
            <div className='max-w-screen-lg container h-full w-full lg:p-0 flex items-center'>
                <Image src={Logo} alt='swiss-bank-logo' className='aspect-auto' width={250} />
            </div>
        </header>
    )
}

export default Header