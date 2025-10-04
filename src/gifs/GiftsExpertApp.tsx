import { useState } from 'react';
import { CustomHeader } from '../components';
import { GifsSearch } from './components/GifsSearch';
import { PreviosResearches } from './components/PreviousResearch';
import GifsList from './components/GifsList';
import { getGifBySearch } from '../action/get-gif-by-search.action';
import type { Gif } from '../interfaces';

export default function App() {

  const [previousGifs, setPreviousGifs] = useState<string[]>([])
  const [gifs, setGifs] = useState<Gif[]>([])

  const onLabelClicked = (label: string) => {
    console.log(label)
  }

  const handleSearch = async (search: string) => {
    //* Si el parámetro search esta vacio con espacios para la ejecución
    if( !search.trim().length ) return
    //* Transformamos el parámetro de search
    const searchFormatter = search.trim().toLowerCase()
    //* Si el search existe en previousGifs para la ejecución de la función
    if(previousGifs.includes(search)) return
    //* Agregamos el search a previousGifs y limitamos el número de elementos a 8
    setPreviousGifs( [ searchFormatter, ...previousGifs.splice(0, 8) ] )
    const actionRepsonse = await getGifBySearch(search)
    
      setGifs(actionRepsonse)
  }

  return (

    <>
      <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el Gifs perfecto' />

      <GifsSearch placeholder='Buscar Gifs' handleSearch={handleSearch} />

      <PreviosResearches previousGifs={previousGifs} onLabelClicked={onLabelClicked} />

      < GifsList gifs={gifs} />

    </>
  )
}
