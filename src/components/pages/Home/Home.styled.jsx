import styled from 'styled-components'
import top from './images/top.jpg'

export const StyledHome = styled.div`
    height: 100vh;
    padding-top: 80px;
    
    .catch {
    background-image: url(${top});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    .catchcopy {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 45%;
        h1 {
            font-size: 2.6vw;
            /* margin:30px 0 10px; */
            opacity: 0.8;
        }
        p {
            font-size: 2vw;
            margin-top: 10px;
            opacity: 0.8;
        }
    }
    }
`