import React from 'react';

interface AircraftType {
    iataMain: string;
    iataSub: string;
}

interface PublicFlightState {
    flightStates: Array<any>; // flightStates'in yapısını bilmediğimiz için any kullanıyoruz
}

interface Route {
    destinations: Array<string>;
    eu: string;
    visa: boolean;
}

interface Flight {
    id: string;
    flightName: string;
    flightNumber: number;
    airlineCode: number;
    route: Route;
    estimatedLandingTime: string;
    scheduleDate: string;
    scheduleDateTime: string;
    scheduleTime: string;
    isOperationalFlight: boolean;
    aircraftType: AircraftType;
    publicFlightState: PublicFlightState;
}

interface FlightCardProps {
    flight: Flight;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center mb-4">
            <div>
                <h3 className="text-lg font-bold">{flight.flightName} ({flight.flightNumber})</h3>
                <p className="text-sm text-gray-500">Departure: {flight.scheduleDateTime}</p>
                <p className="text-sm text-gray-500">Route: {flight.route.destinations.join(', ')}</p>
            </div>
            <div className="text-center">
                <p className="text-sm text-gray-500">Estimated Landing: {flight.estimatedLandingTime}</p>
                <p className="text-sm text-gray-500">Airline Code: {flight.airlineCode}</p>
            </div>
            <div>
                <p className="text-sm text-gray-500">Aircraft: {flight.aircraftType.iataMain}-{flight.aircraftType.iataSub}</p>
                <p className="text-sm text-gray-500">Operational: {flight.isOperationalFlight ? 'Yes' : 'No'}</p>
            </div>
            <div className="text-right">
                <p className="font-bold text-lg">Flight Code: {flight.route.eu}</p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
                    Book Flight
                </button>
            </div>
        </div>
    );
};

export default FlightCard;
