import React, { useState, useEffect } from 'react';
import Player from '../Player/player'
import Team from '../Team/team'

function Profile(params) {
   var url = '';
   const [Info, setInfo] = useState({})

   if (params.searchtype[0].toLowerCase() === 'p') {
      url = 'https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=' + encodeURI(params.query)
   }

   else {
      url = 'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + encodeURI(params.query)
   }



   const getInfo = async () => {
      const response = await fetch(url);
      const info = await response.json();
      if (params.searchtype[0].toLowerCase() === 'p') {
         if (info.player) {
            setInfo(info.player[0]);
         }
      }

      else {
         if (info.teams) {
            setInfo(info.teams[0]);
         }
      }
   };

   useEffect(() => {
      getInfo();
   });

   if (params.searchtype[0].toLowerCase() === 'p') {
      return (<Player data={Info} />)
   }

   else {
      return (<Team data={Info} />)
   }

}

export default Profile