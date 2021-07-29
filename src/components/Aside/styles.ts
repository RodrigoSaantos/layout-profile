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


    /* border: 2px solid red; */

    div:first-child {
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

    div:last-child {
        width: 100%;
        div {
            display: flex;
            
            span:first-child {
                margin-right: 20%;

            }
        }
    }
`