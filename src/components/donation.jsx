import * as React from 'react'

let announce = {
    textAlign: 'left',
    padding: '1rem',
    borderRadius: '2px',
    backgroundColor: '#2a2a2a',
}

let container = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    transition: 'all 0.2s ease 0s',
}

export default function donation(){
    return (
        <div style={container}>
             <a style={announce}href='https://www.buymeacoffee.com/3chukky'>Buy me a Coffee</a>
        </div>
    )
}