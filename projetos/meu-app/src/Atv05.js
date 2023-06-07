import { Link } from "react-router-dom";
import FormQuiz from "./FormQuiz";
import FormTicket from "./FormTicket";
import Accordion from "./Accordion";
import Messenger from "./Messenger";


export default function Atv05() {
    return (
        <>
            <h1>Atividade 05</h1>
            <FormQuiz />
            <br />
            <FormTicket />
            <br />
            <Accordion />
            <br />
            <Messenger />
            <br />
            <Link to="/">retornar a página inicial</Link>
        </>
    )
}