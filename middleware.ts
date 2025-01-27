import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {

    const path = request.nextUrl
    console.log(path.pathname)

    const redirectUrl = new URL(`/terms-and-conditions`, request.url);
    
    const regex = /^\/+$/;

    if (regex.test(path.pathname)) {
        return NextResponse.redirect(redirectUrl)
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
