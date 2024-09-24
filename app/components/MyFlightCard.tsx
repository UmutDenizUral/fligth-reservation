'use client'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FaChevronDown } from 'react-icons/fa';
type FlightCardProps = {
    id: string,
    apiID?: string;
    flightName?: string;
    flightNumber?: string | number;
    prefixICAO: string;
    scheduleDateTime: string;
    estimatedLandingTime?: string;
    flightDirection: string;
    route?: string;
};

const MyFlightCard: React.FC<FlightCardProps> = ({
    id,
    flightName,
    flightNumber,
    prefixICAO,
    scheduleDateTime,
    estimatedLandingTime,
    flightDirection,
    route
}) => {
    const router = useRouter()
    const departureTime = new Date(scheduleDateTime);
    const landingTime = new Date(estimatedLandingTime || scheduleDateTime);

    const deleteFlight = (id: string) => {
        if (id) {
            axios.delete(`/api/deleteFlight/${id}`)
                .then(() => {
                    toast.success('Rezervation Cancelled!')
                    router.refresh()
                })
                .catch(error => {
                    console.error('Error while deleting', error)
                })
        }
        else {
            toast.error('Something went wrong')
        }
    }
    // Zamanları formatlama
    const formattedDepartureTime = departureTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedLandingTime = landingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const flightDuration = Math.abs(landingTime.getTime() - departureTime.getTime()) / (1000 * 60); // Dakika cinsinden
    return (
        <div>
            <div className='p-4 px-4 flex-col md:flex-row flex shadow-md bg-white m-1 mt-4 rounded-md mb-0 '>
                <div className='flex lg:w-1/2'>
                    <div className='border-2 rounded-full text-gray-300 w-12 h-12 flex items-center justify-center'>logo</div>
                    <div className='pl-3 flex flex-col w-full'>
                        <div className='text-gray-600 text-xl mb-2'>
                            {formattedDepartureTime} - {formattedLandingTime}
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='text-sm mx-2'>
                                {prefixICAO}
                                <p className='text-xs mt-0.5 font-medium flex items-center justify-center gap-1 text-purple-700'>Flight Details <FaChevronDown /></p>
                            </div>
                            <div>
                                <p>Nonstop</p>
                                <p className='text-xs text-gray-500'>1h {flightDuration}m</p>
                            </div>
                            <div>
                                {flightDirection === 'D' ? (
                                    <p>AMS to {route}</p>
                                ) : (
                                    <p>{route} to AMS</p>
                                )}
                                <p className='text-xs text-gray-500 text-center'>{flightName}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 mt-4 md:mt-0 flex gap-8 md:gap-4 items-center justify-center md:justify-end px-4'>
                    <div className='border rounded-md p-3 w-[70px] h-[80px]'>
                        <strong>${Math.floor(Math.random() * (110 - 100 + 1)) + 50}</strong>
                        <p className='text-sm mt-3'>Main</p>
                    </div>
                    <div className='border rounded-md p-3 w-[70px] h-[80px]'>
                        <strong>${Math.floor(Math.random() * (300 - 100 + 1)) + 50}</strong>
                        <p className='text-sm mt-3'>Comfort</p>
                    </div>
                    <div className='border rounded-md p-3 w-[70px] h-[80px]'>
                        <strong>${Math.floor(Math.random() * (300 - 100 + 1)) + 50}</strong>
                        <p className='text-sm mt-3'>First</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <button className="  border px-2 py-1 bg-red-500 text-white rounded-md" onClick={() => deleteFlight(id)} >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default MyFlightCard;
