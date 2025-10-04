import { useCounter } from "./hooks/useCounter";

export function MyCounterApp() {

    const { counter, handleAddCount, handleSubtract, handleReset } = useCounter()



    return (
        <div style={{
            minHeight: 'calc(100vh - 20px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div
                style={{
                    display: 'flex',
                    gap: '1rem'
                }}
            >
                <button
                    type="button"
                    onClick={handleAddCount}
                    style={{
                        backgroundColor: 'gray',
                        color: 'white',
                        padding: '8px 30px',
                        borderRadius: '10px',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}
                > + </button>

                <p>{counter}</p>

                <button
                    type="button"
                    onClick={handleSubtract}
                    style={{
                        backgroundColor: 'gray',
                        color: 'white',
                        padding: '8px 30px',
                        borderRadius: '10px',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}
                >  - </button>

            </div>

            <button
                type="button"
                onClick={handleReset}
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '8px 30px',
                    borderRadius: '10px',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginTop: '30px'
                }}
            > Reset </button>
        </div>
    );
};