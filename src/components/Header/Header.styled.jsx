import styled from 'styled-components'

// const mq = @media screen and(max - width: 760px)
export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    height: 80px;
    .logo {
        img {
            width: 200px;
            }
    }
    .menu {
        display: flex;
        /* justify-content: space-around; */
        align-items: center;
        height: 100%;
        h2 {   
            font-size: 18px;
            margin: 0 15px;
            border-bottom: 1px solid black;
        }
        ul {
            flex-grow: 1;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            list-style: none;
            padding: 0;
            li {
                height: 100%;
                a {
                    height: 100%;
                    font-size: 16px;
                    font-weight: bold;
                    color: darkgreen;
                    text-decoration: none;
                    padding: 0 15px;
                    /* これはなぜここなのか... */
                    display: flex;
                    align-items: center;
                    :hover {
                        background-color: #f2be79;
                        transition: all 1.5s;
                    }
                }
            }
        }
        @media screen and (max-width: 760px){
            display: none;
        }
    }
`