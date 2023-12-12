import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from './navbar';




export default function Table({ data }) {
    return (
        <>
        <div className='grid grid-cols-1 bg-gray-400 divide-y'>
        <div className='font-bold tracking-wider text-black'>
        {data.response.map((fixture) => (
            <Link to={`/fixture/${fixture.fixture.id}`} key={fixture.fixture.id}>
            <div className='py-2 my-2 bg-gray-300 theme' id='table-bg'>
            
            <div align="center">
                <img src={fixture.league.logo} width={25} alt={fixture.league.name} ></img>
                {fixture.league.name}
            </div>

            <div className='text-center'>
                {fixture.fixture.status.long}
            </div>

            <div className='flex w-full p-1'> 
            
            <div className='w-[10%]' align="center">
                <img src={fixture.teams.home.logo} width={30} alt={fixture.teams.home.name}></img>
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
                <img src={fixture.teams.away.logo} width={30} alt={fixture.teams.away.name}></img>
            </div>


            </div>



            
            <div className='flex justify-center'>
                <div className='w-[5%] text-center font-bold text-green-600 bg-gray-500 bg-opacity-30 rounded-full'>
                    {fixture.fixture.status.elapsed}`
                </div>
                
            </div>











            

            </div>
            </Link>
        ))}
        </div>
    </div>
    </>
);
}
