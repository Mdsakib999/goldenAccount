import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [message, setMessage] = useState('Loading shop metadata...');

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage('Waiting for subscribe...');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="h-screen w-full bg-[#442FD4] flex pt-16 justify-center">
            <div className="flex  justify-center text-2xl gap-4 font-semibold text-white">
                <div className="w-12 h-12 border-6 border-t-4 border-t-orange border-white rounded-full animate-spin mb-8"></div>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Loader;
