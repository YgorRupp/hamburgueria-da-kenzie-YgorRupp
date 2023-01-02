import styled from "styled-components";

export const StyledCartModal = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100%;
    min-width: 500px;

    position: fixed;
    top: 0;
    left: 0;    

    
    div{
        background-color: var(--color-grey-0);
    }
    section{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        background-color: var(--color-primary);
        border-radius: 8px 8px 0 0;
        width: 100%;
        color: #FFFFFF;
    }
    section h2{
        padding-left: 1.125rem;
    }
    section > button {
        margin-right: 1.125rem;
        background: none;
        border: none;
        color:  rgba(255, 255, 255, 0.5);
        height: 12px;
    }
    /* @media (min-width: 1024px){
        margin-right: 43px;
        width: 30%;
    }
    @media (min-width: 1300px) {
        width: 38%;
    }
    @media (min-width: 1800px) {
        margin-right: 133px;
        width: 37%;
    }    */
    .modalBox{
        width: 95%;
        max-width: 425px;
    }
`