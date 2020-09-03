import styled from 'styled-components'
import top from './images/top.jpg'

export const StyledHome = styled.div`
    height: 100vh;
    .header_box {
        display: flex;
        justify-content: space-between;
        ul {
            display: flex;
            /* justify-content: center; */
            align-items: center;
            list-style: none;
            h2 {
                font-size: 30px;
                margin-right: 15px;
            }
            li {
                font-size: 25px;
                margin: 10px;
            }
        }
    }
    .catch {
    background-image: url(${top});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    padding-top: 400px;
    .catchcopy {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 700px;
        h1 {
            font-size: 40px;
            margin:30px 0 10px;
            opacity: 0.8;
        }
        p {
            font-size: 30px;
            margin-top: 5px;
            opacity: 0.8;
        }
    }
    }
`