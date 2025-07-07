import { NextResponse } from 'next/server'

export function middleware(request) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value
  const publicRoutes = ['/login', '/sign-up']
  if (token) {
    if (publicRoutes.some(route => pathname.startsWith(route))) {
      return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next()
  }
  else {
    if (pathname.startsWith('/profile')) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
  }
}
export const config = {
  matcher: ['/profile', '/login', '/sign-up'],
}
