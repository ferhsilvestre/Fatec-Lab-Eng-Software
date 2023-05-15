import './avatar.css';

export default function Profile() {
    const user = {
        name: 'Hedy Lammar',
        imageURL: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
    }
    return(
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageURL}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    )
}