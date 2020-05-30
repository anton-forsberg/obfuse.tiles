import React from "react";
import { SelectUI } from "./select.ui";

export type SelectValue = string | number | string[];

interface Props<T>{
    options?: T[];
    value?: SelectValue;
    placeholder?: string;
    label?: string;
    onChange: (option?: T) => void;
    getValue: (option: T) => SelectValue;
    getLabel: (option: T) => string;
}

export const SelectContainer = <T,>({
    options = [],
    value,
    label,
    placeholder,
    onChange,
    getValue,
    getLabel,
}: Props<T>) => {
    const getOption = (value?: SelectValue) => options.find(o => getValue(o) === value);

    return (
        <SelectUI
            value={value}
            label={label}
            onChange={val => onChange(getOption(val))}
            placeholder={placeholder}
            options={options}
            getValue={getValue}
            getLabel={getLabel}
        />
    )
}