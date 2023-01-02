import styled from "styled-components"

export const StyledProducts = styled.li`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid var(--color-grey-20);

    div:first-child{
        display: flex;
        justify-content: center;
        background-color: var(--color-grey-0);
        width: 100%;
        margin-bottom: 1.625rem;
        height: 150px;
    }
    div:first-child img{
        width: 300px;
        object-fit: contain;
    }
    section{
        display: flex;
        flex-direction: column;
        gap: 14px;
        margin-left: 1.3125rem;
    }
    h2{
        color: var(--color-grey-100);
    }
    p{
        color: var(--color-grey-50);
    }
    span{
        color: var(--color-primary);
    }
    button{
        height: 40px;
        background-color: var(--color-primary);
        border: none;
        border-radius: 8px;
        margin-left: 1.3125rem;
        margin-top: 0.875rem;
        margin-bottom: 1.3125rem;
        width: 40%;
        color: #FFFFFF;
    }
`