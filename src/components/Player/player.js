import React from 'react'
import Navbar from '../Navbar/navbar'
import './player.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Player = (props) => {


   const keys = ['strPlayer', 'dateBorn', 'strNationality', 'strTeam', 'strHeight', 'strWeight', 'strAgent', 'strPosition', 'strWage', 'dateSigned', 'strKit', 'strDescriptionEN', 'strSigning', 'strNumber', 'strBirthLocation']
   const img = ['strThumb', 'strBanner', 'strFanart1', 'strFanart2', 'strFanart3', 'strFanart4'];
   const social = ['strFacebook', 'strTwitter', 'strInstagram']

   return (<>
      <Navbar />
      <div className='block sect' id='gen_info'>
         <div id='thumb' style={{ backgroundImage: `url(${props.data[img[0]]})` }}></div>
         <h1 className='subtitle is-1' style={{ marginBottom: '10px' }}>{props.data[keys[0]]}</h1>
         <h1>Date of Birth - {props.data[keys[1]]}</h1>
         <h1>Nationality - {props.data[keys[2]]}</h1>
         <h1>Current Team - {props.data[keys[3]]}</h1>
         <h1>Height - {props.data[keys[4]]}</h1>
         <h1>Weight - {props.data[keys[5]]}</h1>
         <h1>Number - {props.data[keys[13]]}</h1>
         <h1>Position - {props.data[keys[7]]}</h1>

      </div>

      <div className='block sect'>
         <h1>{props.data[keys[11]]}</h1>
      </div>

      <div className='block sect'>
         <h1 className='subtitle is-4' id='fact_title'>Random Facts</h1>
         <h1>Birth Location - {props.data[keys[14]] || 'Not mentioned'}</h1>
         <h1>Agent - {props.data[keys[6]] || 'Not mentioned'}</h1>
         <h1>Date Signed for {props.data[keys[3]]} - {props.data[keys[9]]}</h1>
         <h1>Transfer Fees - {props.data[keys[12]] || 'Not mentioned'}</h1>
         <h1>Wage - {props.data[keys[8]] || 'Not mentioned'} </h1>
         <h1>Kit - {props.data[keys[10]] || 'Not mentioned'}</h1>

      </div>

      <div className='block sect'>
         <h1 className='subtitle is-4'>Fan Art</h1>
         <AwesomeSlider>
            <div data-src={props.data[img[3]]} />
            <div data-src={props.data[img[4]]} />
            <div data-src={props.data[img[5]]} />
            <div data-src={props.data[img[6]]} />
         </AwesomeSlider>
      </div>

      <div className='block sect'>
         <h1 className='subtitle is-4' style={{ textAlign: 'center', marginTop: '50px' }}>Player's Social</h1>

         <div className='icons'>
            <span className='icon'>
               <a href={props.data[social[0]]}>
                  <i className='fa fa-facebook fa-2x'></i>
               </a>
            </span>

            <span className='icon'>
               <a href={props.data[social[1]]}>
                  <i className='fa fa-twitter fa-2x'></i>
               </a>
            </span>

            <span className='icon'>
               <a href={props.data[social[2]]}>
                  <i className='fa fa-instagram fa-2x'></i>
               </a>
            </span>
         </div>

      </div>

   </>);
}
export default Player