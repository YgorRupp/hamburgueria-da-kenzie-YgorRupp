import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    width: 100%;


    section{
        display: flex;
        flex-direction: column;
        margin-left: 0.438rem;
    }
    p{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        font-size: 26px;
        color: #333333;
        margin-bottom: 0.875rem;
        margin-top: 0.875rem;
    }
    p span {
        font-size: 16px;
        color: #EB5757;
    }
    form {
        display: flex;
        align-items: center;
        width: 97%;
        border: 2px solid var(--color-grey-20);
        border-radius: 8px;
        height: 46px;
        background-color: white;
        margin-bottom: 0.875rem;
    }
    form input {
        border: none;
        height: 44px;
        padding-left: 0.9375rem; 
        width: 80%;
    }
    form input::placeholder{
        font-weight: 400;
        font-size: 16px;
        color: var(--color-grey-20);
    }
    form button {
        background-color: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: 8px;
        height: 40px;
        width: 107px;
        margin-right: 10px;
        color: #FFFFFF;
    }
    .headerButton {
        display: flex;
        gap: 20px;
    }
    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
        height: 80px;
        align-content: center;
        p{
            margin-top: 0;
            width: 200px;
        }
        section {
            flex-direction: row;
            width: 100%;
            align-items: center;
            justify-content: space-between;
        }
        form {
            width: 62%;
            margin-right: 50px;
        }
    }
    @media (min-width: 1300px) {
        form {

        }
    }
    @media (min-width: 1600px) {
        p{
            width: 350px;
        }
        .headerButton{
            margin-right: 100px;
        }
    }
    @media (min-width: 1800px) {
        form{
            width: 54%;
            margin-right: 130px;
        }
        .headerButton{
            margin-right: 187px;
        }
    }
`