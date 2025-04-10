import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {

//     const resbody: { ethAmount: number } = await req.json()

//     try {
//         // access api
        

//     } catch (err) {
//         return new NextResponse(JSON.stringify({ message: "Unable to get data" }), { status: 401, headers: { "Content-Type": "application/json" } })
//     }
// }

export async function GET(req: NextRequest) {

    // get the ethToUsdPrice

    let ethToUsdPrice;

    try {

        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd", {
            next: {
                revalidate: 60
            }
        })
        const data = await response.json()
        ethToUsdPrice = data.ethereum.usd;

        return NextResponse.json({ ethToUsdPrice })

    } catch (err) {
        
        return new NextResponse(JSON.stringify({ message: "Unable to get data" }), { status: 401, headers: { "Content-Type": "application/json" } })
    }

}

