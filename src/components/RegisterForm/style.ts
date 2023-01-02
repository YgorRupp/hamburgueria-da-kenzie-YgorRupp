import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledDivRegisterForm = styled.div`

    display: flex;
    flex-direction: column;

    border: 2px solid var(--color-grey-0);

    div{
        display: flex;
        justify-content: space-between;

        margin-top: 2.063rem;
    }
    div h2 {
        margin-left: 1.5rem;
        margin-bottom: 1.688rem;

        font-weight: 700;
        font-size: 1.125rem;

        color: var(--color-grey-100);
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 19px;

        width: 500px;
    }
    label{
        margin-left: 1.5rem;

        font-weight: 400;
        font-size: 0.75rem;

        color: #999999;
    }
    input{
        margin-left: 1.5rem;

        width: 90%;
        height: 48px;

        border: 1px solid var(--color-grey-100);
        border-radius: 8px;
    }
    input::placeholder{
        font-weight: 400;
        font-size: 1rem;

        color: var(--color-grey-100);

        padding-left: 0.938rem;
    }
    .inputPassword{
        background-color: var(--color-grey-0);

        border: 1px solid var(--color-grey-0);
    }
    .inputPassword::placeholder{
        color: #999999;
    }
    button{
        margin-left: 1.5rem;
        margin-bottom: 1.75rem;

        width: 91%;
        height: 48px;

        background-color: var(--color-grey-0);
        color: var(--color-grey-50);

        border: 1px solid var(--color-grey-0);
        border-radius: 8px;

        font-weight: 600;
        font-size: 1rem;
    }
`
export const StyledLinkRegister = styled(Link)`

    margin-right: 1.5rem;

    font-weight: 500;
    font-size: 0.875rem;

    color: var(--color-grey-50);

`