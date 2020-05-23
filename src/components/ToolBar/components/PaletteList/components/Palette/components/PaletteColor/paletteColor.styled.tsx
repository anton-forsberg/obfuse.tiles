import styled from "styled-components";

interface Props {
    color: string;
}

export const PaletteColorStyle = styled.div.attrs<Props>(props => ({
    style: {
        backgroundColor: props.color,
    }
}))`
    width: 10px;
    height: 10px;
`;