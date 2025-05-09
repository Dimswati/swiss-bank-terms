"use client"

import { CheckCheck } from 'lucide-react'
import useEthToUsdPrice from "@/lib/ethPriceToUsdState"
import { convertETHtoUSD } from '@/lib/functions'

const EthereumLedgerAccount = () => {

    const { ethToUsdPrice } = useEthToUsdPrice()

    return (
        <section className='max-w-screen-lg container mb-8'>
            <div className='border border-neutral-200 rounded-md p-4'>
                <h4 className='font-semibold uppercase mb-4'>ETHEREUM ledger account</h4>
                <div className='flex sm:flex-row gap-x-4 gap-y-6 flex-col sm:divide-x divide-neutral-200'>
                    <div className="sm:w-1/2 sm:basis-1/2 w-full basis-full">
                        <div className='border-b border-neutral-200 pb-3 mb-2'>
                            <h5 className='text-red-600 text-sm'>Before ETH inflation - 17/02/2024</h5>
                            <h2 className='font-bold'>135.98 ETH</h2>
                        </div>
                        <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                            <h5>amount in usd</h5>
                            <p>$ 111,240.93</p>
                        </div>
                        <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                            <h5>amount in chf</h5>
                            <p>CHF 101,305.96</p>
                        </div>
                        <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                            <h5>tax(5%)</h5>
                            <span className='text-sm flex gap-x-2 bg-green-100 px-2 py-1 rounded-full items-center w-fit font-medium'><CheckCheck size={12} />cleared</span>
                        </div>
                    </div>
                    <div className='sm:w-1/2 sm:basis-1/2 w-full basis-full sm:pl-4'>
                        <div className='border-b border-neutral-200 pb-3 mb-2'>
                            <h5 className='text-red-600 text-sm'>After ETH inflation - due on 11/02/2025</h5>
                            <h2 className='font-bold'>135.98 ETH</h2>
                        </div>
                        <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                            <h5>amount in usd</h5>
                            <p>{convertETHtoUSD(135.98, ethToUsdPrice)}</p>
                        </div>
                        <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                            <h5>amount in chf</h5>
                            <p>CHF 263 961.99</p>
                        </div>
                        <div className='uppercase font-semibold flex justify-between items-center mb-6'>
                            <h5>tax(15%)</h5>
                            <span className='text-sm flex gap-x-2 bg-green-100 px-2 py-1 rounded-full items-center w-fit font-medium'><CheckCheck size={12} className='' />cleared</span>
                        </div>
                        <div className='border-b border-neutral-200 pb-3 mb-2'>
                            <h5 className='text-red-600 text-sm'>Re-reimbursement fee</h5>
                            <h2 className='font-bold'>12.78 ETH</h2>
                        </div>
                        <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                            <h5>amount in usd</h5>
                            <p>{convertETHtoUSD(12.78, ethToUsdPrice)}</p>
                        </div>
                        <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                            <h5>amount in chf</h5>
                            <p>CHF 24,808.31</p>
                        </div>
                        <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                            <h5>tax(0%)</h5>
                            <span className='text-sm flex gap-x-2 bg-green-100 px-2 py-1 rounded-full items-center w-fit font-medium'><CheckCheck size={12} className='' />cleared</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EthereumLedgerAccount