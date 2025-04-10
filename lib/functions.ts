// export async function convertETHtoUSD(ethAmount: number) {
//     const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
//     const data = await response.json();
//     const ethToUsd = data.ethereum.usd;
//     const usdAmount = ethAmount * ethToUsd;

//     // console.log(`${ethAmount} ETH = $${usdAmount.toFixed(2)} USD`);
//     return usdAmount
// }