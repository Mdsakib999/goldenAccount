import React from 'react';

const Divider = ({ text }) => {
    return (
        <div className="flex items-center">
            <hr className="flex-grow border-t text-slate-400" />
            <span className="px-3 text-slate-400">
                {text}
            </span>
            <hr className="flex-grow border-t text-slate-400" />
        </div>
    );
};

export default Divider;