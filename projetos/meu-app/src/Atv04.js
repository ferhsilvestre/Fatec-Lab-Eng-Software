import Form3 from "./Form3";
import Form2 from "./Form2";
import Form from "./Form";
import Counter from "./Counter";
import Gallery from "./Gallery";
import Toolbar from "./Toolbar";
import { Link } from "react-router-dom";
import MovingDot from "./MovingDot";


export default function Atv04() {
    return (
        <>
            <h1>Atividade 04</h1>
            <Toolbar />
            <br />
            <Gallery />
            <br />
            <Counter />
            <br />
            <Form />
            <br />
            <MovingDot />
            <br />
            <Form2 />
            <br />
            <Form3 />
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    )
}