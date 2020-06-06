import React from 'react';
import { PreferenciasAge } from './PreferencesAge';

export const Preferencias = () => (
    <div>
    <form className="Preferencias">
        <h2>Preferencias</h2>
        <hr />
        <p><input type="checkbox"  />Hembra</p>
        <p><input type="checkbox" />Macho</p> 
        <p>Edad:</p>
        <PreferenciasAge />
    </form>
    </div>
);