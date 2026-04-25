import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Security headers applied to every response.
 * These complement the CSP applied inside individual API route handlers.
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next()

  // Prevent the site from being embedded in iframes (clickjacking protection)
  response.headers.set('X-Frame-Options', 'DENY')

  // Stop browsers from MIME-sniffing responses away from the declared content-type
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // Send only origin (no path) in the Referer header for cross-origin requests
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Disable access to sensitive browser APIs that this site does not need
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  )

  return response
}

// Apply proxy to all routes except Next.js internals and static assets
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
