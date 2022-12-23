import { useState} from 'react'

// import components
import Button from './Button';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')

  return (
    <div className="ContactForm">
        <p>Hello from Contact Form</p>
        <form>
            <fieldset className="flex flex-row flex-wrap justify-center">
                <div className="Field mb-2 p-1 w-2/6">
                    <label className="block text-left mb-2">Vorname</label>
                    <input className="bg-slate-100 w-full" required/>
                </div>
                <div className="Field mb-2 p-1 w-2/6">
                    <label className="block text-left mb-2">Nachname</label>
                    <input className="bg-slate-100 w-full" required/>
                </div>
                <div className="Field mb-2 p-1">
                    <label className="block text-left mb-2">Email</label>
                    <input type="email" required className="bg-slate-100 w-full"/>
                </div>
                <div className="Field mb-2 p-1">
                    <label className="block text-left mb-2">Nachricht</label>
                    <textarea className="bg-slate-100 w-full" required/>
                </div>
                <Button
                    bg="bg-sky-700"
                    hoverBg="bg-sky-500"
                    >
                    Submit
                </Button>

            </fieldset>
        </form>
    </div>
  )
}
