import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'
class SurveysList extends Component {



    componentDidMount(){
            this.props.fetchSurveys().catch((err)=>{window.location='/login' })        
    }


render(){
    return (
        <div className='flex flex-col gap-y-8'>{this.props.surveys.reverse().map((survey) => (<div className='bg-slate-200 shadow-xl p-4 w-3/4 rounded-md showUp max-[800px]:w-full '
         key={survey._id}>
            <div className='flex justify-between'>
                <h4>{survey.title}</h4>
                <div>Created: {new Date(survey.dateSent).toLocaleDateString()}</div>
                {/* <div>{new Date(survey.lastResponded).toLocaleString()}</div> */}
            </div>
            <div className='text-center'>{survey.body}</div>
            <div>Votes:{survey.yes + survey.no}</div>
            <div className='flex w-3/4 text-center mx-40'>
                {
                    survey.yes + survey.no > 0 ? (
                        <>{
                            survey.yes > 0 && <div className='bg-green-300' style={{ width: `${(survey.yes * 100) / (survey.yes + survey.no)}%` }} >Yes {(survey.yes * 100 / (survey.yes + survey.no)).toFixed(2)}%</div>
                        }
                            {
                                survey.no && <div className='bg-red-300' style={{ width: `${(survey.no * 100) / (survey.yes + survey.no)}%` }}>No {(survey.no * 100 / (survey.yes + survey.no)).toFixed(2)}%</div>
                            }

                        </>
                    ) : <div className='w-full bg-slate-300'>
                        No votes yet
                    </div>
                }
            </div>
        </div>))}</div>
    )}
}

function mapStateToProps({ surveys }) {
    return { surveys }
}

export default connect(mapStateToProps,{fetchSurveys})(SurveysList);