"use client";

import React, { useContext, useEffect, useState } from 'react';
import { FaMinusCircle, FaPlusCircle, FaWindowClose } from 'react-icons/fa';
import Modal from 'react-modal';
import Web5Context from '@/context/Web5Context';



const DidModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [locations, setLocations] = useState<string[]>(['']); // State to store locations visited

    const { personData, setPersonData } = useContext(Web5Context) ?? {};
    console.log('useContext(Web5Context)', useContext(Web5Context))

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted!', locations);
    };


    const addLocationField = () => {
        const updatedLocations = [...locations, ''];
        setLocations(updatedLocations);
    };

    const removeLocationField = (indexToRemove: number) => {
        const updatedLocations = locations.filter((_, index) => index !== indexToRemove);
        setLocations(updatedLocations);
    };

    const handleLocationChange = (index: number, newValue: string) => {
        const updatedLocations = [...locations];
        updatedLocations[index] = newValue;
        setLocations(updatedLocations);
    };

    useEffect(() => {
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            if (setPersonData) {
                // Call setPersonData here
                setPersonData({ ...personData, [name]: value });
            } else {
                console.error('setPersonData is undefined');
            }
            
        };
        
    }, []);



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
                shouldCloseOnOverlayClick
            >
                <div className="fixed inset-0 flex items-center justify-center z-50 max-h-200 overflow-auto">
                    <div className="bg-gray-300 p-6 rounded-lg shadow-md text-black">
                        <div className="flex justify-between items-center">
                            <h2 className="text-gray-700 text-xl font-bold pt-2 mb-4">Modal Title Modal Title Modal Title </h2>
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 ml-10 rounded-full"
                                onClick={closeModal}
                            >
                                <FaWindowClose />
                            </button>
                        </div>


                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label htmlFor="name" className="block text-gray-700 font-bold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="border-2 border-gray-300 rounded-md p-1 w-full"
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email" className="block text-gray-700 font-bold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border-2 border-gray-300 rounded-md p-1 w-full"
                                />
                            </div>
                            <div className="overflow-y-auto max-h-60">
                                <div className="mb-2">
                                    <label htmlFor="Job Title" className="block text-gray-700 font-bold">
                                        Job Title
                                    </label>
                                    <input
                                        type="text"
                                        id="jobTitle"
                                        className="border-2 border-gray-300 rounded-md p-1 w-full"
                                    />
                                </div>


                                {locations.map((location, index) => (
                                    <div key={index} className="mb-2">
                                        <label htmlFor={`location-${index}`} className="block text-gray-700 font-bold">
                                            Location Visited {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`location-${index}`}
                                                value={location}
                                                onChange={(e) => handleLocationChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeLocationField(index)}
                                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                                            >
                                                <FaMinusCircle />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <div className="text-right">
                                    <button
                                        type="button"
                                        onClick={addLocationField}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>

                                </div>
                                <div className="w-20">
                                    {JSON.stringify(personData)}
                                </div>
                            </div>


                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mt-4 float-right"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default DidModal;
