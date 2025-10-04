import { useRef, useState } from "react";
import type { Gif } from "../../interfaces";
import { getGifBySearch } from "../../action/get-gif-by-search.action";


export const useGifs = () => {


      const [previousGifs, setPreviousGifs] = useState<string[]>([])
      const [gifs, setGifs] = useState<Gif[]>([])
      const gifsCache = useRef<Record<string, Gif[]>> ({})

      const onLabelClicked = (label: string) => {
            
            setGifs(gifsCache.current[label] || [])
      }


      const handleSearch = async (search: string) => {
            //* Si el parámetro search esta vacio con espacios para la ejecución
            if (!search.trim().length) return
            //* Transformamos el parámetro de search
            const searchFormatter = search.trim().toLowerCase()
            //* Si el search existe en previousGifs para la ejecución de la función
            if (previousGifs.includes(search)) return
            //* Agregamos el search a previousGifs y limitamos el número de elementos a 8
            setPreviousGifs([searchFormatter, ...previousGifs.splice(0, 8)])
            const actionRepsonse = await getGifBySearch(search)
            setGifs(actionRepsonse)
            gifsCache.current[searchFormatter] = actionRepsonse

      }

      return {
            //Values
            previousGifs,
            gifs,

            //Methods
            onLabelClicked,
            handleSearch,
      }
}