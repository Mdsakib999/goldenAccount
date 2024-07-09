

const Tooltip = ({ message, children, availableInStock }) => {
    return (
        <div className="group relative flex w-fit flex-col items-center justify-center">
            {children}
            <div className="absolute left-36 bottom-full mb-2 transform -translate-x-1/2 scale-0 transition-all duration-300 group-hover:scale-100">
                <div className="flex flex-col items-center">
                    <div className="relative">

                        <div className={`whitespace-nowrap overflow-hidden rounded bg-gray-800 px-3 py-2 text-center text-sm  ${availableInStock == 0 ? 'text-red-600' : 'text-[#6366F1]'} shadow-lg`}>
                            {message}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tooltip;