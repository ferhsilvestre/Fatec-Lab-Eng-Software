import Avatar from './Avatar.js'
import { getImageUrl } from './utils.js'

// function Avatar({ person, size }) {
//     return (
//         <img
//             className="avatar"
//             src={getImageUrl(person)}
//             alt={person.name}
//             width={size}
//             height={size}
//         />
//     )
// }

function Card({ children }) {
    return (
        <div className='card'>
            {children}
        </div>
    )
}

export default function Profile1() {
    return (
        // <div>
        //     <Avatar
        //         size={100}
        //         person={{ 
        //             name: 'Katsuko Saruhashi', 
        //             imageId: 'YfeOqp2' }}
        //     />
        //     <Avatar
        //         size={80}
        //         person={{
        //             name: 'Aklilu Lemma',
        //             imageId: 'OKS67lh'
        //         }}  
        //     />
        //     <Avatar
        //         size={50}
        //         person={{
        //             name: 'Lin Lanying',
        //             imageId: '1bX5QH6'
        //         }}
        //     />
        // </div>
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    )
}