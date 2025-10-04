interface Props {
    previousGifs: string[]
    onLabelClicked: (label : string) => void
}

export function PreviosResearches({ previousGifs, onLabelClicked }: Props) {
    return (
        <>
            <div className="previous-searches">
                <h2>Busquedas previas</h2>
                <ul className="previous-searches-list">
                    {
                        previousGifs.map(gifs => (
                            <li onClick={() => onLabelClicked(gifs)} key={gifs}>{gifs}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};