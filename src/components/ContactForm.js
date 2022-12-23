import { useRef} from 'react';
import emailjs from '@emailjs/browser';

// import components
import Button from './Button';

export default function ContactForm() {
    const formRef = useRef();

    function submitForm(e) {
        //
        e.preventDefault()
        console.log('submitting form')

        emailjs.sendForm()
        .then(
        (result) => console.log('Success. ', result),
        (error) => console.log(error.text)
        )
    }


  return (
    <div className="ContactForm">

        <form ref={formRef} onSubmit={submitForm}>
            <fieldset className="flex flex-row flex-wrap justify-center">
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

            </fieldset>
        </form>
    </div>
  )
}
