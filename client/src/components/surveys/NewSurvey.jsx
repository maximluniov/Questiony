import React, { useState } from 'react'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'
import { reduxForm } from 'redux-form'


export const FIELDS = [
  { label: "Survey Title", name: "title", errorMessage: "You must provide a title" },
  { label: "Survey Subject", name: "subject", errorMessage: "You must provide a subject" },
  { label: "Email Body", name: "body", errorMessage: "You must provide a body of an email" },
  { label: "Recipients list", name: "recipients", errorMessage: "You must provide recipients" },
]

const NewSurvey = () => {
  const [page, setPage] = useState(false);
  return (
    <div className='mt-24 mx-40'>
      {
        !page ?
          <SurveyForm turnPage={() => setPage(true)} /> :
          <SurveyFormReview turnPage={() => setPage(false)} />
      }


    </div>
  )
}




export default
  reduxForm({
    form: 'surveyForm'
  })(NewSurvey);