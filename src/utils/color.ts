import tinycolor from "tinycolor2";

export const getContrastColor = (color = '') => tinycolor(color).isDark() ? '#FFF' : '#000';