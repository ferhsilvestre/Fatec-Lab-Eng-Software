import  {Contador}  from './Contador';
import { Link } from "react-router-dom";


export default function Atv02() {
    return (
        <>
            <h1>Atividade 02</h1>
            <Contador />
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    )
}