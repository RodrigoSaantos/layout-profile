import styled from 'styled-components';

export const AsideElement = styled.aside`
    width: 250px;
    background: #fff;
    max-height: 360px;
    display: flex;
    padding: 0 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    background-image: url('https://images.unsplash.com/photo-1460411794035-42aac080490a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
    background-position: 0 230%;
    background-repeat: no-repeat;

    div.aside-profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        margin-top: 85px;
        

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 3px solid var(--color-primary);
            padding: 2px;
            background: #fff;
        }

        p {
            font-size: 20px;
            font-weight: 600;
            color: #6262c5;
            line-height: 24px;
        }

        strong {
            font-weight: 600;
            line-height: 20px;
        }
    }

    div.aside-info {
        width: 100%;

        span svg {
            margin-right: 4px;
        }

        div:last-child {
            display: flex;
            
            span {
                display: flex;
                align-items: center;
            }
            span + span {
                margin-left: 20%;

            }
        }
    }
`