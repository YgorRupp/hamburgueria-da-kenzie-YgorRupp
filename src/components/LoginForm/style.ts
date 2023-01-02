import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledDivLoginForm = styled.div`


    border: 2px solid var(--color-grey-0);
    width: 500px;

    form{
        display: flex;
        flex-direction: column;
        gap: 19px;

        h2{

            font-weight: 700;
            font-size: 1.125rem;

            margin-left: 1.5rem;
            margin-top: 1.625rem;

            color: var(--color-grey-100);
        }
        label{
            margin-left: 1.5rem;
            
            font-weight: 400;
            font-size: 0.75rem;

            color: #999999;
        }

        input{
            margin-left: 1.5rem;

            height: 48px;
            width: 90%;

            border: 2px solid var(--color-grey-100);
            border-radius: 8px;
        }
        input::placeholder{
            font-weight: 400;
            font-size: 1rem;
            color: var(--color-grey-100);
            padding-left: 15px ;
        }
        button{
            margin-left: 1.5rem;

            height: 48px;
            width: 92%;

            border: 1px solid #219653;
            border-radius: 8px;

            background-color: #219653;
            color: #FFFFFF;

            font-weight: 600;
            font-size: 1rem;
        }
        p{  
            display: flex;
            justify-content: center;
            align-items: center;

            font-weight: 400;
            font-size: 0.875rem;

            color: #999999;
            

        }
    }
`
export const StyledLink = styled(Link)`

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 1.5rem;
    margin-bottom: 1.625rem;

    width: 92%;
    height: 48px;

    border: 1px solid var(--color-grey-0);
    border-radius: 8px;

    background-color: var(--color-grey-0);
    color: #999999;

    font-weight: 600;
    font-size: 1rem;

    text-decoration: none;

`