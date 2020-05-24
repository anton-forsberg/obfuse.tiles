import React, { FC } from "react";
import { InputUI } from "./input.ui"

interface BaseProps {
    step?: number;
    label?: string;
}

interface TextProps extends BaseProps {
    type: 'text';
    value: string;
    onChange: (value: string) => void;
}

interface NumberProps extends BaseProps {
    type: 'number';
    value: number;
    onChange: (value: number) => void;
}

type Props = TextProps | NumberProps;

const isNumberInput = (props: Props): props is NumberProps => props.type === 'number';

export const InputContainer: FC<Props> = props => {
    const onChange = (value: string) => isNumberInput(props)
        ? props.onChange(Number(value))
        : props.onChange(value);

    return (
        <InputUI
            type={props.type}
            step={props.step}
            label={props.label}
            value={String(props.value)}
            onChange={onChange}
        />
    )
}