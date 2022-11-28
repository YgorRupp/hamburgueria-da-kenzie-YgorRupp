import styled from "styled-components";

export const StyledCartProduct = styled.li `

    display: flex;
    justify-content: space-between;
    width: 92%;
    margin-left: 1.125rem;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;

    button {
        background: none;
        border: none;
        color: var(--color-grey-50);
    }
    div{
        display: flex;
    }
    div:first-child{
        display: flex;
        background-color: var(--color-grey-20);
        border-radius: 8px;
    }
    div:first-child img {
        width: 70px;
        height: 70px;
    }
    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.625rem;
    }
    div:nth-child(2) h2 {
        color: var(--color-grey-100);
        margin-left: .9375rem;
    }
    div:nth-child(2) p {
        color: var(--color-grey-50);
        margin-left: .9375rem;
    }

`