import { CheckCheck } from 'lucide-react'
import React from 'react'
import Banner from '../components/Banner'
import EthereumLedgerAccount from '../components/EthereumLedgerAccount'

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
              <p className='font-semibold mb-2'>CHF 24,808.31</p>
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
      {/* <section className='max-w-screen-lg container mb-8'>
        <TransferProcess/>
      </section>
      <section className='max-w-screen-lg container mb-8'>
        <VerifyAddressForm />
      </section> */}
      <EthereumLedgerAccount/>
    </main>
  )
}

export default page
