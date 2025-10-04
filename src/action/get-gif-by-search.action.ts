import type { Gif, GifsResponse } from "../interfaces"


export async function getGifBySearch(search : string) : Promise<Gif[]| string> {
    try {
        const URL =  `https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${search}&limit=10&lang=es`
        const request = await fetch(URL)
        const response : GifsResponse = await request.json()

        return response.data.map( gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.original.url,
            width: +gif.images.original.width,
            height: +gif.images.original.width
        }) )

    } catch (error) {
        if( error instanceof Error) return error.message
        return []
    }
}