import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ballimg from '../assets/images/ball-img.png';
import Navbar from './navbar-v2';

export default function Fixture({ data }) {
    const params = useParams();
    const matchID = params.matchID;
    const results = data.response.filter((match) => match.fixture.id == matchID);
    const fixture = results[0];
    // const [refreshed, setRefreshed] = useState(0);

    // useEffect(() => {
    //     if (refreshed > 1) {
    //         // Your refresh logic goes here
    //         console.log(`Refreshing Fixture component for match ID: ${matchID}`);
    //         window.location.reload(false); // This line triggers the page reload
    //         // After the initial refresh, set refreshed to true to prevent further refreshes
    //         setRefreshed(true);
    //     }
    // }, [matchID]);// Dependency array includes refreshed state

    // // ... Rest of your component code







return (
    <> 
    <Navbar />
    <div className='font-bold tracking-wider text-black bg-gray-300 theme' id='bg-fixture'>
            <div className='py-2 '>
            
            <div align="center">
                <img src={fixture.league.logo} width={50} alt={fixture.league.name} ></img>
                {fixture.league.name}
            </div>

            <div className='text-center'>
                {fixture.fixture.status.long}
            </div>

            <div className='flex w-full p-1'> 
            
            <div className='w-[10%]' align="center">
                <img src={fixture.teams.home.logo} width={70} alt={fixture.teams.home.name}></img>
            </div>
            

            <div className='w-[32%] text-right'> 
                {fixture.teams.home.name}
            </div>


            <div className='w-[16%] text-center'> 
            {fixture.goals.home} : {fixture.goals.away}
            
            </div>




            <div className='w-[32%] text-left'> 
                {fixture.teams.away.name}
            </div>



            
            <div className='w-[10%]' align="center">
                <img src={fixture.teams.away.logo} width={70} alt={fixture.teams.away.name}></img>
            </div>


            </div>



            
            <div className='flex justify-center'>
                <div className='w-[5%] text-center font-bold text-green-600 bg-gray-500 bg-opacity-30 rounded-full'>
                    {fixture.fixture.status.elapsed}`
                </div>
            </div>
            </div>



    <div align='center'   className='grid grid-cols-1 pb-40 divide-y '>
        <h1 className='p-1 text-xl text-gray-300 bg-gray-700'>Events</h1>



        {!Fixture.events ? null : fixture.events.map((event) => (
        <div className='p-5' key={event.team.id}>
            {event.type === 'Goal' ? (
                <div>
                    <img src={ballimg} width={15} alt='GOAL' />
                </div>
            ) : (
                <div className='badge badge-secondary'>{event.type}</div>
            )}{"  "}
            {event.player.name} <small>({event.team.name})</small>
        </div>
    ))}
    </div>

        <div align='center'   className='grid grid-cols-1 divide-y'>
        <h1 className='p-1 text-xl text-gray-300 bg-gray-700'>Score</h1>


        <div className='p-2'>
            First Half
            <br />
            {fixture.score.halftime.home} : {fixture.score.halftime.away}
        </div>





        {fixture.score.fulltime.home ? (
            <div className='p-2 '>
            Full Time
            <br />
            {fixture.score.fulltime.home} : {fixture.score.fulltime.away}
        </div>
        ): null}


        {fixture.score.fulltime.home ? (
            <div className='p-2'>
            Extra Time
            <br />
            {fixture.score.extratime.home} : {fixture.score.extratime.away}
        </div>
        ): null}

        {fixture.score.fulltime.home ? (
            <div className='p-2'>
            Penalties
            <br />
            {fixture.score.penalty.home} : {fixture.score.penalty.away}
        </div>
        ): null}


        


        <div align='center'   className='grid grid-cols-1 divide-y '>
        <h1 className='p-1 text-xl text-gray-300 bg-gray-700'>Match Details</h1>

        <div className='p-2'>Stadium - {fixture.fixture.venue.name}</div>
        <div className='p-2'>Country - {fixture.league.country}</div>
        <div className='p-2'>{fixture.league.round}</div>
        <div className='p-2'>{fixture.league.season}</div>

            </div>


        </div>

    </div>
    </>
)
}
