import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const Modal2 = ({ open, close, children, isOpen }) => {

    return (
        <div>
            <Dialog open={isOpen} as="div" className="relative z-50 bg-opacity-100 bg-black focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black bg-opacity-60 backdrop-blur-sm">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Dialog.Panel
                            transition
                            className="w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            {children}
                        </Dialog.Panel>
                    </div>
                </div>
            </Dialog>

        </div>
    );
};

export default Modal2;