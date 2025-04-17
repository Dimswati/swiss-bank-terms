export function convertETHtoUSD(ethAmount: number | undefined) {

    if (!ethAmount) return "$ 0"

    let ethToUsdPrice: number = 1652.20;

    fetch("/api/ether")
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
        .then(data => {
            ethToUsdPrice = data.ethToUsdPrice
        })
        .catch(error => {
            console.error("Error in request: ", error)
        })

    const convertedAmount = ethToUsdPrice * ethAmount

    const formattedAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(convertedAmount)

    return formattedAmount
}