import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Home from "./Home"
import Atv01 from "./Atv01"
import Atv02 from "./Atv02"
import Atv03 from "./Atv03"
import Atv04 from "./Atv04"
import Atv05 from "./Atv05"
import Calculadora from "./Calculadora"
import Memoria from "./Memoria"

export default function MinhasRotas() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/atv01' element={<Atv01 />} />
            <Route path='/atv02' element={<Atv02 />} />
            <Route path='/atv03' element={<Atv03 />} />
            <Route path='/atv04' element={<Atv04 />} />
            <Route path='/atv05' element={<Atv05 />} />
            <Route path='/Calculadora' element={<Calculadora />} />
            <Route path='/Memoria' element={<Memoria />} />
        </Routes>
        </BrowserRouter>
    )
}