import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export const PreferenciasAge = () => (

    <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value} Age `} />

)