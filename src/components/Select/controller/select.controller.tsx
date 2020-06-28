import React from "react";
import { Select } from "../template";
import { SelectValue } from "../../../utils/types.utils";

interface Props<T>{
    options?: T[];
    value?: T;
    placeholder?: string;
    label?: string;
    onChange: (option?: T) => void;
    getValue: (option: T) => SelectValue;
    getLabel: (option: T) => string;
}

export const SelectController = <T,>({
    options = [],
    value,
    label,
    placeholder,
    onChange,
    getValue,
    getLabel,
}: Props<T>) => {
    const getOption = (value?: SelectValue) => options.find(o => getValue(o).toString() === value);

    return (
        <Select
            value={value && getValue(value)}
            label={label}
            onChange={val => onChange(getOption(val))}
            placeholder={placeholder}
            options={options}
            getValue={getValue}
            getLabel={getLabel}
        />
    )
}