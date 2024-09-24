
import React from 'react'
import { getFligths } from '../actions/getFligths'
import { DiVim } from 'react-icons/di'
import MyFlightCard from '../components/MyFlightCard'
import SideBar from '../components/SideBar'
import FilterBar from '../components/FilterBar'

const page = async () => {

    const flights = await getFligths()

    if (!flights)
        return (
            <div>Data Bulunamadı</div>
        )

    return (
        <div className='container-xl  px-4 mx-auto py-8 '>
            <p className='text-xl font-medium text-gray-500'>My Flights</p>
            <hr />
            <FilterBar />
            <div className='grid grid-cols-12 '>
                <div className='col-span-12 lg:col-span-10 mx-2 '>
                    {flights?.map((flight: any, i: any) => (
                        <MyFlightCard key={i} id={flight.id} flightName={flight.flightName} prefixICAO={flight.prefixICAO} scheduleDateTime={flight.scheduleDateTime} estimatedLandingTime={flight.estimatedLandingTime} flightDirection={flight.flightDirection} route={flight.route} />
                    ))}
                </div>
                <div className='col-span-12 lg:col-span-2 mx-2'>
                    <SideBar />
                </div>
            </div>
        </div>

    )
}

export default page