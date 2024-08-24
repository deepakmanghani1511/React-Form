import './App.css';
import { useState } from 'react';

function App() {
  
  // Handlinh multi forms
  const [formData, setFormData] = useState( {firstName: "", lastName: "", country:"", email: "", street: "", state:"", city:"", zip:"", comments:false, candidates:false, offers: false,
    pusNotification:""
  } );


  function changeHandler(event) {
    
  const { name, value, checked, type } = event.target;
    
  setFormData( (prev) => ({  
      ...prev,
      // [event.target.name]:event.target.value
      [name]:value
  }));
  
    }

  function submitHandler(event) {
     event.preventDefault();
     console.log(formData);
  }

  return (
    <div className='flex flex-col items-center justify-center mx-auto py-10'>
      
      <form onSubmit={submitHandler} className='space-y-1'>
        <fieldset className='border p-5 py-6'>
        <legend className='text-xl'>Student Information</legend>

        <label htmlFor='firstName'>First Name</label>
        <br></br>
        <input 
          id="firstName"
          type='text'
          name="firstName"
          placeholder='First Name'
          value={formData.firstName}
          onChange={changeHandler}
          className='outline'
        />
        <br></br>

        <label htmlFor='lastName'>Last Name</label>
        <br></br>
        <input
          id="lastName"
          type='text'
          name="lastName"
          placeholder='Last Name'
          value={formData.lastName}
          onChange={changeHandler}
          className='outline'
        />
        <br></br>

        <label htmlFor='email'>Email Address</label>
        <br></br>
        <input
          id="email"
          type='email'
          name="email"
          placeholder='dm@duck.com'
          value={formData.email}
          onChange={changeHandler}
          className='outline'
        />
        <br></br>

      <label htmlFor="country">Country</label>
      <br/>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="outline"
        >

        <option>India</option>
        <option>United States</option>
        <option>Canada</option>
        <option>Mexico</option>

      </select>
      <br/>


        <label htmlFor='country'>State/Province</label>
        <br></br>
        <input
          id="state"
          type='text'
          name="state"
          placeholder='Rajasthan'
          value={formData.state}
          onChange={changeHandler}
          className='outline'
        />
        <br></br>

        <label htmlFor='city'>City</label>
        <br></br>
        <input
          id="city"
          type='text'
          name="city"
          placeholder='Jaipur'
          value={formData.city}
          onChange={changeHandler}
          className='outline'
        />
        <br></br>

        <label htmlFor='street'>Street Address</label>
        <br></br>
        <input
          id="street"
          type='text'
          name="street"
          placeholder='A-1 Main St'
          value={formData.street}
          onChange={changeHandler}
          className='outline'
        />
        <br></br>

        <label htmlFor='postal'>ZIP / Postal code</label>
        <br></br>
        <input
          id="zip"
          type='number'
          name="zip"
          placeholder='303030'
          value={formData.zip}
          onChange={changeHandler}
          className='outline'
        />
        </fieldset>
        <br></br>
        <br></br>

        <fieldset className='border p-5 py-6'>
            <legend className='text-xl'>By Email</legend>

            <div className='flex space-x-2'>
              <input type='checkbox' className='' id='comments' onChange={changeHandler} name='comments' value={formData.comments}/>
              <div>
                <label htmlFor='comments'>Comments</label>
                <p>Get notified when someone posts a comment on a posting.</p>
              </div>
            </div>
            
            <div className='flex space-x-2'>
              <input type='checkbox' id='candidates' onChange={changeHandler} name='candidates' value={formData.candidates}/>
              <div>
                <label htmlFor='candidates'>Comments</label>
                <p>Get notified when a applies for a job.</p>
              </div>
            </div>
            
            <div className='flex space-x-2'>
              <input type='checkbox' id='offers' onChange={changeHandler} name='offers' value={formData.offers}/>
              <div>
                <label htmlFor='offers'>Offers</label>
                <p>Get notified when a candidate accepts or rejects.</p>
              </div>
            </div>
            
            {
            /* <input type='checkbox' id='1' onChange={changeHandler} name='comments' value={formData.comments}/>
            <label htmlFor='1'>Candidates</label>
            <br></br>
            <div htmlFor='1'>Get notified when a Candidate applies for a job.</div>
            <br></br>
            
            <input type='checkbox' id='1' onChange={changeHandler} name='comments' value={formData.comments}/>
            <label htmlFor='1'>Offers</label>
            <br></br>
            <div htmlFor='1'>Get notified when a candidate accepts or rejects an offer.</div> */
            }

            <br></br>
          </fieldset>
          <br/>
          

          <fieldset className='border p-5 py-8'>
            <legend className='text-xl'>Push Notifications</legend>
            
            <p>These are delivered via SMS to your mobile phone.</p>
            
            <input className='mr-2' type='radio' id='pushEverything' name='pushNotification' value='Everything' onChange={changeHandler}/>
            <label htmlFor='pushEverything'>Everything</label>
            <br/>
            <input className='mr-2' type='radio' id='pushEmail' name='pushNotification' value='Same as email' onChange={changeHandler}/>
            <label htmlFor='pushEmail'>Same as email</label>
            <br/>
            <input className='mr-2' type='radio' id='pushNothing' name='pushNotification' value='No Push Notifications' onChange={changeHandler}/>
            <label htmlFor='pushNothing'>No push notifications</label> 
            <br/>
          </fieldset>

            <div className='py-10 flex justify-center'>
              <button className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>
            </div>
    </form>
    
    </div>
  );
}

export default App;