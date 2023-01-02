import styled from "styled-components"

export const StyledProductsList = styled.ul`
    display: flex;
    width: 97%;
    overflow-y: auto;
    gap: 1.25rem;
    margin-top: 0.938rem;
    margin-left: 0.438rem;

    @media(min-width: 1024px) {
        overflow-y: unset;
        margin-left: 43px;
        flex-wrap: wrap;
    }
    @media(min-width: 1440px){
        gap: 3.25rem;
    }
    @media (min-width: 1600px) {
        margin-left: 113px;
    }
    @media(min-width: 1800px){
        gap: 5.25rem;
    }
    @media(min-width: 1920px){
        gap: 8.25rem;
    }
`