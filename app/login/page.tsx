import React from 'react'
import swissflag from "../../public/swiss-flag.webp"
import LoginForm from '../components/LoginForm'

type Props = {}

const Login = (props: Props) => {
    return (
        <main className="w-full h-screen bg-cover bg-fixed bg-no-repeat grid items-center justify-center" style={{ backgroundImage: `url(${swissflag.src})` }}>
            <section className='bg-white/90 rounded lg:min-w-[40vw] md:[min-w-50vw] sm:min-w-[60vw] min-w-[80vw]'>
                <LoginForm/>
            </section>
        </main>
    )
}

export default Login