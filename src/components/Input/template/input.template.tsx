import React, { FC } from "react";
import { InputStyled } from "./input.styled";
import { Label } from "../../Label/template";
import { FormControl } from "../../FormControl/template";

interface Props {
    onChange: (value: string) => void;
    type?: 'text' | 'number';
    value: string;
    step?: number;
    label?: string;
}

export const InputTemplate: FC<Props> = ({
    onChange,
    value,
    type = 'text',
    step,
    label,
}) => (
    <FormControl>
        <Label text={label}/>
        <InputStyled
            step={step}
            type={type}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    </FormControl>
);