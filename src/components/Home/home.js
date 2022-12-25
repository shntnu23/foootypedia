import './home.css'
import Profile from '../Profile/profile'
import React, { useState } from 'react'

const Home = () => {
   const [query, setQuery] = useState('');
   const [search, setSearch] = useState('');
   const [pass, setPass] = useState(false);


   if (pass) {
      return (
         <>
            <Profile query={query} searchtype={search} />
         </>);
   }

   return (<>
      <div className='back'>
         <div id='heading' className='block'>

            <h1>Footy Pedia</h1>
            <p>Your Wiki for football related stuff</p>

            <div className='field'>
               <input
                  type="text"
                  name="query"
                  id="query"
                  placeholder="Enter Query"
                  className='input control'
                  value={query}
                  onChange={(e) => {
                     setQuery(e.target.value)
                     setPass(false)
                  }}
                  required
               />
               <div className='select'>
                  <select name="search_type" id="selection"
                     onChange={(e) => { setSearch(e.target.value) }}>
                     <option value="Category">Category</option>
                     <option value="Player">Player</option>
                     <option value="Team">Team</option>
                  </select>
               </div>
            </div>
            <button type='submit' className='button is-rounded' id='submit'
               onClick={(e) => {
                  e.preventDefault();
                  setPass(true);
               }} >Submit</button>
         </div>
      </div>
   </>);
}

export default Home