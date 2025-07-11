/**
 * Utility functions for HTTP requests.
 */

/**
 * Adds the appropriate protocol (http or https) to the given URL
 * based on whether the URL contains the string 'localhost'.
 * @param url - The URL to modify.
 * @returns A new URL string with the appropriate protocol added.
 */
export const addHttp = (url?: string): string => {
  return url ? `${url.includes("localhost") ? "http" : "https"}://${url}` : ""
}

/**
 * Removes the protocol from the given URL string.
 * @param url - The URL string to modify.
 * @returns A new URL string with the protocol removed.
 */
export const removeHttp = (url?: string): string => {
  return url ? url.replace(/^https?:\/\//, "") : ""
}

/**
 * Removes the trailing slash from the given URL string.
 * @param url - The URL string to modify.
 * @returns A new URL string with the trailing slash removed.
 */
export const removeTrailingSlash = (url?: string): string => {
  return url ? url.replace(/\/$/, "") : ""
}

/**
 * Checks if the given URL is an external URL.
 * @param url - The URL to check.
 * @returns A boolean indicating whether the URL is an external URL.
 */
export const isExternalUrl = (url?: string): boolean => {
  return url ? url.includes("http") : false
}

/**
 * Strips the subpath from a URL, returning only the protocol and host.
 *
 * @param url The URL to be stripped.
 * @returns The URL with the subpath removed.
 */
export const stripURLSubpath = (url: string) => {
  try {
    const parsedUrl = new URL(url)
    return `${parsedUrl.protocol}//${parsedUrl.host}`
  } catch (error) {
    console.error(error)
    return url
  }
}

/**
 * Returns the hostname of the given URL.
 * @param url - The URL to get the hostname from.
 * @returns The hostname of the URL.
 */
export const getUrlHostname = (url: string) => {
  if (isValidUrl(url)) {
    return new URL(url).hostname.replace("www.", "")
  }

  return url
}

/**
 * Checks if the given URL is valid.
 * @param url - The URL to check.
 * @returns A boolean indicating whether the URL is valid.
 */
export const isValidUrl = (url?: string) => {
  if (!url) return false

  try {
    new URL(url)
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
