import React from 'react';

export const Preferencias = () => (
    <div>
    <form className="Preferencias">
        <h2>Preferencias</h2>
        <hr />
        <p><input type="checkbox"  />Hembra</p>
        <p><input type="checkbox" />Macho</p> 
        <p>Edad:  Min <input type="range"/>  Max <input type="range"/></p>
    </form>
    </div>
);