import { useState } from "react";

export function useCounter (initialValue = 0) {
    
    const [counter, setCounter] = useState(initialValue)

    const handleAddCount = () => setCounter( counter + 1 )

    const handleSubtract = () => {
        if( counter === 0 ) return
        setCounter( counter - 1 )
    }

    const handleReset = () => setCounter(initialValue)

    return {
        //Values
        counter,

        //Actions
        handleAddCount,
        handleSubtract,
        handleReset
    }
}