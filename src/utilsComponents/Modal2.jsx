import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

const Modal2 = ({ open, close, children, isOpen }) => {

    return (
        <div>
            <Dialog open={isOpen} as="div" className="relative z-10  focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            {children}

                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default Modal2;