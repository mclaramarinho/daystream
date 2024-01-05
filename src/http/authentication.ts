export default async function generateAuthURL() : Promise<string | null>{
    try{
        const response = await fetch(
            "https://google-automation-api.vercel.app/authenticate",);
        const data = await response.json();
        return data.url;
    }catch(err){
        return null;
    }
}