import { create } from "zustand";

type BTCAddressStore = {
    verifiedAddress: string | null
    setAddress: (address: string) => void,
}

const useBTCAdress = create<BTCAddressStore>((set) => ({
    verifiedAddress: null,
    setAddress: (address: string) => set({ verifiedAddress: address })
}))


export default useBTCAdress

// export function convertETHtoUSD(ethAmount: number | undefined) {

//     if(!ethAmount) return 0
    
//     let convertedAmount,

//     fetch("/api/ether")

//     // // console.log(`${ethAmount} ETH = $${usdAmount.toFixed(2)} USD`);
//     // return usdAmount
//     return ethAmount
// }