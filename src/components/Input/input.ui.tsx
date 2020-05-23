import React, { FC } from "react";
import { InputStyle, InputLabelStyle } from "./input.styled";

interface Props {
    onChange: (value: string) => void;
    type?: 'text' | 'number';
    value: string;
    step?: number;
    label?: string;
}

export const InputUI: FC<Props> = ({
    onChange,
    value,
    type = 'text',
    step,
    label,
}) => (
    <>
        {label && <InputLabelStyle>{label}</InputLabelStyle>}
        <InputStyle
            step={step}
            type={type}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    </>
);