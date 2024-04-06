import React from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField';
import {Link} from "react-router-dom"
import validateEmails from '../../utils/validateEmails';
import {FIELDS} from './NewSurvey'


const SurveyForm = (form) => {


    return (
        <form onSubmit={form.handleSubmit(() => form.turnPage()) } className='my-20  flex-col gap-y-10' >


            {
                FIELDS.map((field,index)=>(
                    index !==3?
                    <Field type='text' label={field.label} name={field.name} component={SurveyField} key={field.name} />:
                <Field type='text' label={field.label} name={field.name} component={SurveyField} key={field.name} />
                     
                
                    
                    
                ))
            }

            

            <Link to='/surveys' className='red btn-flat white-text'>CANCEL <i className='material-icons right'>cancel</i></Link>

            <button type='submit' className='teal btn-flat right white-text'  >Next <i className='material-icons right'>arrow_forward</i></button>

        </form>
    )

}

function validate(values){
    const errors = {};

    FIELDS.forEach(({name,errorMessage})=>{
        if(!values[name]){
            errors[name]=errorMessage;
        }
    })
    
    if(values.recipients){
        errors.recipients=validateEmails(values.recipients)
    }

    
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',
    destroyOnUnmount:false
})(SurveyForm);