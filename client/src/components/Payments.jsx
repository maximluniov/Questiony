import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../actions'
const Payments = (actions) => {
    console.log(actions)
    return(
        <StripeCheckout
            name='Questiony'
            description='5$ for 5 email credits'
            amount={500}
            token={token => actions.handleToken(token)}
            stripeKey={process.env.stripePublishableKey}
        >
            <button className='btn '>Add Credits</button>
        </StripeCheckout>)   
}



export default connect(null,actions)(Payments)