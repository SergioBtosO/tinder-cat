import React from 'react';
import { Preferencias } from './AboutCatDetail/Preferencias';
import { Intereses } from './AboutCatDetail/Intereses';
import { Matches } from './AboutCatDetail/Matches';

export const AboutCat = () => (
    <div className="about-cat">
        <Preferencias />
        <Intereses />
        <Matches />
    </div>
);