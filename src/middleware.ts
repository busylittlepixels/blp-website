// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

export function middleware(req: NextRequest) {
  const currentUrl = new URL(req.nextUrl);

  // Extract the UTM params from the current request and save them in cookies if they exist
  const utmValuesInUrl = {};
  let cookieString = '';
  for (const param of UTM_PARAMS) {
    const value = currentUrl.searchParams.get(param);
    if (value) {
      utmValuesInUrl[param] = value;
      cookieString += `${param}=${value}; `;
    }
  }

  if (cookieString) {
    const response = NextResponse.rewrite(req.nextUrl);
    response.headers.set('Set-Cookie', cookieString);
    return response;
  }

  // If there are no UTM params in the current request, check the cookies
  const cookies = req.cookies;
  let urlModified = false;
  for (const param of UTM_PARAMS) {
    // Only append the UTM parameter if it's not already in the URL
    if (!utmValuesInUrl[param] && cookies[param]) {
      currentUrl.searchParams.set(param, cookies[param]);
      urlModified = true;
    }
  }

  // If the URL has been modified with UTM params from cookies, rewrite to the new URL
  if (urlModified) {
    return NextResponse.rewrite(currentUrl.toString());
  }

  return NextResponse.next();
}
