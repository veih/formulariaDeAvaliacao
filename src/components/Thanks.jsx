import React from 'react'

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs"

import './Thanks.css'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill/>,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill/>,
}

  const Thanks = ({data}) => {
  return (
    <div className='thanks-container'>
        <h2>Falta pouco ...</h2>
        <p>Sua opnião é muito importante embreve mandaremos um cumpom para você.</p>
        <p>Para concluir sua avaliação clique no botão enviar que encontra abaixo.</p>
        <h3>Aqui esta o resumo da sua avaliação: {data.name}</h3>

        <p className="review-data">
          <span>Satisfação com o produto:</span>
          {emojiData[data.review]}
        </p>

        <p className="review-data">
          <span>Comentários:</span>
          {data.comment}
        </p>
    </div>
  )
}

export default Thanks