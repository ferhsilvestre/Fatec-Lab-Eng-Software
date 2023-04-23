import { useEffect, useState } from "react"
import { Button } from "./componentes/Button"
import './Contador.css'
import Image1 from './assets/avatar_man.png'
import Image2 from './assets/avatar_woman.png'

export function Contador() {

    const [qtdman, setQtdman] = useState(0)
    const [qtdwoman, setQtdwoman] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(qtdman + qtdwoman)
    }, [qtdman, qtdwoman])

    function Zerar() {
        setQtdman(0)
        setQtdwoman(0)
    }

    return (
  <div class="avatar-container">
    <div class="total-container">
      <h2 class="total-button-container">
        <span>Total: {total}</span>
        <button class="reset-button" onClick={Zerar}>Resetar</button>
      </h2>
    </div>
    <div>
      <img src={Image1} alt={'Avatar Man'} class="avatar" />
      <div class="counter">
        <Button status='add' onClick={() => setQtdman(qtdman + 1)} />
        <p class="count">{qtdman}</p>
        <Button status='decrementar' onClick={() => setQtdman(qtdman - 1)} />
      </div>
    </div>
    <div>
      <img src={Image2} alt={'Avatar Woman'} class="avatar" />
      <div class="counter">
        <Button status='add' onClick={() => setQtdwoman(qtdwoman + 1)} />
        <p class="count">{qtdwoman}</p>
        <Button status='decrementar' onClick={() => setQtdwoman(qtdwoman - 1)} />
      </div>
    </div>
  </div>
)


}