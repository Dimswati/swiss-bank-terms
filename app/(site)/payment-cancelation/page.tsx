import { ClockArrowDown } from 'lucide-react'
import React from 'react'

const page = () => {

    return (
        <section className='max-w-screen-lg container my-8'>
            <div className="p-4 bg-yellow-100 rounded-md mb-4">
                <div className="flex gap-x-2 items-center">
                    <ClockArrowDown className="w-12 h-12" />
                    <p className="font-bold">Information uploaded successfully, pending payment</p>
                </div>
            </div>
            <h2 className='font-bold text-2xl'>We have received required information from you</h2>
            {/* <h3 className='font-bold text-lg'>Why do we need this information?</h3>
            <br /> */}
            <div>
                {/* We need additional information from you since we&#39;ve noticed suspicious activity in your account.
                <br/>
                <br />
                We&#39;ve also temporarily limited certain features in your legger account.
                <br />
                <br />
                Currently, you won&#39;t be able to:
                <br/>
                <br />
                <ol className='list-decimal list-inside leading-7'>
                    <li>Receive money to your account</li>
                    <li>Make a payment from your account</li>
                    <li>Withdraw money from your account</li>
                </ol>
                <br />
                <br />
                <h3 className='font-bold text-lg'>What should you do?</h3> */}
                <br />
                Provide the <span className='font-bold'>gambling tax amount</span> of 4095 CHF
                <br />
                <br />
                <h3 className='font-bold text-lg'>Information under review</h3>
                <br />
                {/* After you&#39;ve submitted the information, we&#39;ll review and reinstate back your account, you will be able to complete your transactions successfully within 12 hours */}
                Information is under review, once your account is reinstated, you will be able to complete your transactions successfully within 12 hours
                <br />
                <br />
                We appreciate your help with this matter.</div>
        </section>
    )
}

// We have received required information from you

export default page