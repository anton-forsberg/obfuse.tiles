import React from "react";
import { SelectValue } from "./select.container";
import { SelectOptionStyle, SelectStyle } from "./select.styled";
import { Label } from "../Label";
import { FormControl } from "../FormControl";

interface Props<T>{
    options?: T[];
    value?: SelectValue;
    label?: string;
    placeholder?: string;
    onChange: (option?: SelectValue) => void;
    getValue: (option: T) => SelectValue;
    getLabel: (option: T) => string;
}

export const SelectUI = <T,>({
    options = [],
    value,
    label,
    placeholder,
    onChange,
    getValue,
    getLabel,
}: Props<T>) => {
    return (
        <FormControl>
            <Label text={label} />
            <SelectStyle
                value={value}
                onChange={e => onChange(e.target.value)}>
                {placeholder && <SelectOptionStyle>{placeholder}</SelectOptionStyle>}
                {options.map(option =>
                    <SelectOptionStyle
                        key={getLabel(option)}
                        value={getValue(option)}>
                        {getLabel(option)}
                    </SelectOptionStyle>)}
            </SelectStyle>
        </FormControl>
    );
}