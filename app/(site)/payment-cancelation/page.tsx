import React from 'react'

const page = () => {
    return (
        <section className='max-w-screen-lg container my-8'>
            <h2 className='font-bold text-2xl'>We need some information from you</h2>
            <br />
            <h3 className='font-bold text-lg'>Why do we need this information?</h3>
            <br />
            <div>
                We need additional information from you since we&#39;ve noticed suspicious activity in your account.
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
                    <li>Withdraw money from your account</li>
                    <li>Withdraw money from your account</li>
                </ol>
                <br />
                <br />
                <h3 className='font-bold text-lg'>What should you do?</h3>
                <br />
                     Provide the <span className='font-bold'>gambling tax amount</span> of 4095 CHF and information we&#39;ve requested regarding the source of the funds in your account. This will be filled in by your Ledger Account Manager
                <br />
                <br />
                <h3 className='font-bold text-lg'> What happens next?</h3>
                <br />
                After you&#39;ve submitted the information, we&#39;ll review and reinstate back your account, you will be able to complete your transactions successfully within 12 hours

                <br />
                <br />
                We appreciate your help with this matter.</div>
        </section>
    )
}

export default page