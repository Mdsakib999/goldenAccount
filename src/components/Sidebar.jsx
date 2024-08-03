import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../redux/features/Auth/authSlice';

const Sidebar = ({ setOpen, open }) => {
    const dispatch = useDispatch()

    const Menus = [
        // { title: "Home", src: "Debt", link: '/' },
        { title: "Add Product", src: "Overview", link: '/dashbord/admin/add_item' },
        { title: "Menage product", src: "Transactions", link: '/dashbord/admin/manage_item' },
    ];
    
    const footerMenu = [
        { title: "Home", src: "Notifications", link: '/' },

    ]
    const handelLogOut = () => {
        dispatch(logOut())
    }

    return (
        <div className="flex overflow-y-auto border-l-2 ">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } bg-backgroundColor h-screen fixed top-0 left-0  p-5  pt-8  duration-300`}
            >
                <img
                    src="/assets/control.png"
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src="/assets/smiley.svg"
                        className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
                            }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Exploit Wise
                    </h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <Link
                            to={Menu.link}
                            key={index}>
                            <li
                                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-amber-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-8" : "mt-2"} ${index === 0 && "bg-light-white"
                                    } `}
                            >
                                <img src={`/assets/${Menu.src}.svg`} />
                                <span className={`${!open && "hidden"} origin-left duration-200`}>
                                    {Menu.title}
                                </span>
                            </li>
                        </Link>
                    ))}
                    <div className='absolute bottom-5'>
                        {footerMenu.map((Menu, index) => (
                            <Link
                                to={Menu.link}
                                key={index}>
                                <li
                                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-amber-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-8" : "mt-2"} ${index === 0 && "bg-light-white"
                                        } `}
                                >
                                    {/* <img src={`/assets/${Menu.src}.svg`} /> */}
                                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                                        {Menu.title}
                                    </span>
                                </li>
                            </Link>
                        ))}
                        <span onClick={handelLogOut} className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-amber-300 text-sm items-center gap-x-4 '>sign out</span>
                    </div>
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;
