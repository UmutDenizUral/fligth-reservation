import React from 'react';
import { LuPlaneTakeoff } from "react-icons/lu";
import { LuPlaneLanding } from "react-icons/lu";
import { IoAirplaneSharp } from "react-icons/io5";
import { ıataData } from '../constants/airportData';

const FligthCard = ({ flight }: any) => {
    // Uçuşun kalkış ve iniş zamanını hesaplayabilmek için Date objeleri oluştur
    const departureTime = new Date(flight.scheduleDateTime);
    const landingTime = new Date(flight.estimatedLandingTime == undefined ? flight.scheduleDateTime : flight.estimatedLandingTime);

    function handleIATA(iataCode: string) {
        // Dizideki her bir elemanı kontrol eder
        const airport = ıataData.find(airport => airport.iata === iataCode);

        // Eğer eşleşen bir iata kodu varsa şehir döner, yoksa undefined döner
        return airport ? airport.city : "City not found";
    }

    // Uçuş süresi
    const flightDuration = Math.abs(landingTime.getTime() - departureTime.getTime()) / (1000 * 60); // Dakika cinsinden

    return (
        <div className='bg-white p-6 rounded-lg shadow-md mb-4 relative'>
            {flight.flightDirection === 'A' ? (
                <div>
                    <div className='font-bold'>{handleIATA(flight.route.destinations[flight.route.destinations.length - 1])}-Amsterdam</div>
                    <div className='flex justify-between items-center my-2'>
                        <div>
                            <p className='flex items-center justify-center gap-2 text-gray-600'><LuPlaneTakeoff /> Departure</p>
                            <p className=" font-bold">{departureTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                            <p className="text-sm text-gray-500">Airport: {flight.route.destinations[flight.route.destinations.length - 1]}</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p className='w-8 md:w-16 h-0.5 bg-gray-400'></p>
                        </div>
                        <div className="text-center">
                            <p>{flight.prefixICAO}</p>
                            <p className='text-purple-900 flex items-center justify-center my-1'><IoAirplaneSharp size={25} /></p>
                            <p className="text-sm text-gray-500">{flightDuration} minutes</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p className='w-8 md:w-16 h-0.5 bg-gray-400'></p>
                        </div>
                        <div>
                            <p className='flex items-center justify-start gap-2 text-gray-600'><LuPlaneLanding /> Arrival</p>
                            <p className=" font-bold">{landingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                            <p className="text-sm text-gray-500">Airport: AMS</p>
                        </div>
                    </div>
                    <div className='flex mt-4'>
                        <div className='flex items-center justify-center text-purple-700 font-bold'>
                            Price: ${Math.floor(Math.random() * (500 - 100 + 1)) + 100}
                        </div>
                        <div className="absolute bottom-0 right-0">
                            <p className="font-bold text-lg">{flight.price}</p>
                            <button className="bg-purple-900 text-white px-5 py-3 rounded-md">
                                Book Flight
                            </button>
                        </div>
                    </div>

                </div>
            ) : (

                <div>
                    <div className='font-bold'>Amsterdam-{handleIATA(flight.route.destinations[flight.route.destinations.length - 1])}</div>
                    <div className='flex justify-between items-center my-2'>
                        <div>
                            <p className='flex items-center justify-center gap-2 text-gray-600'><LuPlaneTakeoff /> Departure</p>
                            <p className=" font-bold">{departureTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                            <p className="text-sm text-gray-500">Airport: AMS</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p className='w-8 md:w-16 h-0.5 bg-gray-400'></p>
                        </div>
                        <div className="text-center">
                            <p>{flight.prefixICAO}</p>
                            <p className='text-purple-900 flex items-center justify-center my-1'><IoAirplaneSharp size={25} /></p>
                            <p className="text-sm text-gray-500">{flightDuration} minutes</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p className='w-8 md:w-16 h-0.5 bg-gray-400'></p>
                        </div>
                        <div>
                            <p className='flex items-center justify-start gap-2 text-gray-600'><LuPlaneLanding /> Arrival</p>
                            <p className=" font-bold">{landingTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
                            <p className="text-sm text-gray-500">Airport: {flight.route.destinations[flight.route.destinations.length - 1]}</p>

                        </div>
                    </div>
                    <div className='flex mt-4'>
                    <div className='flex items-center justify-center text-purple-700 font-bold'>
                            Price: ${Math.floor(Math.random() * (500 - 100 + 1)) + 100}
                        </div>
                        <div className="absolute bottom-0 right-0">
                            <p className="font-bold text-lg">{flight.price}</p>
                            <button className="bg-purple-900 text-white px-5 py-3 rounded-md">
                                Book Flight
                            </button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}

export default FligthCard;
