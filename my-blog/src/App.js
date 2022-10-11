import { useState } from 'react';
import { Button } from './Button';
import Navigation from './Navigation';

function App(props) {
   const [ value, setValue ] = useState(0);
    const [ name, setName ] = useState('Lindsay');

    const [ count, setCount ] = useState(0);
    console.log(count);

    const handleClick = (e) => {
        setCount(count + 1);
        console.log('clicked button', e)
    }
    return (
        <>
            <Navigation />
            <Button text="Click me!!!!!!!!" bg="primary" />
            <Button text="Hey Lindsay" bg="success" />
        <h1>{name}</h1>
        <h1>{value}</h1>
        <h1>{count}</h1>
        <button onClick= {handleClick}>Click Me</button>
        <p> You clicked {count} times</p>
        </>
    )
}
export default App