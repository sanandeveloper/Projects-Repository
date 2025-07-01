import React, { useState } from "react";

function ContactUs() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const[sent,setSent]=useState('')


  


     const handleSubmit=(e)=>{
      
      e.preventDefault()

    const userMessage=[{name,email,message}]
      
         const exsitinguser= JSON.parse(localStorage.getItem('userMessage')) ||[]

         const updateddata=[...exsitinguser,userMessage]

          

        localStorage.setItem('userMessage',JSON.stringify(updateddata))
          
        setSent('Message Succesfully Sent')

        setEmail('')
        setMessage('')
        setName('')
        setTimeout(setSent,7000)

         
         
         
     }


  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-lg space-y-6"
      >
        <h1 className="text-center text-3xl font-bold text-gray-800 dark:text-white">
          Contact Us
        </h1>
          {sent && <p className="text-center bg-green-700 text-white">{sent}</p>}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Subject
          </label>
          <input
            type="text"
            value={name}
            placeholder=" Your Name"
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            value={message}
            placeholder="Enter Your Message"
            onChange={(e) => setMessage(e.target.value)}
            required
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
