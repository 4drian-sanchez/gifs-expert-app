import { CustomHeader } from '../components';
import { GifsSearch } from './components/GifsSearch';
import { PreviosResearches } from './components/PreviousResearch';
import GifsList from './components/GifsList';
import { useGifs } from './hook/useGifs';

export default function GifsExpertApp() {

  const { gifs, handleSearch, previousGifs, onLabelClicked } = useGifs()

  return (

    <>
      <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el Gifs perfecto' />

      <GifsSearch placeholder='Buscar Gifs' handleSearch={handleSearch} />

      <PreviosResearches previousGifs={previousGifs} onLabelClicked={onLabelClicked} />

      < GifsList gifs={gifs} />

    </>
  )
}
