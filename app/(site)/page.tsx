import { AlarmCheck, Check, CheckCheck } from 'lucide-react'
import React from 'react'
import VerifyAddressForm from '../components/VerifyAddressForm'
import Banner from '../components/Banner'

type Props = {}

const page = (props: Props) => {
  return (
    <main>
      <Banner/>
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
              <p className='font-bold'>+33 8908 1200</p>
            </div>
            <div className='sm:w-full sm:basis-1/2 w-1/2 basis-1/2'>
              <h5 className='text-neutral-500 mb-1'>verified email address</h5>
              <p className='font-bold break-words'>johnsoliday@gmail.com</p>
            </div>
          </div>
          <div className='flex sm:flex-col flex-row w-full uppercase text-sm gap-y-4'>
            <div className='sm:w-full sm:basis-1/2 w-1/2 basis-1/2'>
              <h5 className='text-neutral-500 mb-1'>state</h5>
              <p className='font-bold'>virginia</p>
            </div>
            <div className='sm:w-full sm:basis-1/2 w-1/2 basis-1/2'>
              <h5 className='text-neutral-500 mb-1'>postal code</h5>
              <p className='font-bold'>809344</p>
            </div>
          </div>
        </div>
      </section>
      <section className='max-w-screen-lg container mb-8'>
        <h4 className='font-semibold uppercase mb-4'>fees & charges cleared</h4>
        <div className='border border-neutral-200 rounded-md p-4 mb-4'>
          <div className='flex w-full divide-x divide-neutral-200 pb-4 border-b border-neutral-200'>
            <div className='md:w-9/12 md:basis-9/12 w-8/12 basis-8/12'>
              <h5 className='font-semibold'>Re-reimbursement fee</h5>
              <p>Website should show auto generate receipt showing payment confirmation of all previous payments</p>
            </div>
            <div className='md:w-3/12 md:basis-3/12 w-4/12 basis-4/12 pl-3'>
              <p className='font-semibold mb-2'>2000 CHF</p>
              <span className='text-sm flex gap-x-2 bg-green-100 px-2 py-1 rounded-full items-center w-fit'><CheckCheck size={12} className='' />cleared</span>
            </div>
          </div>
          <div className='flex w-full divide-x divide-neutral-200 py-4 border-b border-neutral-200'>
            <div className='md:w-9/12 md:basis-9/12 w-8/12 basis-8/12'>
              <h5 className='font-semibold'>Re-reimbursement fee</h5>
              <p>Website should show auto generate receipt showing payment confirmation of all previous payments</p>
            </div>
            <div className='md:w-3/12 md:basis-3/12 w-4/12 basis-4/12 pl-3'>
              <p className='font-semibold mb-2'>2000 CHF</p>
              <span className='text-sm flex gap-x-2 bg-green-100 px-2 py-1 rounded-full items-center w-fit'><CheckCheck size={12} className='' />cleared</span>
            </div>
          </div>
          <div className='flex w-full divide-x divide-neutral-200 pt-4'>
            <div className='md:w-9/12 md:basis-9/12 w-8/12 basis-8/12'>
              <h5 className='font-semibold'>Re-reimbursement fee</h5>
              <p>Website should show auto generate receipt showing payment confirmation of all previous payments</p>
            </div>
            <div className='md:w-3/12 md:basis-3/12 w-4/12 basis-4/12 pl-3'>
              <p className='font-semibold mb-2'>6000 CHF</p>
              <span className='text-sm flex gap-x-2 bg-yellow-100 px-2 py-1 rounded-full items-center w-fit'><AlarmCheck size={12} className='' />Pending</span>
            </div>
          </div>
        </div>
        <p className='text-sm font-medium'>* Any miscellaneous fee paid by recipient will be reimbursed upon clearance of charges </p>
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
                <h5 className='text-red-600 text-sm'>Before BTC inflation - 17 FEB 2024</h5>
                <h2 className='font-bold'>2.52098 BTC</h2>
              </div>
              <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                <h5>amount in usd</h5>
                <p>$ 105,000</p>
              </div>
              <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                <h5>amount in chf</h5>
                <p>$ 105,000</p>
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
                <p>$ 105,000</p>
              </div>
              <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                <h5>amount in chf</h5>
                <p>$ 105,000</p>
              </div>
              <div className='uppercase font-semibold flex justify-between items-center mb-2'>
                <h5>tax(5%)</h5>
                <span className='text-sm flex gap-x-2 bg-yellow-100 px-2 py-1 rounded-full items-center w-fit font-medium'><AlarmCheck size={12} />Pending</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page