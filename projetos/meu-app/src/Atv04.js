import Form3 from "./Form3";
import Form2 from "./Form2";
import Form from "./Form";
import Counter from "./Counter";
import Gallery from "./Gallery";
import Toolbar from "./Toolbar";
import { Link } from "react-router-dom";
import MovingDot from "./MovingDot";
import List1 from "./List1";
import List2 from "./List2";
import ShapeEditor from "./ShapeEditor";
import CounterList from "./CounterList";
import List3 from "./List3";
import List4 from "./List4";
import BucketList from "./BucketList";


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
            <List1 />
            <br />
            <List2 />
            <br />
            <br />
            <ShapeEditor />
            <br />
            <CounterList />
            <br />
            <List3 />
            <br />
            <List4 />
            <br />
            <BucketList />
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    )
}