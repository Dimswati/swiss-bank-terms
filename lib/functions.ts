export const convertETHtoUSD = (ethAmount: number, ethToUsd: number | null) => {

    const convertedAmount = (ethToUsd || 1700) * ethAmount

    const formattedAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedAmount)

    return formattedAmount
}