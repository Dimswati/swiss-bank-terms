"use client"
// import useBTCAdress from "@/lib/hooks"

const Banner = () => {

    // const [verifiedAddress, setVerifiedAddress] = useState<string>()

    // useEffect(() => {
    //     const btcaddress = Cookies.get("btcaddress")
    //     if(btcaddress) {
    //         setVerifiedAddress(btcaddress)
    //     }
    // }, [])

    // const { verifiedAddress } = useBTCAdress()

    return (
        <section className='max-w-screen-lg container mt-4 mb-8'>
            <div className='mb-4'>
                <p>Transaction ID:  <span className='font-bold'>#TXD015</span></p>
            </div>
            {/* <div className={twMerge('bg-red-100 p-4 flex md:flex-row flex-col gap-y-4 justify-between md:items-center items-start rounded-md', Boolean(verifiedAddress) && "bg-green-100")}>
                <div>
                    <h4 className='text-lg font-semibold'>{Boolean(verifiedAddress) ? <>BTC Address Confirmed</> : <>Pending btc address verification</>}</h4>
                    <p>{Boolean(verifiedAddress) ? <><span className="font-bold">2.52098</span> BTC is ready be debited to <span className="font-bold break-all">{verifiedAddress}</span> after all fees are cleared</> : <>Verify address to receive the payout</>}</p>
                </div>
            </div> */}
            <div className={'bg-green-100 p-4 mb-4 flex md:flex-row flex-col gap-y-4 justify-between md:items-center items-start rounded-md'}>
                <div>
                    <h4 className='text-lg font-semibold'>BTC Address Confirmed</h4>
                    <p><span className="font-bold">2.52098</span> BTC to be deposited to <span className="font-bold break-all">392NQstZKRCHBGNR4nNR7PRhQtXS5xRKAV</span></p>
                </div>
            </div>
            {/* <div className="p-4 bg-red-100 rounded-md items-center">
                <p className='mb-3'>We need some information from you</p>
                <Link className='text-red-600 font-medium px-3 py-1 border-2 border-red-600 rounded-full' href="/payment-cancelation">view full details</Link>
            </div> */}
            <div className="p-4 bg-orange-100 rounded-md">
                <div className="flex gap-x-2 items-center mb-2">
                    {/* <ClockArrowDown className="w-12 h-12" /> */}
                    <p className="font-bold">Information uploaded successfully</p>
                </div>
                <p>We are currently reviewing the uploaded information, this process should be completed in 24hrs after which your transaction will be reintiated. Thanks for your compliance in this matter</p>
                {/* <Link className='text-red-600 font-medium px-3 py-1 border-2 border-red-600 rounded-full' href="/payment-cancelation">view full details</Link> */}
            </div>
        </section>
    )
}

export default Banner

// <div className="p-4 flex gap-x-2 bg-red-100 rounded-md items-center">
//                 <ClockArrowDown className="w-12 h-12"/>Debit transaction in progress, 2.52098 BTC to be credited within 24 hours
//             </div>
