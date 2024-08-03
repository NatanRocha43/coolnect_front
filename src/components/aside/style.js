import styled from 'styled-components'

export const AsideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`	

export const Title =  styled.h3 `
    font-size: 20px;
    font-weight: bold;
`;

export const Container =  styled.div`
    border: 3px solid #000;
    border-radius: 8px;
    box-sizing: border-box;
    width: ${props => props.width || '100%'};
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;  
`;
