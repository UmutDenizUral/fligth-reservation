'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Page = () => {
    const [data, setData] = useState<any>(null);
    const [arrival, setArrival] = useState<string>('');
    const [departure, setDeparture] = useState<string>('');
    const [fromDate, setFromDate] = useState<string>('');
    const [toDate, setToDate] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Formun default davranışını engelle

        try {
            const response = await axios.get('/api/test', {
                params: {
                    arrival,
                    departure,
                    fromDate,
                    toDate,
                },
            });
            setData(response.data); // Gelen veriyi state'e ata
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Flights</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Arrival:
                    <input
                        type="text"
                        value={arrival}
                        onChange={(e) => setArrival(e.target.value)}
                    />
                </label>
                <label>
                    Departure:
                    <input
                        type="text"
                        value={departure}
                        onChange={(e) => setDeparture(e.target.value)}
                    />
                </label>
                <label>
                    From Date:
                    <input
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                    />
                </label>
                <label>
                    To Date:
                    <input
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                    />
                </label>
                <button type="submit">Search Flights</button>
            </form>

            {/* data nesnesini JSON formatında göster */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Page;
