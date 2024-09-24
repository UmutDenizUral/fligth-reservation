import Image from 'next/image'
import React from 'react'
import SideCard from './SideCard'
import { IoCarOutline } from "react-icons/io5";
import { LuHotel } from "react-icons/lu";
import { FaUmbrellaBeach } from "react-icons/fa";

const SideBar = () => {
    return (
        <div className="space-y-4">
            <SideCard backGroundImage='/carrent.jpeg' text="Car Rentals" icon={<IoCarOutline size={24}  />} />
            <SideCard backGroundImage='/hotel.jpeg' text="Hotels" icon={<LuHotel size={24} />} />
            <SideCard backGroundImage='/holiday.jpeg' text="Travel Packages" icon={<FaUmbrellaBeach size={24} />} />
        </div>
    );
}

export default SideBar;
