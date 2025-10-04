import { useEffect, useState } from "react";

interface Props {
    placeholder? : string
    handleSearch: (search: string) => void
}

export function GifsSearch({placeholder = 'buscar', handleSearch} : Props) {

    const [search, setSearch] = useState('')
    const onSearchKeyDown = ( e : React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            handleSearch(search)
        }
    }
    
    //* Debounce hecho solo con react :)
    useEffect(() => {
        const timeOutId = setTimeout( () =>{
            handleSearch(search)
        }, 700 )
        
        //* El return se ejecuta cuando el componente se desmonta y antes de que el efecto se vuelva a ejecutar
      return () => {
        clearTimeout(timeOutId)
      }
    }, [search])
    

    
    return (
        <>
            <div className="search-container">
                <input 
                    type="text" 
                    placeholder={placeholder}
                    onChange={ e => setSearch(e.currentTarget.value) }
                    value={search}
                    onKeyDown={onSearchKeyDown}
                />  
                <button>Buscar</button>
            </div>
        </>
    );
};