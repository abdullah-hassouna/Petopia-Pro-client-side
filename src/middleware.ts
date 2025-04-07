import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value
    const protectedRoutes = ['/dashboard', '/profile', '/settings', '/']

    // Redirect authenticated users away from the login page or signup page
    if ((request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup') && token) {
        const redirectUrl = request.headers.get('referer') || '/' // Redirect to the previous page or default to /
        return NextResponse.redirect(new URL(redirectUrl, request.url))
    }

    // Protect specific routes
    if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
        if (!token) {
            // If the user is not logged in, allow them to access the login page
            if (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup') {
                return NextResponse.next()
            }


            // Redirect unauthenticated users to the login page
            const loginUrl = new URL('/login', request.url)
            return NextResponse.redirect(loginUrl)
        }
    }

    return NextResponse.next()
}

// Apply middleware to specific routes
export const config = {
    matcher: ['/', '/login', '/signup', '/dashboard/:path*', '/profile/:path*', '/settings/:path*'],
}