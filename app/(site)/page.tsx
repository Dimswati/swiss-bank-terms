import { Check, CheckCheck, X } from 'lucide-react'
import React from 'react'
import VerifyAddressForm from '../components/VerifyAddressForm'
import Banner from '../components/Banner'
import Link from 'next/link'

const page = () => {
  return (
    <main>
      <Banner />
      <section className='max-w-screen-lg container mb-8'>
        <h4 className='font-semibold uppercase mb-4'>recipient details</h4>
        <div className='p-4 border border-red-500 rounded-md w-full grid sm:grid-cols-3 grid-cols-1 gap-y-4'>
          <div className='flex sm:flex-col flex-row w-full uppercase text-sm gap-y-4'>
            <div className='sm:w-full sm:basis-1/2 w-1/2 basis-1/2'>
              <h5 className='text-neutral-500 mb-1'>full names</h5>
              <p className='font-bold'>john soliday</p>
            </div>
            <div className='sm:w-full sm:basis-1/2 w-1/2 basis-1/2'>
              <h5 className='text-neutral-500 mb-1'>surname</h5>
              <p className='font-bold'>soliday</p>
            </div>
          </div>
          <div className='flex sm:flex-col flex-row w-full uppercase text-sm gap-y-4'>
            <div className='sm:w-full sm:basis-1/2 w-1/2 basis-1/2'>
              <h5 className='text-neutral-500 mb-1'>mobile number</h5>
              <p className='font-bold'>+1 703 628 6515</p>
            </div>
            <div className='sm:w-full sm:basis-1/2 w-1/2 basis-1/2'>
              <h5 className='text-neutral-500 mb-1'>verified email address</h5>
              <p className='font-bold break-words'>jsoliday98@gmail.com</p>
            </div>
          </div>
          <div className='flex sm:flex-col flex-row w-full uppercase text-sm gap-y-4'>
            <div className='sm:w-full sm:basis-1/2 w-1/2 basis-1/2'>
              <h5 className='text-neutral-500 mb-1'>state</h5>
              <p className='font-bold'>virginia</p>
            </div>
            <div className='sm:w-full sm:basis-1/2 w-1/2 basis-1/2'>
              <h5 className='text-neutral-500 mb-1'>postal code</h5>
              <p className='font-bold'>22192</p>
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-screen-lg container mb-8'>
        <h4 className='font-semibold uppercase mb-4'>fees & charges cleared</h4>
        <div className='border border-neutral-200 rounded-md p-4 mb-4'>
          <div className='flex w-full divide-x divide-neutral-200 pb-4 border-b border-neutral-200'>
            <div className='md:w-9/12 md:basis-9/12 w-8/12 basis-8/12 pr-3'>
              <h5 className='font-semibold'>Re-embursment fee</h5>
              <p>Website should show auto generate receipt showing payment confirmation of all previous payments</p>
            </div>
            <div className='md:w-3/12 md:basis-3/12 w-4/12 basis-4/12 pl-3'>
              <p className='font-semibold mb-2'>CHF 20,000</p>
              <span className='text-sm flex gap-x-2 bg-green-100 px-2 py-1 rounded-full items-center w-fit'><CheckCheck size={12} className='' />cleared</span>
            </div>
          </div>
          <div className='flex w-full divide-x divide-neutral-200 py-4 border-b border-neutral-200'>
            <div className='md:w-9/12 md:basis-9/12 w-8/12 basis-8/12 pr-3'>
              <h5 className='font-semibold'>Reversal fee</h5>
              <p>Website should show auto generate receipt showing payment confirmation of all previous payments</p>
            </div>
            <div className='md:w-3/12 md:basis-3/12 w-4/12 basis-4/12 pl-3'>
              <p className='font-semibold mb-2'>CHF 2,000</p>
              <span className='text-sm flex gap-x-2 bg-green-100 px-2 py-1 rounded-full items-center w-fit'><CheckCheck size={12} className='' />cleared</span>
            </div>
          </div>
          <div className='flex w-full divide-x divide-neutral-200 pt-4'>
            <div className='md:w-9/12 md:basis-9/12 w-8/12 basis-8/12 pr-3'>
              <h5 className='font-semibold'>Inflation on BTC investment</h5>
              <p>Inflation on BTC Investment includes capital gains from previous investment</p>
            </div>
            <div className='md:w-3/12 md:basis-3/12 w-4/12 basis-4/12 pl-3'>
              <p className='font-semibold mb-2'>CHF 6,000</p>
              <span className='text-sm flex gap-x-2 bg-green-100 px-2 py-1 rounded-full items-center w-fit'><CheckCheck size={12} className='' />cleared</span>
            </div>
          </div>
        </div>
        <p className='text-sm font-medium'>* Any miscellaneous fee paid by recipient will be reimbursed upon clearance of charges </p>
      </section>
      <section className='max-w-screen-lg container mb-8'>
        <div className='rounded-md shad p-4 mb-4 shadow-md border border-neutral-100'>
          <h4 className='font-semibold uppercase mb-4'>transfer in progress</h4>
          <div className='flex gap-x-4 w-full'>
            <div className='relative'>
              <div className=' text-white bg-green-500 rounded-full p-2 flex items-center justify-center w-9 h-9'>
                <Check size={18} />
              </div>
              <div className='bg-green-500 w-[2px] absolute inset-0 mx-auto -z-10'></div>
            </div>
            <div className='w-full mb-8'>
              <h4 className='mb-2 font-semibold'>Transfer Initiated</h4>
              <div className='flex justify-between gap-x-4 w-full'>
                <span>Transaction ID: <span className='uppercase font-bold'>#TXD015</span></span>
                <p className='text-neutral-500'>Feb 20, 3:36 AM</p>
              </div>
            </div>
          </div>
          <div className='flex gap-x-4 w-full'>
            <div className='relative'>
              <div className=' text-white bg-green-500 rounded-full p-2 flex items-center justify-center w-9 h-9'>
                <Check size={18} />
              </div>
              <div className='bg-red-100 w-[2px] absolute inset-0 mx-auto -z-10'></div>
            </div>
            <div className='w-full mb-8'>
              <h4 className='mb-2 font-semibold'>Payment Confirmed</h4>
              <p>All fees cleared, ledger debit process initiated</p>
            </div>
          </div>
          <div className='flex gap-x-4 w-full'>
            <div className='relative'>
              <div className='text-red-600 bg-red-100 rounded-full p-2 flex items-center justify-center w-9 h-9'>
                <X size={18} />
              </div>
              <div className='bg-neutral-100 w-[2px] absolute inset-0 mx-auto -z-10'></div>
            </div>
            <div className='w-full mb-8'>
              <h4 className='mb-2 font-semibold'>Sending to BTC Address</h4>
              <div className='bg-neutral-100 px-4 py-4 rounded'>
                <h5 className='font-semibold mb-1'>Transfer canceled by system</h5>
                <p className='mb-2'>We need more information regarding the <span className='font-bold'>source of funds</span></p>
                <Link className='text-red-600 font-medium px-3 py-1 border-2 border-red-600 rounded-full' href="/payment-cancelation">view full details</Link>
              </div>
            </div>
          </div>
          <div className='flex gap-x-4 w-full'>
            <div className=' bg-neutral-100 rounded-full p-2 flex items-center justify-center w-9 h-9'>
            </div>
            <div className='w-full'>
              <h4 className='mb-2 font-semibold'>Transfered Successful</h4>
              <p><span className='font-bold'>2.5098 BTC</span> transferred to <span className='font-bold break-all'>392NQstZKRCHBGNR4nNR7PRhQtXS5xRKAV</span></p>
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-screen-lg container mb-8'>
        <VerifyAddressForm />
      </section>
      <section className='max-w-screen-lg container mb-8'>
        <div className='border border-neutral-200 rounded-md p-4'>
          <h4 className='font-semibold uppercase mb-4'>bitcoin ledger account</h4>
          <div className='flex sm:flex-row gap-x-4 gap-y-6 flex-col sm:divide-x divide-neutral-200'>
            <div className="sm:w-1/2 sm:basis-1/2 w-full basis-full">
              <div className='border-b border-neutral-200 pb-3 mb-2'>
                <h5 className='text-red-600 text-sm'>Before BTC inflation - 17/02/2024</h5>
                <h2 className='font-bold'>2.52098 BTC</h2>
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
                <span className='text-sm flex gap-x-2 bg-green-100 px-2 py-1 rounded-full items-center w-fit font-medium'><CheckCheck size={12} className='' />cleared</span>
              </div>
            </div>
            <div className='sm:w-1/2 sm:basis-1/2 w-full basis-full sm:pl-4'>
              <div className='border-b border-neutral-200 pb-3 mb-2'>
                <h5 className='text-red-600 text-sm'>After BTC inflation - due on 11/02/2025</h5>
                <h2 className='font-bold'>2.52098 BTC</h2>
              </div>
              <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                <h5>amount in usd</h5>
                <p>$ 244,297.07</p>
              </div>
              <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                <h5>amount in chf</h5>
                <p>CHF 222,240.42</p>
              </div>
              <div className='uppercase font-semibold flex justify-between items-center mb-6'>
                <h5>tax(15%)</h5>
                <span className='text-sm flex gap-x-2 bg-green-100 px-2 py-1 rounded-full items-center w-fit font-medium'><CheckCheck size={12} className='' />cleared</span>
              </div>
              <div className='border-b border-neutral-200 pb-3 mb-2'>
                <h5 className='text-red-600 text-sm'>Re-reimbursement fee</h5>
                <h2 className='font-bold'>0.20 BTC</h2>
              </div>
              <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                <h5>amount in usd</h5>
                <p>$ 20,000.00</p>
              </div>
              <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                <h5>amount in chf</h5>
                <p>CHF 18,230.40</p>
              </div>
              <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                <h5>tax(0%)</h5>
                <span className='text-sm flex gap-x-2 bg-green-100 px-2 py-1 rounded-full items-center w-fit font-medium'><CheckCheck size={12} className='' />cleared</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
