import React, { FC } from "react";
import { InputStyle } from "./input.styled";

type InputType = string | number;

interface Props<T extends InputType> {
    onChange: (value: T) => void;
    value: T;
}

export const InputUI = <T extends InputType>({
    onChange,
    value,
}: Props<T>) => (
    <InputStyle
        type={typeof T === 'string' ? 'text' : 'number'}
        value={value}
        onChange={e => onChange(e.target.value)}
    />
);