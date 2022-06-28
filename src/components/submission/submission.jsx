
import CartList from "../cart/cart-list"
import './submission.scss'
import { useState } from "react"

const Submission = () => {

    function submit(){
        alert(`Thank u for purchasing with us! Details are: ${email}, ${contact}, ${address}.`)

    }

    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [address, setAddress] = useState("")

    return (
        <div>
        <CartList header ='Checkout'/>
        <form>
        <div className="form-container">
        <p>Please fill in this form to confirm your delivery.</p>
        <hr></hr>
        
        <label for="email"><b>Email</b></label>
        <input value= {email} onChange={event => setEmail(event.target.value)} type="text" placeholder="Enter Email" name="email" required></input>
        
        <label for="contact"><b>Contact</b></label>
        <input value= {contact} onChange={event => setContact(event.target.value)} type="number" placeholder="Enter Contact" name="contact" required></input>
       
        <label for="address"><b>Address</b></label>
        <input value= {address} onChange={event => setAddress(event.target.value)} type="text" placeholder="Enter Address" name="address" required></input>

        <div className="buttons">
        <a className= "clear-button" href='/cart'>Homepage</a>
        <button className="submit-button" type="submit" value="Submit" onClick={()=>submit()}>Confirm Order</button>
        </div>
        </div>
        </form>
        </div>
    )
}

export default Submission