import './CheckoutForm.css'
import { useState } from 'react'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name,phone,email
        }

        onConfirm(userData)
    }

    return(
        <div className='Container'>
            <fomr onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre
                    <imput 
                        className='Input'
                        type='text'
                        value={name}
                        onChange={({target}) => setName(target.value)}
                    ></imput>
                </label>
                <label className='Label'> 
                    Telefono
                    <imput 
                        className='Input'
                        type='text'
                        value={phone}
                        onChange={({target}) => setPhone(target.value)}
                    ></imput>
                </label>
                <label className='Label'>
                    Email
                    <imput 
                        className='Input'
                        type='email'
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                    ></imput>
                </label>
            </fomr>
        </div>
    )
}

export default CheckoutForm