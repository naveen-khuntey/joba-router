import React from 'react'

export default function Contact() {
  return (
    <div className='Contact'>
        <h3>Contact Us</h3>
        <form>
            <lable>
                <span>Your Email :</span>
                <input type='email' name='email'required />
            </lable>
            <lable>
                <span>Your message :</span>
                <textarea name='message' required ></textarea>
            </lable>
            <button>Submit</button>
        </form>
      
    </div>
  )
}
