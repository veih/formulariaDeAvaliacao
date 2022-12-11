import React from 'react'

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs"

import './ReviewForm.css'

const ReviewForm = ({ data, upDataFieldHandler}) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            value='unsatisfied'
            name='review'
            required
            checked={data.review === 'unsatisfied'}
            onChange={(e) => upDataFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insastifeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value='neutral'
            name='review'
            required
            checked={data.review === 'neutral'}
            onChange={(e) => upDataFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value='satisfied'
            name='review'
            required
            checked={data.review === 'satisfied'}
            onChange={(e) => upDataFieldHandler('review', e.target.value)} />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input
            type="radio"
            value='very_satisfied'
            name='review'
            required
            checked={data.review === 'very_satisfied'}
            onChange={(e) => upDataFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito sastifeito</p>
        </label>
      </div>

      <div className="form-control">
        <label >Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder='Conte como foi a sua experiência com o produto ...'
          required
          checked={data.comment || ''}
          onChange={(e) => upDataFieldHandler('comment', e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ReviewForm