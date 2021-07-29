import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    padding: 16px;
    border-radius: 8px;
    div.img-name-private-time {
        display: flex;
        margin-bottom: 5px;
        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 1px solid var(--color-primary);
            padding: 2px;
            margin-right: 8px;
        }

        div {
            flex: 1;
            span:first-child {
                color: var(--color-primary);
                font-weight: 600;
            }

            div {
                display: flex;
                align-items: center;

                span {
                    font-size: 13px;
                    margin-right: 8px;
                }
                svg {
                    width: 12px;
                    height: 12px;
                    margin-right: 1px;
                }
            }
        }
        
    }

    div.like-comment-share {
        margin-top: 5px;
        .numbers {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
            div {
                display: flex;
                align-items: center;
            }
            span {
                font-size: 13px;
                margin-left: 8px;
            }
            svg {
                width: 16px;
                height: 16px;

            }
        }

        .buttons {
            display: flex;
            justify-content: space-evenly;
            width: 100%;

            button {
                display: flex;
                padding: 6px 28px;
                align-items: center;
                border-radius: 16px;
                border: 0;
                background: var(--color-secondary);
                gap: 4px;

                transition: 0.2s;

                &:hover {
                    filter: brightness(0.9);
                }
            }
        }
        
    }
`