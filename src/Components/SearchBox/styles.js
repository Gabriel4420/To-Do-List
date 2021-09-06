import styled from 'styled-components';

export const Container = styled.div`
    min-width:100%;


`;



export const InputText = styled.input`
    border:2px solid ${props => props.borderColor};
    border-radius:18px;
    padding:15px;
    font-size: 20px;
    width: 400px;
    background-color:${props => props.bgColor};
    font-family:Arial,sans-serif;
    color:${props => props.colorText};
    outline:0;
    ::placeholder{
        color:${props => props.colorText};
        font-size: 20px;
        font-family:'Arial','sans-serif';
    }
`