import List  from './List';
import TodoList from './TodoList';
import { Link } from "react-router-dom";


export default function Atv03() {
    return (
        <>
            <h1>Atividade 03</h1>
            <List />
            <TodoList />
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    )
}