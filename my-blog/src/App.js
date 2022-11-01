import Navbar from './Navigation';
import { useState } from 'react';

function App() {
    const[ page, setPage ] = useState('home')

    return (
        <>
         {page == 'home' && <Navbar />}
        </>
    )
}
export default App