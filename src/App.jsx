import { useState } from 'react';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';



const App = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    message: ''
  })
  const [emailV, setEmailV] = useState(false)

  const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  function handleSubmit(e) {
    e.preventDefault()
    if (!formData.email) {
      iziToast.error({
        title: 'Error',
        message: 'Email needs to be full!',
      });

    } else {
      console.log(formData)
    }
  }



  function handleChange(event) {
    const { name, value } = event.target

    if (name === 'email' && !emailRegEx.test(value)) {
      setEmailV(true)
    } else if (name === 'email' && emailRegEx.test(value)) {
      setEmailV(false)
    }


    setFormData((curr) => ({
      ...curr,
      [name]: value
    }))

  }

  return (
    <>
      <div className='flex flex-col justify-center items-center m-6 p-6 rounded-xl bg-slate-200'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

          <div className='flex gap-2'>
            <label>Name*</label>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='Your name...'
            />
          </div>

          <div className='flex flex-col gap-1'>
            <div className='flex gap-2'>
              <label>Email</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='Your email...'
              />
            </div>
            <div>
              {emailV && <p className='text-red-500 text-sm ml-6'>*This is not an email</p>}
            </div>
          </div>

          <div className='flex gap-2'>
            <label>Telephone</label>
            <input
              type='text'
              name='telephone'
              value={formData.telephone}
              onChange={handleChange}
              placeholder='Your telephone...'
            />
          </div>

          <div className='flex gap-2'>
            <label>Message</label>
            <input
              type='text'
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Your message...'
            />
          </div>

          <button type='submit' >Send</button>
        </form>
      </div>
    </>
  );
};

export default App;
