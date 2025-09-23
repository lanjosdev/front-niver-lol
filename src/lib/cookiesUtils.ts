function setCookie(name: string, value: string, days = 1) {
	const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000)
	document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
}

function getCookie(name: string): string | null {
	const match = document.cookie
		.split('; ')
		.find((row) => row.startsWith(`${encodeURIComponent(name)}=`));
	return match ? decodeURIComponent(match.split('=')[1]) : null;
}

function deleteCookie(name: string) {
	document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

function setCookieForever(name: string, value: string) {
	// 10 anos de validade
	const tenYearsMs = 10 * 365 * 24 * 60 * 60 * 1000
	const expires = new Date(Date.now() + tenYearsMs)
	document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/`;
}

function setSessionCookie(name: string, value: string) {
	// Cookie de sessão - expira quando o navegador é fechado
	document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=/`;
}


export const cookiesUtils = {
    setCookie,
    getCookie,
    deleteCookie,
    setCookieForever,
    setSessionCookie,
}