import AcknowledgeForm from '@/app/components/AcknowledgeForm'
import { AlarmClock, CheckCheck } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <main>
      <section className='max-w-screen-lg container mb-8'>
        <h2 className='mb-3 mt-5 font-bold'>Client Verification Document</h2>
        <p className='mb-4'>The transaction was successfully initiated and verification of all required documents and fees has been fully paid. The above mentioned beneficiary acknowledges this by signing name and signature.</p>
        <h3 className='font-bold mb-4'>Required documents provided as follows</h3>
        <h4 className='font-bold text-red-600 mb-3'>Identifying All Parties Involved</h4>
        <div className='flex items-center font-bold gap-x-4 mb-4'>
          <div className='flex flex-col gap-y-2 w-1/2 basis-1/2'>
            <span className='text-neutral-400'>Trustees</span>
            <span>Francois Gracia</span>
          </div>
          <div className='flex flex-col gap-y-2 w-1/2 basis-1/2'>
            <span className='text-neutral-400'>Beneficiaries</span>
            <span>John Soliday</span>
          </div>
        </div>
        <div className='flex items-center font-bold gap-x-4 mb-4 pb-4 border-b border-neutral-200'>
          <div className='flex flex-col gap-y-2 w-1/2 basis-1/2'>
            <span className='text-neutral-400'>Authorized Signatories</span>
            <span>Francois Gracia</span>
          </div>
          <div className='flex flex-col gap-y-2 w-1/2 basis-1/2'>
            <span className='text-neutral-400'>Beneficial Owners</span>
            <span>John Soliday</span>
          </div>
        </div>
        <h4 className='font-bold text-red-600 mb-3'>KYC and AML Checks</h4>
        <div className='mb-4 pb-4 border-b border-neutral-200'>
          <p className='font-bold mb-3'>Proof of Address <span className='font-normal text-sm inline-flex gap-x-2 bg-green-100 px-2 py-1 ml-2 rounded-full items-center w-fit'><CheckCheck size={12} className='' />cleared</span></p>
          <p className='font-bold mb-3'>Source of Funds <span className='font-normal text-sm inline-flex gap-x-2 bg-green-100 px-2 py-1 ml-2 rounded-full items-center w-fit'><CheckCheck size={12} className='' />cleared</span></p>
          <p className='font-bold'>Ongoing monitoring <span className='font-normal text-sm inline-flex gap-x-2 bg-green-100 px-2 py-1 ml-2 rounded-full items-center w-fit'><CheckCheck size={12}/>cleared</span></p>
        </div>
        <h4 className='font-bold text-red-600 mb-3'>Documentation and Record Keeping</h4>
        <div className='mb-4 pb-4 border-b border-neutral-200'>
          <p className='font-bold mb-3'>KYC Records: <span className='font-normal text-neutral-600 italic ml-2'>under review by solicitor office</span></p>
          <p className='font-bold mb-3'>Retention Period: <span className='font-normal text-neutral-600 italic ml-2'>under review by solicitor office</span></p>
          <div><p className='font-bold inline-block'>Solicitors fees:</p><p className='ml-2 inline-block uppercase font-bold'>chf 3000</p><span className='font-normal text-sm inline-flex gap-x-2 bg-yellow-200 px-2 py-1 ml-2 rounded-full items-center w-fit'><AlarmClock size={12}/>pending</span></div>
        </div>
        <AcknowledgeForm/>
      </section>
    </main>
  )
}

export default page