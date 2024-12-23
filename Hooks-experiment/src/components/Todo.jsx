import { useEffect } from "react";
import axios from 'axios'

/* eslint-disable */
const Todo = ({ id }) => {

    const [todo, setTodo] = useState({});

    useEffect(() => {
        axios.get(`sum-server.100xdevs.com/todo?id=${id}`)
            .then(response => {
                setTodo(response.data.todo);
            })
    },);

    return (
        <>
            id: {id}
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <br />
        </>
    );
};

export default Todo;