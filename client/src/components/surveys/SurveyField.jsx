import React from 'react'

const SurveyField = ({ input, label, meta: { error, touched } }) => {
    return (
        <div className='flex flex-col h-28'>
            
            <label>{label}</label>
            <input {...input} type="text" autoComplete='off' />
            <p className='red-text mb-[5px] break-words'>{touched && error}</p>
        </div>
    )
}

export default SurveyField