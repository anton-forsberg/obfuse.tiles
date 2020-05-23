import styled from "styled-components";

interface Props {
    tileSize: number;
    rows: number;
    columns: number;
}

export const GridStyle = styled.div<Props>`
    position: relative;
    background-color: #FFF;
    width: ${props => props.tileSize * props.columns}px;
    height: ${props => props.tileSize * props.rows}px;
`;