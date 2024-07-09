import React, { useEffect, useState, useRef } from 'react';
import {  MdEdit, MdSettings } from 'react-icons/md';
import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";

const Dot3 = () => {

    // 3 dot
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    // Click outside to close the menu
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className="relative " ref={menuRef}>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                <IoEllipsisHorizontalCircleOutline className="text-2xl text-gray-300" /> {/* Three-dot icon */}
            </button>
            {isOpen && (
                <div className="absolute left-4 top-8 mt-2 w-48 text-white shadow-lg z-50  bg-[#070825f9] rounded-md">
                    <div className="py-4 ">
                        <p className="font-bold px-4 py-2">Admin Menu</p>
                        <ul>
                            <li className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-700">
                                <MdEdit className="text-lg"/> Edit
                            </li>
                            <li className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-700">
                                <MdSettings className="text-lg"/> All settings
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dot3;