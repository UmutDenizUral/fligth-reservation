'use client';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FligthForm from './components/FligthForm';
import FligthCard from './components/FligthCard';
import SideBar from './components/SideBar';
import FlightFilter from './components/FlightFilter';

const HomePage = () => {
  const [flights, setFlights] = useState([]); // Uçuş verilerini saklayacak state
  return (
    <div className="min-h-screen bg-purple-50">
      <div className="container px-4 mx-auto py-8 grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-9 ">
          {/* FlightForm bileşenine setFlights fonksiyonunu prop olarak gönderiyoruz */}
          <FligthForm setFlights={setFlights} />
          <div className="mt-8 grid grid-cols-12 md:flex md:gap-2 ">
            <div className='col-span-12 md:flex-grow max-h-[550px] overflow-y-auto pr-1'>
              {flights.length > 0 ? (
                flights.map((flight, index) => (
                  <FligthCard key={index} flight={flight} />
                ))
              ) : (
                <p className='p-2 bg-white rounded-md '>No flights available. Please select destinations and date</p>
              )}
            </div>
            {/* FlightFilter sadece görüntü için eklenmiştir */}
            <div className='col-span-12 mt-4 md:mt-0'><FlightFilter />
            </div>
          </div>
        </div>
        <div className=" col-span-12 lg:col-span-3">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
