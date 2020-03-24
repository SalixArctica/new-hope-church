import styled from 'styled-components';


const styledGrid = styled.div`
    display: grid;
    max-width: 100%;
    grid-template-columns: repeat(${props => props.col ? props.col : 2}, 1fr);

    @media screen and (max-width: 1450px) {
        grid-template-columns: repeat(${props => props.col ? (props.col - 1) : 2}, 1fr);
    }

    @media screen and (max-width: 850px) {
        grid-template-columns: repeat(${props => props.col ? (props.col - 2) : 1}, 1fr);
    }
`;

export default styledGrid;