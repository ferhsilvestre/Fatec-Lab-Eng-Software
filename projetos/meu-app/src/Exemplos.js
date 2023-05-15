function MyButton() {
    return (
        <button> Eu sou um botão </button>

    )
}

export default function MyApp(){
    return(
        <div>
            <h1>Bem vindo ao meu APP</h1>
            <MyButton/>
            <AboutPage/>            
        </div>
    )
}

function AboutPage(){
    return(
        <>
        <h1>Sobre</h1>
        <p>Olá! <br /> Como vai?</p>
        </>
    )
}

