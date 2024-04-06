import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FIELDS } from './NewSurvey'
import * as actions from '../../actions'
import { useNavigate } from 'react-router-dom';
import { CiSquareInfo } from "react-icons/ci";
import { Link } from 'react-router-dom';
const SurveyFormReview = (form) => {


    const navigate = useNavigate();
    const [error, setError] = useState("");
    return (

        <div className='flex justify-between h-[60vh] items-center'>
            <div className='flex flex-col w-1/2 items-center '>
                <h3 className='flex w-full justify-start'>
                    Survey review
                </h3>
                <div className='flex flex-col items-start gap-y-4  bg-slate-100 p-4 rounded-xl w-full'>

                    {
                        FIELDS.map(({ name, label }) => (
                            <div className='w-full flex-col break-words' key={name}>
                                <label >{label}</label>
                                <div>{form.values[name]}</div>
                            </div>
                        ))
                    }



                    <div className='flex  w-full justify-between'>
                        <button className='grey lighten-2 btn-flat w-32' onClick={() => { form.turnPage() }}>Back <i className='material-icons right'>arrow_back</i></button>
                        <button type='submit' className='teal btn-flat right white-text'
                            onClick={() => {
                                form.createSurvey(form.values, navigate)
                                .catch((err) => {
                                    if (err.response.status === 403) { setError("You don't have credits enough!");setTimeout(()=>{setError("")},2000) }
                                    else { navigate('/login') }
                                });
                            }}
                        >Submit <i className='material-icons right'>done</i></button>
                    </div>
                </div>
                <h6 className='flex items-center'>
                    <CiSquareInfo size={40} />Clicking submit, you WILL NOT be able to change this information later<CiSquareInfo size={40} />
                </h6>
            </div>

            <div className='bg-slate-100 w-1/3 p-4 rounded-lg min-h-80 shadow-lg'>
                Your survey will be sent to all recipients you specified, and they will receive an email similar to this
                <div className='text-center bg-slate-100 shadow-inner p-2 break-words'>
                    <h5>{form.values.title}</h5>
                    <p>Please answer the following question:</p>
                    <p >{form.values.body}</p>
                    <div >
                        <Link className='pr-[5px]' >Yes</Link>
                        <Link >No</Link>
                    </div>
                </div>

            </div>
            {error && <div className='fixed top-20  bg-red-500 text-white p-2 showUp rounded-md text-xl'>
                {error}
            </div>}
        </div>


    )
}
function mapStateToProps(state) {
    return { values: state.form.surveyForm.values };
}


export default connect(mapStateToProps, actions)(SurveyFormReview);