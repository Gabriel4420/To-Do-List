
import styled from 'styled-components';

export const TaskItemLayout = styled.li`
    width:400px;
    font-size:20px;
    list-style: none;
    font-weight: bold;
    color:${props=> props.colorTask};
    background-color:${props => props.bgTask};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding:15px;
    margin-bottom:10px;

    :hover{
        cursor:pointer;
    }
    text-decoration: ${props => props.done === true ? 'line-through':'none'}  
   


`