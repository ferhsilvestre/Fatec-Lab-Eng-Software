function Button({ onClick, children}) {
    return (
        <button onClick={e => {
            e.stopPropagation()
            onClick()
        }}>
            {children}
        </button>
    )
}

export default function Toolbar() {
    return(
        <div className="Toolbar" onClick={() => {
            alert('You clicked on the toolbar!')
        }}>
            <button onClick={() => alert('Playing!')}>
                Play Movie
            </button>
            <button onClick={() => alert('Uploading!')}>
                Upload Image
            </button>
        </div>
    )
}

// function PlayButton({ movieName}) {
//     function handlePlayClick() {
//         alert('Plauing ${movieName}!')
//     }
    
//     return (
//         <Button onClick={handlePlayClick}>
//         Play "{movieName}"
//         </Button>
//     )
// }

// function uploadButton() {
//     return (
//         <Button onClick={() => alert('Uploading!')}>
//             Upload Image
//         </Button>
//     )
// }

// export default function Toolbar() {
//     return (
//         <div>
//             <PlayButton movieName="Kiki's Delivery Service" /> 
//             <uploadButton />
//         </div>
//     )
// }