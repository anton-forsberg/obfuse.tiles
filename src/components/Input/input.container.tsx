import React, { FC } from "react";
import { InputUI } from "./input.ui"

type StringCallback = (value: string) => void;
type NumberCallback = (value: number) => void;

interface BaseProps {
    step?: number;
    label?: string;
}

interface TextProps extends BaseProps {
    type: 'text';
    value: string;
    onChange: StringCallback;
}

interface NumberProps extends BaseProps {
    type: 'number';
    value: number;
    onChange: NumberCallback;
}

type Props = TextProps | NumberProps;

export const InputContainer: FC<Props> = ({
    type,
    value,
    onChange,
    step,
    label,
}) => {
    const typedOnChange = (value: string) => type === 'number'
        ? (onChange as NumberCallback)(Number(value))
        : (onChange as StringCallback)(value)

    return (
        <InputUI
            type={type}
            step={step}
            label={label}
            value={String(value)}
            onChange={typedOnChange}
        />
    )
}