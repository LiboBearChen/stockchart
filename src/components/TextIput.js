import React from 'react';

export function InputSymbol(){
    const [symbol, setSymbol]=React.useState("");
    
    return <input type="text" value={symbol} onChange={e=>setSymbol(e.currentTarget.value)} />
}

export function InputDays({handleDaysChange}){
    const [days, setDays]=React.useState("");
    
    return <div><input type="text" value={days} onChange={e=>setDays(e.currentTarget.value)} />
    <input type="button" value="Submit" onClick={e=>handleDaysChange(days)} /></div>
}