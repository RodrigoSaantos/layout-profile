import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
`

export const Content = styled.div`
    max-width: 1280px;
    min-width: 780px;
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 20px;
`

export const Aside = styled.aside`
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

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 20px;
`

export const Publication = styled.div`
    display: flex;
    flex-direction: column;

    div {
        /* height: 32px; */
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

export const Private = styled.div`
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
            }
        }
        
    }
`

export const Public = styled.div`
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
            }
        }
        
    }
`


