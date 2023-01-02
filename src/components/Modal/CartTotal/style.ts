import styled from "styled-components"

export const StyledCartTotal = styled.div `
    margin-top: 20px;
    border-top: 1px solid grey;
    width: 100%;

    div:first-child{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    div:first-child p {
        margin-left: 18px;
        color: var(--color-grey-100);
    }
    div:first-child span {
        margin-right: 18px;
        color: var(--color-grey-50);
    }
    button{
        margin-left: 18px;
        width: 92%;
        background-color: var(--color-grey-20);
        border: none;
        border-radius: 8px;
        height: 60px;
        margin-bottom: 20px;
        color: var(--color-grey-50);
    }
`