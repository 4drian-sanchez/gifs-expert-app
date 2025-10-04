import type { Gif } from "../../data/mocks";

interface Props {
    gifs: Gif[]
}

export default function GifsList({gifs} : Props) {
    return (
        <div className="gifs-container">
            {gifs.map(gif => (
                <div key={gif.id} className='gifs-card'>
                    <img src={gif.url} alt={gif.title} />
                    <h3>{gif.title}</h3>
                    <p> {gif.width}x{gif.height} </p>
                </div>
            ))}
        </div>
    );
};