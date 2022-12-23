import { useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

// import components
import Button from './Button';

export default function ContactForm({closeModal}) {
    const [formSuccess, setFormSuccess] = useState(false);
    const [ formError, setFormError ] = useState(false);

    const formRef = useRef();

    function submitForm(e) {
        e.preventDefault();
        setFormSuccess(false);
        setFormError(false);
        console.log('submitting form')

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID, 
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
            formRef.current, 
            // 'ljlSDALSllJJLASDA'
            process.env.REACT_APP_EMAILJS_PUBLIC_API_KEY
            )
        .then(
        (result) => {
            console.log('Success. ', result, formRef)
            setFormSuccess(true);
            clearForm();
            },
        (error) => {
            setFormError(true);
            console.log(error.text, process.env.REACT_APP_EMAIL_PUBLIC_API_KEY)}
        )
    }

    function clearForm() {
        for (let i = 0; i < 7; i++) {
            formRef.current[i].value = ''
        }
        setTimeout(() => {
            setFormSuccess(false)
        }, 5000)
    }


  return (
    <div className="ContactForm">

        <form ref={formRef} onSubmit={submitForm}>
            <fieldset className="flex flex-row flex-wrap justify-center">
                {formSuccess && 
                <p className="text-green-700 bg-green-200 mb-4 p-2 rounded-sm border w-full">Vielen Dank! Wir werden uns bald bei Ihnen melden.</p>
                }
                {formError && 
                <p className="text-red-700 bg-red-200 mb-4 p-2 rounded-sm border w-full">Es gab einen Fehler - bitte versuchen Sie es erneut.</p>
                }
                <div className="Field mb-2 p-1 w-3/6">
                    <label className="block text-left mb-2">Vorname</label>
                    <input className="bg-slate-100 w-full p-1" name="fname" required/>
                </div>
                <div className="Field mb-2 p-1 w-3/6">
                    <label className="block text-left mb-2">Nachname</label>
                    <input className="bg-slate-100 w-full p-1" name="lname" required/>
                </div>
                <div className="Field mb-2 p-1 w-full">
                    <label className="block text-left mb-2">Email</label>
                    <input type="email" required className="bg-slate-100 w-full p-1" name="email"/>
                </div>
                <div className="Field mb-3 p-1 w-full">
                    <label className="block text-left mb-2">Option</label>
                    <select type="email" required className="bg-slate-100 w-full p-2" name="option">
                        <option className="p-1" value="halbtags">Halbtags</option>
                        <option value="ganztags">Ganztags</option>
                    </select>
                </div>
                <div className="Field mb-3 p-1 w-full">
                    <label className="block text-left mb-2">Gewünschtes Datum</label>
                    <input type="date" required className="bg-slate-100 w-full p-1" name="date"/>
                </div>
                <div className="Field mb-2 p-1 w-full">
                    <label className="block text-left mb-2">Nachricht</label>
                    <textarea className="bg-slate-100 w-full p-1" rows="4" name="message" required/>
                </div>
                <Button
                    className="w-full"
                    bg="bg-sky-700"
                    text="text-slate-100"
                    hoverBg="bg-sky-600"
                    width="w-full"
                    >
                    Submit
                </Button>
                <button onClick={closeModal}>Close Modal</button>

            </fieldset>
        </form>
    </div>
  )
}
