import { getCurrentExchanges } from "components/api-service/api";
import { useState } from "react";


const FormExchanges = ({onSubmit}) => {
const handleSubmit = e => {
    e.preventDefault()
    const form = e.currentTarget;
   const formValue = form.elements.currency.value
    const text = formValue
    const splitText = text.split(' ');
   console.log(splitText)
   const to = splitText[3];
   const from = splitText[1];
   const amount = splitText[0];
   onSubmit(to, from, amount);
}

    return <form onSubmit={handleSubmit}>
        <input type="text" name="currency" placeholder="Type currency" />
        <button type='submit'>Exchange</button>
    </form>
}

export default FormExchanges;