'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { FaExchangeAlt } from "react-icons/fa";
import { ıataData } from '../constants/airportData';
import { LuPlaneTakeoff } from "react-icons/lu";
import { LuPlaneLanding } from "react-icons/lu";

import { IoAirplane } from "react-icons/io5";
const FlightForm = ({ setFlights }: any) => { // setFlights fonksiyonunu prop olarak alıyoruz
    const [from, setFrom] = useState<string | undefined>('');
    const [to, setTo] = useState<string | undefined>('AMS');
    const [date, setDate] = useState('');
    const [route, setRoute] = useState(false);

    const swapLocations = () => {
        if (route) {
            setTo('AMS');
            setFrom(undefined);
        } else {
            setFrom('AMS');
            setTo(undefined);
        }
        setRoute(!route);
    };
    //form verilerini gönderir
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (from && to) {
            try {
                const endpoint = from === 'AMS' ? '/api/depatureFlights' : '/api/arrivalFlights';
                const params = from === 'AMS' ? { to, date } : { from, date };
                const response = await axios.get(endpoint, { params });
                // Uçuş verilerini setFlights fonksiyonuyla güncelliyoruz
                setFlights(response.data.flights || []);
            } catch (error) {
                console.error('Error:', error);
                alert('There was a problem with the API request.');
            }
        } else {
            alert('Please select an airport');
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="flex items-center gap-1 text-gray-700 text-xl font-bold mb-4"><IoAirplane /> BOOK YOUR FLIGHT </h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="flex space-x-4 mb-4">
                    {route ? (
                        <div className='w-1/3 flex items-center justify-center border p-1 rounded-md '>
                            <span className='text-purple-900'><LuPlaneTakeoff size={20} /></span>
                            <input
                                type="text"
                                placeholder="To"
                                className="bg-white p-2 rounded-md w-full"
                                value={'AMS'}
                                disabled
                            /></div>

                    ) : (
                        <div className='w-1/3 flex items-center justify-center border p-1 rounded-md'>
                            <span className='text-purple-900'><LuPlaneTakeoff size={20} /></span>
                            <select
                                required
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                                className="p-2 rounded-md w-full"
                            >

                                <option value="">Departure</option>
                                {ıataData.map((airport) => (
                                    <option key={airport.iata} value={airport.iata}>
                                        {airport.iata + '- ' + airport.airport.substring(0, 30)}
                                    </option>
                                ))}
                            </select></div>

                    )}
                    <button
                        type="button"
                        onClick={swapLocations}
                        className="bg-gray-300 cursor-pointer text-purple-600 px-3 py-1 rounded-md"
                    >
                        <FaExchangeAlt />
                    </button>
                    {route ? (
                        <div className='w-1/3 flex items-center justify-center border p-1 rounded-md'>
                        <span className='text-purple-900'><LuPlaneLanding size={20} /></span>
                            <select
                                required
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                                className=" p-2 rounded-md w-full"
                            >
                                <option value="" className=''>Select Destination</option>
                                {ıataData.map((airport) => (
                                    <option key={airport.iata} value={airport.iata}>
                                        {airport.iata + '- ' + airport.airport.substring(0, 30)}
                                    </option>
                                ))}
                            </select>
                        </div>

                    ) : (
                        <div className='w-1/3 flex items-center justify-center border p-1 rounded-md'>
                              <span className='text-purple-900'><LuPlaneLanding size={20} /></span>
                             <input
                            type="text"
                            placeholder="From"
                            className="bg-white p-2 rounded-md w-full"
                            value={'AMS'}
                            disabled
                        />
                        </div>
                       
                    )}
                    <input
                        required
                        type="date"
                        className="border p-2 rounded-md w-1/3"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="flex space-x-4">
                    <button type='submit' className="bg-purple-900 text-white px-3 py-1.5 rounded-md">
                        Show Flights
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FlightForm;
