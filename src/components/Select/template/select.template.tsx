import React from "react";
import { SelectOptionStyled, SelectStyled } from "./select.styled";
import { Label } from "../../Label/template";
import { FormControl } from "../../FormControl/template";
import { SelectValue } from "../../../utils/types.utils";

interface Props<T>{
    options?: T[];
    value?: SelectValue;
    label?: string;
    placeholder?: string;
    onChange: (option?: SelectValue) => void;
    getValue: (option: T) => SelectValue;
    getLabel: (option: T) => string;
}

export const SelectTemplate = <T,>({
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
            <SelectStyled
                value={value}
                onChange={e => onChange(e.target.value)}>
                {placeholder && <SelectOptionStyled>{placeholder}</SelectOptionStyled>}
                {options.map(option =>
                    <SelectOptionStyled
                        key={getLabel(option)}
                        value={getValue(option)}>
                        {getLabel(option)}
                    </SelectOptionStyled>)}
            </SelectStyled>
        </FormControl>
    );
}