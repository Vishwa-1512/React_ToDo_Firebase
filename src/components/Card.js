import React, { useState } from 'react';
import EditTask from '../modals/EditTask'

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const colors = [{
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD",
            r: "#2f2f2f",
            z: "c620a7"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return ( <
        div class = "card-wrapper mr-5" >
        <
        div class = "card-top"
        style = {
            { "background-color": colors[index % 5].primaryColor } } > < /div> <
        div class = "task-holder" >
        <
        span class = "card-header"
        style = {
            { "background-color": colors[index % 5].r, "border-radius": "10px" } } > { taskObj.Name } < /span> <
        div class = "break" > < /div> <
        p className = "mt-3" > { taskObj.Description } < /p>

        <
        div style = {
            { "position": "absolute", "right": "20px", "bottom": "20px" } } > { /* <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i> */ } <
        button className = "btn  mt-2"
        style = {
            { "color": "#ffffff", "cursor": "pointer", "background-color": "#c620a7" } }
        onClick = {
            () => setModal(true) } > Update < /button> <
        button className = "btn btn-outline-secondary"
        style = {
            { "color": "afafaf", "cursor": "pointer" } }
        onClick = { handleDelete } > Delete < /button> <
        /div> <
        /div> <
        EditTask modal = { modal }
        toggle = { toggle }
        updateTask = { updateTask }
        taskObj = { taskObj }
        /> <
        /div>
    );
};

export default Card;