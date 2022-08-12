import React from 'react';
import styled from "styled-components";
import {useState} from "react";



function Form () {
    const initialstate = useState({
        id: 0,
        title: "",
        content: "",
        isDone: false,
    });
    const [title, setTitle] = useState("");
    const [todo, setTodo] = useState(initialstate);
    console.log(todo);
    const onChangeHandler = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value);
    };

    const onSubmitHandler = () => {
        // placeholder();
        console.log("hello button");
    }
    
    return (
        <StForm>
            <div>제목</div>
            <input 
            type="text" name="title" value={title} onChange={(event) => {onChangeHandler(event)
                
            }}/>
            <div>내용</div>
            <input></input>
            <button onClick={onSubmitHandler}>추가하기</button>
        </StForm>
    );
};


export default Form;


const StForm = styled.form`
    
`;