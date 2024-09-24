import React from 'react';

type SideCardProps = {
    text: string,
    backGroundImage: string,
    icon: React.ReactNode
};

const SideCard: React.FC<SideCardProps> = ({ text, icon, backGroundImage = '/default-image.jpeg' }) => {
    return (
        <div className="relative h-[250px] rounded-lg shadow-md overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${backGroundImage})`,

                }}
            />
            <div className="relative grid grid-row-12 h-full">
                <div className='row-span-11'></div>
                <div className='row-span-1 bg-black bg-opacity-30 px-2'>
                    <div className="text-white font-bold mx-auto">{icon}</div> 
                    <p className="text-white font-semibold mt-2">{text}</p>
                </div>
            </div>
        </div>
    );
};

export default SideCard;
