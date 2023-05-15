{/* <article>
    <h1>My First Compenent</h1>
    <ol>
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
    </ol>
</article> */}

// export default function Profile() {
//     return (
//         <img
//             src="https://i.imgur.com/MK3eW3Am.jpg"
//             alt="Katherine Johnson"
//         />
//     )
// }

export function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
        />
    )
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}