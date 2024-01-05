
/**
 * @param none
 * @returns {string | null | undefined} The value of the cookie if it exists, undefined if it doesn't exist, and null if the cookie is empty. 
 */
export default function getAuthCookie() : string | null | undefined{
    
    const cookies = document.cookie.split(';').find(cookie => cookie.includes('daystream_token'))?.split('=')[1];
    if(cookies === undefined){
        return undefined;
    }else if(cookies.length !== 0){
        return cookies;
    }else{
        return null;
    }
}