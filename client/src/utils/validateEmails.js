
const validateEmails = (emails) =>{
const RE = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    const invalidEmails = emails.split(',')
   .map(email =>  email.trim())
   .filter(email => RE.test(email)===false);

    if(invalidEmails.length){
        return `Please write emails in this form:"email1@gmail.com ,email2@questiony.com" These emails are invalid: ${invalidEmails}`;
    }
    return;
    }



export default validateEmails