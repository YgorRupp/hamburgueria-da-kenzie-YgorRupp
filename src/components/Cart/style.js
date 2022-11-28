import styled from "styled-components"

export const StyledCart = styled.section`
    width: 97%;
    margin-top: 1.25rem;
    margin-left: 0.438rem;
    
    div{
        background-color: var(--color-grey-0);
    }
    section{
        display: flex;
        align-items: center;
        height: 60px;
        background-color: var(--color-primary);
        border-radius: 8px 8px 0 0;
        width: 100%;
        color: #FFFFFF;
    }
    section h2{
        padding-left: 20px;
    }
    @media (min-width: 1024px){
        margin-right: 43px;
        width: 30%;
    }
    @media (min-width: 1300px) {
        width: 38%;
    }
    @media (min-width: 1800px) {
        margin-right: 133px;
        width: 37%;
    }
`