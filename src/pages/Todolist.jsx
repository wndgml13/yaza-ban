import React from 'react';
import Form from '../components/Form';
// import Header from "./components/Header";
import {useState} from "react";


function Todolist () {
    const [todos, seTodos] = useState([
        {
            id: 1,
            title: "리액트 공부하기",
            content: "리액트 기초를 공부해",
            isDone: false,
        },
        {
            id: 2,
            title: "리액트 공부하기",
            content: "리액트 기초를 공부해요",
            isDone: true,
        }
    ])
    
    return (
        <>
            {/* <Header/> */}
            <Form/>
        </> 
    );
};


export default Todolist;