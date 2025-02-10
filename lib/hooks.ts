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