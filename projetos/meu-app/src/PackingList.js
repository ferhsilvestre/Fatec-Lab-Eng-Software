function Item({ name, isPacked }) {
    let itemContent = name
    if (isPacked) {
        itemContent = (
            <del>
                {name + "✔"}
            </del>
        ) 
    //     return null
    }
    // return <li className="item">{name}</li>
    return (
        <li className="item">
            {/* {isPacked ? (
                <del>
                    {name + '✔'}
                </del>
            ) : (
                name
            )} */}
            {/* {name} {isPacked && '✔'} */}
            {itemContent}
        </li>
    )
}


export default function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    )
}