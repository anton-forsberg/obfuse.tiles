import React, { FC } from "react";
import { InputStyle } from "./input.styled";
import { Label } from "../Label";
import { FormControl } from "../FormControl";

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
    <FormControl>
        <Label text={label}/>
        <InputStyle
            step={step}
            type={type}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    </FormControl>
);