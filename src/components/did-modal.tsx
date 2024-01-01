"use client";

import React, { useState } from 'react';
import Modal from 'react-modal';

const DidModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted!');
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Open Modal
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="Modal"
                overlayClassName="Overlay"
                ariaHideApp={false}
            >
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-gray-300 p-6 rounded-lg shadow-md">
                        <h2 className="text-gray-700 text-xl font-bold mb-4">Modal Title</h2>
                        <div className="text-right">
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border-2 border-gray-300 rounded-md p-2 w-full"
                                />
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default DidModal;
