import React from 'react';

export function Boton(props) {
    const { TextoBoton, className = "", onClick } = props;
  
    return (
        <button className={`${className}`} onClick={onClick}>
            {TextoBoton}
        </button>
    );
}
