import styled from 'styled-components';

export const Publication = styled.div`
    display: flex;
    flex-direction: column;

    div {
        background: #fff;
        border-radius: 8px;

        div {
            display: flex;
            justify-content: center;
            align-items: center;

            svg {
                width: 24px;
                height: 24px;
                margin: 0 8px;
            }
            input {
                border: 0;
                flex: 1;
                padding: 16px;
            }
        }

        span {
            display: flex;
            align-items: center;
            background: #e6e6e6;
            border-radius: 8px;
            padding: 8px;
            font-size: 14px;

            button {
                border: 0;
                background: none;
                color: #6262c5;
                font-weight: 600;
                font-size: 14px;
            }
        }
        
    }
`