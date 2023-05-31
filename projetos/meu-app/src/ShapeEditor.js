import { useState } from 'react';

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 2330 },
    { id: 1, type: 'square', x: 150, y: 2330 },
    { id: 2, type: 'circle', x: 250, y: 2330 },
];

export default function ShapeEditor() {
    const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                return shape;
            } else {
                return {
                    ...shape,
                    y: shape.y + 50,
                };
            }
        });
        setShapes(nextShapes);
    }

    return (
        <>
            <button onClick={handleClick}>
                Move circles down!
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 20,
                        height: 20,
                    }} />
            ))}
        </>
    );
}