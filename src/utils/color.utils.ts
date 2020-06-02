import tinycolor from "tinycolor2";
import { getPositionInPulse } from "./number.utils";

export const getContrastColor = (color = '') => tinycolor(color).isDark() ? '#FFF' : '#000';

export const getAutomaticColor = (column: number, row: number) => String(getPositionInPulse(row, 8) + 1);