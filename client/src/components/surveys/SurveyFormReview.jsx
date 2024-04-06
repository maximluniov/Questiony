import React from 'react'
import { connect } from 'react-redux'
import { FIELDS } from './NewSurvey'
import * as actions from '../../actions'
import { useNavigate } from 'react-router-dom';
import { CiSquareInfo } from "react-icons/ci";

const SurveyFormReview = (form) => {


    const navigate = useNavigate();

    return (
        <>
            <div className='flex flex-col items-start gap-y-4  bg-slate-100 p-4 rounded-xl w-1/2'>SurveyFormReview

                {
                    FIELDS.map(({ name, label }) => (
                        <div className='w-full flex-col ' key={name}>
                            <label >{label}</label>
                            <div>{form.values[name]}</div>
                        </div>
                    ))
                }



                <div className='flex  w-full justify-between'>
                    <button className='grey lighten-2 btn-flat w-32' onClick={() => { form.turnPage() }}>Back <i className='material-icons right'>arrow_back</i></button>
                    <button type='submit' className='teal btn-flat right white-text' onClick={() => { form.createSurvey(form.values, navigate); }} >Submit <i className='material-icons right'>done</i></button>
                </div>

            </div>
            <h6 className='flex items-center'>
                <CiSquareInfo size={40} />You WILL NOT be able to change this information later<CiSquareInfo size={40} />
            </h6>
        </>
    )
}
function mapStateToProps(state) {
    return { values: state.form.surveyForm.values };
}


export default connect(mapStateToProps, actions)(SurveyFormReview);