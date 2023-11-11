import styled from "styled-components"

export const Container = styled.div`
    display: inline-block;
    justify-content: center;
    align-items: center;
    button {
        padding:1%;
        padding-top:0.2%;
        padding-bottom:0.2%;
        margin-right:0.5%;
    }
`

export const Numbers = styled.button`
    background-color: ${props => (props.isActive ? 'white' : 'transparent')};
    color: ${props => (props.isActive ? 'black' : 'white')};
    margin:0.5%;
    border:0.1px solid white;
`