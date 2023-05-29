import Letreiro from "./Letreiro";
import Relogio from "./Relogio";
import { Link } from "react-router-dom";


export default function Atv01() {
    return (
        <>
            <h1>Atividade 01</h1>
            <Relogio />
            <Letreiro />
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    )
}