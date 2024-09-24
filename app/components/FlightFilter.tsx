import React, { useState } from 'react';

const FlightFilter = () => {
    const [sortBy, setSortBy] = useState('Lowest Price');
    const [arrivalTime, setArrivalTime] = useState('');
    const [stops, setStops] = useState('');
    const [airlines, setAirlines] = useState<string[]>([]);

    // Airlines tip tanımlaması
    type AirlineProps = {
        name: string;
        price: number;
    };

    // Airlines veri seti tipi: AirlineProps[] olarak güncellenmiştir.
    const airlinesData: AirlineProps[] = [
        { name: 'Alitalia', price: 230 },
        { name: 'Lufthansa', price: 230 },
        { name: 'Air France', price: 230 },
        { name: 'Brussels Airlines', price: 230 },
        { name: 'Air Italy', price: 230 },
        { name: 'Siberia', price: 230 },
    ];

    const handleAirlineChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAirlines((prev) =>
            prev.includes(value)
                ? prev.filter((airline) => airline !== value)
                : [...prev, value]
        );
    };

    return (
        <div className="bg-purple-50 p-6 pt-0 w-64">
            <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700">Sort by:</label>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="mt-1 w-full p-2 border rounded-md"
                >
                    <option value="Lowest Price">Lowest Price</option>
                    <option value="Highest Price">Highest Price</option>
                </select>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold text-gray-700">Arrival Time</h3>
                <div className="flex flex-col space-y-2 mt-2">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="arrivalTime"
                            value="5:00 AM - 11:59 AM"
                            checked={arrivalTime === '5:00 AM - 11:59 AM'}
                            onChange={(e) => setArrivalTime(e.target.value)}
                            className="form-radio text-purple-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">5:00 AM - 11:59 AM</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="arrivalTime"
                            value="12:00 PM - 5:59 PM"
                            checked={arrivalTime === '12:00 PM - 5:59 PM'}
                            onChange={(e) => setArrivalTime(e.target.value)}
                            className="form-radio text-purple-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">12:00 PM - 5:59 PM</span>
                    </label>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold text-gray-700">Stops</h3>
                <div className="flex flex-col space-y-2 mt-2">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="stops"
                            value="Nonstop"
                            checked={stops === 'Nonstop'}
                            onChange={(e) => setStops(e.target.value)}
                            className="form-radio text-purple-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">Nonstop</span>
                        <span className="ml-auto text-gray-600">$230</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="stops"
                            value="1 Stop"
                            checked={stops === '1 Stop'}
                            onChange={(e) => setStops(e.target.value)}
                            className="form-radio text-purple-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">1 Stop</span>
                        <span className="ml-auto text-gray-600">$230</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="stops"
                            value="2+ Stops"
                            checked={stops === '2+ Stops'}
                            onChange={(e) => setStops(e.target.value)}
                            className="form-radio text-purple-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">2+ Stops</span>
                        <span className="ml-auto text-gray-600">$230</span>
                    </label>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-semibold text-gray-700">Airlines Included</h3>
                <div className="flex flex-col space-y-2 mt-2">
                    {airlinesData.map((airline) => (
                        <label key={airline.name} className="flex items-center">
                            <input
                                type="checkbox"
                                value={airline.name}
                                checked={airlines.includes(airline.name)}
                                onChange={handleAirlineChange}
                                className="form-checkbox text-purple-600"
                            />
                            <span className="ml-2 text-sm text-gray-700">{airline.name}</span>
                            <span className="ml-auto text-gray-600">${airline.price}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FlightFilter;
