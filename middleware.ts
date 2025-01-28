import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {

    // get the cookies
    const cookies = request.cookies.get("agreed-terms")
    const agreed_terms = cookies?.value

    const path = request.nextUrl

    if (/^\/+$/.test(path.pathname)) {
        return NextResponse.redirect(new URL(`/terms-and-conditions`, request.url))
    }

    if (agreed_terms != "yes" && !path.pathname.includes("terms-and-conditions")) {
        return NextResponse.redirect(new URL(`/terms-and-conditions`, request.url))
    }

    if(agreed_terms == "yes" && path.pathname.includes("terms-and-conditions")) {
        return NextResponse.redirect(new URL(`/thank-you`, request.url))
    }

    return NextResponse.next()
}

export default middleware

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|images|studio|$).*)',  // Match all paths except /dashboard and /api
        '/',                                    // Match the root path
        '/trpc(.*)',                            // Match paths starting with /trpc
    ],
};
