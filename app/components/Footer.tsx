import React from 'react'

const Footer = () => {
    return (
        <footer >
            <section className='bg-[#051F3C] py-8 text-neutral-300'>
                <section className='container max-w-screen-lg flex justify-between md:flex-row flex-col gap-y-6'>
                    <div>
                        <h3 className='text-white font-semibold mb-4'>Postal address & contact</h3>
                        <p className='mb-3 block'>Swiss National Bank <br />
                            Börsenstrasse 39 <br />
                            P. O. Box <br />
                            CH-8027 Zurich</p>
                        <span>Telephone +44 7723 786998</span>
                    </div>
                    <div className='flex md:flex-row flex-col gap-y-6 justify-between items-start gap-x-6'>
                        <div>
                            <h4 className='text-white font-semibold mb-4'>Quick links</h4>
                            <div className='text-sm flex flex-col gap-3'>
                                <p>Monetary policy</p>
                                <p>Annual report</p>
                                <p>Current interest rates and exchange rates</p>
                                <p>Responsibilities and goals of the SNB</p>
                                <p>Time schedule</p>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-white font-semibold mb-4'>Information for</h4>
                            <div className='text-sm flex flex-col gap-3'>
                                <p>Media</p>
                                <p>Financial market participants</p>
                                <p>Shareholders</p>
                            </div>
                        </div>
                        <div>
                            <h4 className='text-white font-semibold mb-2'>Portals</h4>
                            <div className='text-sm flex flex-col gap-3'>
                                <p>SNB data portal</p>
                                <p>eSurvey</p>
                                <p>Vacancies</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className='bg-[#063971] py-6 text-white'>
                <section className='container max-w-screen-lg flex md:flex-row flex-col gap-y-6 justify-between md:items-center items-start'>
                    <h3 className='font-thin'>© Swiss Bank, Zurich (Switzerland) 2025</h3>
                    <div className='flex md:flex-row flex-col gap-y-2 gap-x-6 text-neutral-100'>
                        <p>Copyright</p>
                        <p>Limitation of liability</p>
                        <p>Data protection</p>
                    </div>
                </section>
            </section>
        </footer>

    )
}

export default Footer