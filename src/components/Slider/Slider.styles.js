import styled from "styled-components";

export const Wrapper = styled.div`
    height: 600px;
`

export const Content = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;

    .singleSlide {
        position: absolute;
        left: 100%;
        width: 100%;
        top: 0;
    }

    .display {
        left: 0 !important;
    }

    .slideInRight {
        left: -100%;
        -webkit-animation: slideIn 1s forwards;
        animation: slideIn 1s forwards;
    }
 
    .slideInLeft {
        left: 100%;
        -webkit-animation: slideIn 1s forwards;
        animation: slideIn 1s forwards;
    }

    .slideOutLeft {
        -webkit-animation: slideOutLeft 1s forwards;
        animation: slideOutLeft 1s forwards;
    }

    .slideOutRight {
        -webkit-animation: slideOutRight 1s forwards;
        animation: slideOutRight 1s forwards;
    }

    @-webkit-keyframes slideOutLeft {
        100% {
            left: -100%;
        }
    }
    
    @keyframes slideOutLeft {
        100% {
            left: -100%;
        }
    }

    @-webkit-keyframes slideOutRight {
        100% {
            left: 100%;
        }
    }
    
    @keyframes slideOutRight {
        100% {
            left: 100%;
        }
    }
`

export const Navigation = styled.div`

`