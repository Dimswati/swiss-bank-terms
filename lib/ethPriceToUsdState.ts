import { create } from "zustand";

type EthToUsdPriceStore = {
    ethToUsdPrice: number | null
    setEthPriceToUsd: (ethPriceToUsd: number) => void,
}

const useEthToUsdPrice = create<EthToUsdPriceStore>((set) => ({
    ethToUsdPrice: null,
    setEthPriceToUsd: (ethToUsdPrice: number) => set({ ethToUsdPrice })
}))


export default useEthToUsdPrice