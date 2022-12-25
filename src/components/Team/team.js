import React from 'react'
import Navbar from '../Navbar/navbar'
import './teams.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Team = (props) => {

   console.log(props)
   const bio = ['strTeam', 'intFormedYear', 'strAlternate', 'strCountry', 'strDescriptionEN'];
   const stadium = ['strStadium', 'strStadiumThumb', 'strStadiumLocation', 'intStadiumCapacity', 'strStadiumDescription'];
   const social = ['strFacebook', 'strInstagram', 'strTwitter', 'strYoutube'];
   const images = ['strTeamBadge', 'strTeamJersey', 'strTeamFanart1', 'strTeamFanart2', 'strTeamFanart3', 'strTeamFanart4']
   const leagues = ['', 2, 3, 4, 5]
   return (<>
      <Navbar />
      <div className='block sect' id='gen_info'>
         <div id='thumb' style={{ backgroundImage: `url(${props.data[images[0]]})` }}></div>
         <h1 className='subtitle is-1' style={{ marginBottom: '10px' }}>{props.data[bio[0]]}</h1>
         <h1 className='subtitle is-4'>{props.data[bio[2]]}</h1>
         <h1>Year Established - {props.data[bio[1]]}</h1>
         <h1>Country - {props.data[bio[3]]}</h1>
         <h1>Stadium - {props.data[stadium[0]]}</h1>
      </div>

      <div className='block sect'>
         <h1>{props.data[bio[4]]}</h1>
      </div>

      <div className='block sect'>
         <div id="kit_pic" style={{ backgroundImage: `url(${props.data[images[1]]})` }}></div>
         <h1 className='subtitle is-4'>Leagues</h1>
         {
            leagues.map((a) => {
               const ind = a
               return (
                  <h1>{props.data[`strLeague${ind}`]}</h1>
               );
            })
         }
      </div>

      <div className='block sect'>
         <h1 className='subtitle is-4'>About Stadium</h1>
         <h1>Location - {props.data[stadium[2]]}</h1>
         <h1>Capacity - {props.data[stadium[3]]}</h1>
         <h1>{props.data[stadium[4]]}</h1>
      </div>

      <div className='block sect'>
         <h1 className='subtitle is-4'>Fan Art</h1>
         <AwesomeSlider>
            <div data-src={props.data[images[2]]} />
            <div data-src={props.data[images[3]]} />
            <div data-src={props.data[images[4]]} />
            <div data-src={props.data[images[5]]} />
            <div data-src={props.data[stadium[1]]} />
         </AwesomeSlider>
      </div>

      <div className='block sect'>
         <h1 className='subtitle is-4' style={{ textAlign: 'center', marginTop: '50px' }}>Team Socials</h1>

         <div className='icons'>
            <span className='icon'>
               <a href={props.data[social[0]]}>
                  <i className='fa fa-facebook fa-2x'></i>
               </a>
            </span>

            <span className='icon'>
               <a href={props.data[social[2]]}>
                  <i className='fa fa-twitter fa-2x'></i>
               </a>
            </span>

            <span className='icon'>
               <a href={props.data[social[1]]}>
                  <i className='fa fa-instagram fa-2x'></i>
               </a>
            </span>

            <span className='icon'>
               <a href={props.data[social[3]]}>
                  <i className='fa fa-youtube fa-2x'></i>
               </a>
            </span>
         </div>

      </div>

   </>);
}
export default Team