import React, { useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
    const dialogRef = useRef(null);

    // Close the modal when clicking outside
    const handleOutsideClick = (event) => {
        if (dialogRef.current && !dialogRef.current.contains(event.target)) {
            onClose();
        }
    };

    return (
        <>

            {
                isOpen && (
                    <div
                        onClick={handleOutsideClick}
                        className="h-full w-full fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <dialog
                            ref={dialogRef}
                            open
                            className={`bg-[#1E2836] text-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6 relative transform transition-transform duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                                }`}
                        >
                            <div>{children}</div>
                            {/* <div className="flex justify-end mt-4">
                                <button
                                    onClick={onClose}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
                                >
                                    Close
                                </button>
                            </div> */}
                        </dialog>
                    </div>
                )
            }
        </>
    );
};

export default Modal;
