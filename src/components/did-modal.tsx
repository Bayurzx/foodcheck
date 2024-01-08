"use client";

import React, { useContext, useEffect, useState } from 'react';
import { FaMinusCircle, FaPlusCircle, FaWindowClose, FaToggleOff, FaToggleOn, FaMehBlank, FaInfoCircle } from 'react-icons/fa';
import Modal from 'react-modal';
import Web5Context from '@/context/Web5Context';
import Image from 'next/image';
import { PersonData } from '@/types';

const hrColor = {
    height: "5px",
    backgroundColor: "#919191",
    border: "none",
    marginTop: "15px",
    marginBottom: "15px"
}

const DidModal = () => {
    // UseStates Section
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [foodAllergies, setFoodAllergies] = useState<string[]>(['']); 
    const [foodIntolerances, setFoodIntolerances] = useState<string[]>(['']); 
    const [medicalConditions, setMedicalConditions] = useState<string[]>(['']); 
    const [prescriptionDrugs, setPrescriptionDrugs] = useState<string[]>(['']); 
    const [overTheCounterMeds, setOverTheCounterMeds] = useState<string[]>(['']); 
    const [dietarySupplements, setDietarySupplements] = useState<string[]>(['']); 
    const [religiousOrCultural, setReligiousOrCultural] = useState<string[]>(['']); 
    const [ethicalPreferences, setEthicalPreferences] = useState<string[]>(['']); 
    const [nutrientDeficiencies, setNutrientDeficiencies] = useState<string[]>(['']); 
    const [nutritionalRiskFactors, setNutritionalRiskFactors] = useState<string[]>(['']); 
    const [foodPreferences, setFoodPreferences] = useState<string[]>(['']); 
    const [culturalFoodPractices, setCulturalFoodPractices] = useState<string[]>(['']); 
    const [previousSurgeriesOrHospitalizations, setPreviousSurgeriesOrHospitalizations] = useState<string[]>(['']); 
    const [familyHistoryOfChronicDiseases, setFamilyHistoryOfChronicDiseases] = useState<string[]>(['']); 

    const [unitH, setUnitH] = useState<'cm' | 'inches'>('cm');
    const [unitW, setUnitW] = useState<'kg' | 'lbs'>('kg');
    const [isDrag, setIsDrag] = useState(false);



    // Import Web5Context Section
    const { personData, setPersonData } = useContext(Web5Context) ?? {};

    // Modal Control Section
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const confirmed = window.confirm("Do you really want to submit?");

        if (confirmed) {
            console.log('Form submitted!', foodAllergies);
            // Continue with your form submission logic here...

            // Handle logic to calc BMI only if height and weight
        } else {
            console.log('Submission cancelled');
        }
    };




    // ********************************************
    // Food Allergies
    // ********************************************

    const addFoodAllergies = () => {
        const updatedFoodAllergies = [...foodAllergies, ''];
        console.log('foodAllergies', foodAllergies)
        setFoodAllergies(updatedFoodAllergies);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            allergiesAndSensitivities: {
                ...personData?.allergiesAndSensitivities,
                foodAllergies,
            },
        });

    };

    const removeFoodAllergiesField = (indexToRemove: number) => {
        const updatedFoodAllergies = foodAllergies.filter((_, index) => index !== indexToRemove);
        setFoodAllergies(updatedFoodAllergies);

        if (!setPersonData) return;
        setPersonData((personData) => ({
            ...personData,
            allergiesAndSensitivities: {
                ...personData?.allergiesAndSensitivities,
                foodAllergies,
            },
        }));

    };

    const handleFoodAllergyChange = (index: number, newValue: string) => {
        const updatedFoodAllergies = [...foodAllergies];
        updatedFoodAllergies[index] = newValue;
        console.log('index, newValue', index, newValue)
        setFoodAllergies(updatedFoodAllergies);
    };


    // ********************************************
    // Food Intolerances
    // ********************************************

    const addFoodIntolerances = () => {
        const updatedFoodIntolerances = [...foodIntolerances, ''];
        console.log('foodIntolerances', foodIntolerances)
        setFoodIntolerances(updatedFoodIntolerances);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            allergiesAndSensitivities: {
                ...personData?.allergiesAndSensitivities,
                foodIntolerances,
            },
        });

    };

    const removeFoodIntolerancesField = (indexToRemove: number) => {
        const updatedFoodIntolerances = foodIntolerances.filter((_, index) => index !== indexToRemove);
        setFoodIntolerances(updatedFoodIntolerances);

        if (!setPersonData) return;
        setPersonData((personData) => ({
            ...personData,
            allergiesAndSensitivities: {
                ...personData?.allergiesAndSensitivities,
                foodIntolerances,
            },
        }));

    };

    const handleFoodIntolerancesChange = (index: number, newValue: string) => {
        const updatedFoodIntolerances = [...foodIntolerances];
        updatedFoodIntolerances[index] = newValue;
        console.log('index, newValue', index, newValue)
        setFoodIntolerances(updatedFoodIntolerances);
    };


    // ********************************************
    // Medical Conditions
    // ********************************************

    const addMedicalConditions = () => {
        const updatedMedicalConditions = [...medicalConditions, ''];
        console.log('medicalConditions', medicalConditions)
        setMedicalConditions(updatedMedicalConditions);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            medicalConditions: medicalConditions
        });

    };

    const removeMedicalConditionsField = (indexToRemove: number) => {
        const updatedMedicalConditions = medicalConditions.filter((_, index) => index !== indexToRemove);
        setMedicalConditions(updatedMedicalConditions);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            medicalConditions: medicalConditions
        });

    };

    const handleMedicalConditionsChange = (index: number, newValue: string) => {
        const updatedMedicalConditions = [...medicalConditions];
        updatedMedicalConditions[index] = newValue;
        console.log('index, newValue', index, newValue)
        setMedicalConditions(updatedMedicalConditions);
    };









    // ********************************************
    // Prescription Drugs
    // ********************************************

    const addPrescriptionDrugs = () => {
        const updatedPrescriptionDrugs = [...prescriptionDrugs, ''];
        console.log('prescriptionDrugs', prescriptionDrugs)
        setPrescriptionDrugs(updatedPrescriptionDrugs);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            medications: {
                ...personData?.medications,
                prescriptionDrugs,
            },
        });

    };

    const removePrescriptionDrugsField = (indexToRemove: number) => {
        const updatedPrescriptionDrugs = prescriptionDrugs.filter((_, index) => index !== indexToRemove);
        setPrescriptionDrugs(updatedPrescriptionDrugs);

        if (!setPersonData) return;
        setPersonData((personData) => ({
            ...personData,
            medications: {
                ...personData?.medications,
                prescriptionDrugs,
            },
        }));

    };

    const handlePrescriptionDrugsChange = (index: number, newValue: string) => {
        const updatedPrescriptionDrugs = [...prescriptionDrugs];
        updatedPrescriptionDrugs[index] = newValue;
        console.log('index, newValue', index, newValue)
        setPrescriptionDrugs(updatedPrescriptionDrugs);
    };


    // ********************************************
    // Over The Counter Meds
    // ********************************************

    const addOverTheCounterMeds = () => {
        const updatedOverTheCounterMeds = [...overTheCounterMeds, ''];
        console.log('overTheCounterMeds', overTheCounterMeds)
        setOverTheCounterMeds(updatedOverTheCounterMeds);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            medications: {
                ...personData?.medications,
                overTheCounterMeds,
            },
        });

    };

    const removeOverTheCounterMedsField = (indexToRemove: number) => {
        const updatedOverTheCounterMeds = overTheCounterMeds.filter((_, index) => index !== indexToRemove);
        setOverTheCounterMeds(updatedOverTheCounterMeds);

        if (!setPersonData) return;
        setPersonData((personData) => ({
            ...personData,
            medications: {
                ...personData?.medications,
                overTheCounterMeds,
            },
        }));

    };

    const handleOverTheCounterMedsChange = (index: number, newValue: string) => {
        const updatedOverTheCounterMeds = [...overTheCounterMeds];
        updatedOverTheCounterMeds[index] = newValue;
        console.log('index, newValue', index, newValue)
        setOverTheCounterMeds(updatedOverTheCounterMeds);
    };





    // *********************
    // Dietary Supplements
    // *********************

    const addDietarySupplements = () => {
        const updatedDietarySupplements = [...dietarySupplements, ''];
        console.log('dietarySupplements', dietarySupplements)
        setDietarySupplements(updatedDietarySupplements);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            medications: {
                ...personData?.medications,
                dietarySupplements,
            },
        });

    };

    const removeDietarySupplementsField = (indexToRemove: number) => {
        const updatedDietarySupplements = dietarySupplements.filter((_, index) => index !== indexToRemove);
        setDietarySupplements(updatedDietarySupplements);

        if (!setPersonData) return;
        setPersonData((personData) => ({
            ...personData,
            medications: {
                ...personData?.medications,
                dietarySupplements,
            },
        }));

    };

    const handleDietarySupplementsChange = (index: number, newValue: string) => {
        const updatedDietarySupplements = [...dietarySupplements];
        updatedDietarySupplements[index] = newValue;
        console.log('index, newValue', index, newValue)
        setDietarySupplements(updatedDietarySupplements);
    };



    // ********************************************
    // Dietary Restrictions (Religious or Cultural)
    // ********************************************

    const addReligiousOrCultural = () => {
        const updatedReligiousOrCultural = [...religiousOrCultural, ''];
        console.log('religiousOrCultural', religiousOrCultural)
        setReligiousOrCultural(updatedReligiousOrCultural);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            dietaryRestrictions: {
                ...personData?.dietaryRestrictions,
                religiousOrCultural,
            },
        });

    };

    const removeReligiousOrCulturalField = (indexToRemove: number) => {
        const updatedReligiousOrCultural = religiousOrCultural.filter((_, index) => index !== indexToRemove);
        setReligiousOrCultural(updatedReligiousOrCultural);

        if (!setPersonData) return;
        setPersonData((personData) => ({
            ...personData,
            dietaryRestrictions: {
                ...personData?.dietaryRestrictions,
                religiousOrCultural,
            },
        }));

    };

    const handleReligiousOrCulturalChange = (index: number, newValue: string) => {
        const updatedReligiousOrCultural = [...religiousOrCultural];
        updatedReligiousOrCultural[index] = newValue;
        console.log('index, newValue', index, newValue)
        setReligiousOrCultural(updatedReligiousOrCultural);
    };



    // ********************************************
    // Dietary Restrictions (Ethical Preferences)
    // ********************************************

    const addEthicalPreferences = () => {
        const updatedEthicalPreferences = [...ethicalPreferences, ''];
        console.log('ethicalPreferences', ethicalPreferences)
        setEthicalPreferences(updatedEthicalPreferences);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            dietaryRestrictions: {
                ...personData?.dietaryRestrictions,
                ethicalPreferences,
            },
        });

    };

    const removeEthicalPreferencesField = (indexToRemove: number) => {
        const updatedEthicalPreferences = ethicalPreferences.filter((_, index) => index !== indexToRemove);
        setEthicalPreferences(updatedEthicalPreferences);

        if (!setPersonData) return;
        setPersonData((personData) => ({
            ...personData,
            dietaryRestrictions: {
                ...personData?.dietaryRestrictions,
                ethicalPreferences,
            },
        }));

    };

    const handleEthicalPreferencesChange = (index: number, newValue: string) => {
        const updatedEthicalPreferences = [...ethicalPreferences];
        updatedEthicalPreferences[index] = newValue;
        console.log('index, newValue', index, newValue)
        setEthicalPreferences(updatedEthicalPreferences);
    };



    // ********************************************
    // Nutrient Deficiencies
    // ********************************************

    const addNutrientDeficiencies = () => {
        const updatedNutrientDeficiencies = [...nutrientDeficiencies, ''];
        console.log('nutrientDeficiencies', nutrientDeficiencies)
        setNutrientDeficiencies(updatedNutrientDeficiencies);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            nutritionalStatus: {
                ...personData?.nutritionalStatus,
                nutrientDeficiencies,
            },
        });

    };

    const removeNutrientDeficienciesField = (indexToRemove: number) => {
        const updatedNutrientDeficiencies = nutrientDeficiencies.filter((_, index) => index !== indexToRemove);
        setNutrientDeficiencies(updatedNutrientDeficiencies);

        if (!setPersonData) return;
        setPersonData((personData) => ({
            ...personData,
            nutritionalStatus: {
                ...personData?.nutritionalStatus,
                nutrientDeficiencies,
            },
        }));

    };

    const handleNutrientDeficienciesChange = (index: number, newValue: string) => {
        const updatedNutrientDeficiencies = [...nutrientDeficiencies];
        updatedNutrientDeficiencies[index] = newValue;
        console.log('index, newValue', index, newValue)
        setNutrientDeficiencies(updatedNutrientDeficiencies);
    };



    // ********************************************
    // Nutritional Risk Factors
    // ********************************************

    const addNutritionalRiskFactors = () => {
        const updatedNutritionalRiskFactors = [...nutritionalRiskFactors, ''];
        console.log('nutritionalRiskFactors', nutritionalRiskFactors)
        setNutritionalRiskFactors(updatedNutritionalRiskFactors);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            nutritionalStatus: {
                ...personData?.nutritionalStatus,
                nutritionalRiskFactors,
            },
        });

    };

    const removeNutritionalRiskFactorsField = (indexToRemove: number) => {
        const updatedNutritionalRiskFactors = nutritionalRiskFactors.filter((_, index) => index !== indexToRemove);
        setNutritionalRiskFactors(updatedNutritionalRiskFactors);

        if (!setPersonData) return;
        setPersonData((personData) => ({
            ...personData,
            nutritionalStatus: {
                ...personData?.nutritionalStatus,
                nutritionalRiskFactors,
            },
        }));

    };

    const handleNutritionalRiskFactorsChange = (index: number, newValue: string) => {
        const updatedNutritionalRiskFactors = [...nutritionalRiskFactors];
        updatedNutritionalRiskFactors[index] = newValue;
        console.log('index, newValue', index, newValue)
        setNutritionalRiskFactors(updatedNutritionalRiskFactors);
    };


    // ********************************************
    // Food Preferences
    // ********************************************

    const addFoodPreferences = () => {
        const updatedFoodPreferences = [...foodPreferences, ''];
        console.log('foodPreferences', foodPreferences)
        setFoodPreferences(updatedFoodPreferences);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            personalPreferences: {
                ...personData?.personalPreferences,
                foodPreferences,
            },
        });

    };

    const removeFoodPreferencesField = (indexToRemove: number) => {
        const updatedFoodPreferences = foodPreferences.filter((_, index) => index !== indexToRemove);
        setFoodPreferences(updatedFoodPreferences);

        if (!setPersonData) return;
        setPersonData((personData) => ({
            ...personData,
            personalPreferences: {
                ...personData?.personalPreferences,
                foodPreferences,
            },
        }));

    };

    const handleFoodPreferencesChange = (index: number, newValue: string) => {
        const updatedFoodPreferences = [...foodPreferences];
        updatedFoodPreferences[index] = newValue;
        console.log('index, newValue', index, newValue)
        setFoodPreferences(updatedFoodPreferences);
    };


    // ********************************************
    // Cultural Food Practices
    // ********************************************

    const addCulturalFoodPractices = () => {
        const updatedCulturalFoodPractices = [...culturalFoodPractices, ''];
        console.log('culturalFoodPractices', culturalFoodPractices)
        setCulturalFoodPractices(updatedCulturalFoodPractices);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            personalPreferences: {
                ...personData?.personalPreferences,
                culturalFoodPractices,
            },
        });

    };

    const removeCulturalFoodPracticesField = (indexToRemove: number) => {
        const updatedCulturalFoodPractices = culturalFoodPractices.filter((_, index) => index !== indexToRemove);
        setCulturalFoodPractices(updatedCulturalFoodPractices);

        if (!setPersonData) return;
        setPersonData((personData) => ({
            ...personData,
            personalPreferences: {
                ...personData?.personalPreferences,
                culturalFoodPractices,
            },
        }));

    };

    const handleCulturalFoodPracticesChange = (index: number, newValue: string) => {
        const updatedCulturalFoodPractices = [...culturalFoodPractices];
        updatedCulturalFoodPractices[index] = newValue;
        console.log('index, newValue', index, newValue)
        setCulturalFoodPractices(updatedCulturalFoodPractices);
    };



    // ********************************************
    // Previous Surgeries Or Hospitalizations
    // ********************************************

    const addPreviousSurgeriesOrHospitalizations = () => {
        const updatedPreviousSurgeriesOrHospitalizations = [...previousSurgeriesOrHospitalizations, ''];
        console.log('previousSurgeriesOrHospitalizations', previousSurgeriesOrHospitalizations)
        setPreviousSurgeriesOrHospitalizations(updatedPreviousSurgeriesOrHospitalizations);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            pastMedicalHistory: {
                ...personData?.pastMedicalHistory,
                previousSurgeriesOrHospitalizations,
            },
        });

    };

    const removePreviousSurgeriesOrHospitalizationsField = (indexToRemove: number) => {
        const updatedPreviousSurgeriesOrHospitalizations = previousSurgeriesOrHospitalizations.filter((_, index) => index !== indexToRemove);
        setPreviousSurgeriesOrHospitalizations(updatedPreviousSurgeriesOrHospitalizations);

        if (!setPersonData) return;
        setPersonData((personData) => ({
            ...personData,
            pastMedicalHistory: {
                ...personData?.pastMedicalHistory,
                previousSurgeriesOrHospitalizations,
            },
        }));

    };

    const handlePreviousSurgeriesOrHospitalizationsChange = (index: number, newValue: string) => {
        const updatedPreviousSurgeriesOrHospitalizations = [...previousSurgeriesOrHospitalizations];
        updatedPreviousSurgeriesOrHospitalizations[index] = newValue;
        console.log('index, newValue', index, newValue)
        setPreviousSurgeriesOrHospitalizations(updatedPreviousSurgeriesOrHospitalizations);
    };




    // ********************************************
    // Family History Of Chronic Diseases
    // ********************************************

    const addFamilyHistoryOfChronicDiseases = () => {
        const updatedFamilyHistoryOfChronicDiseases = [...familyHistoryOfChronicDiseases, ''];
        console.log('familyHistoryOfChronicDiseases', familyHistoryOfChronicDiseases)
        setFamilyHistoryOfChronicDiseases(updatedFamilyHistoryOfChronicDiseases);

        if (!setPersonData) return;
        setPersonData({
            ...personData,
            pastMedicalHistory: {
                ...personData?.pastMedicalHistory,
                familyHistoryOfChronicDiseases,
            },
        });

    };

    const removeFamilyHistoryOfChronicDiseasesField = (indexToRemove: number) => {
        const updatedFamilyHistoryOfChronicDiseases = familyHistoryOfChronicDiseases.filter((_, index) => index !== indexToRemove);
        setFamilyHistoryOfChronicDiseases(updatedFamilyHistoryOfChronicDiseases);

        if (!setPersonData) return;
        setPersonData((personData) => ({
            ...personData,
            pastMedicalHistory: {
                ...personData?.pastMedicalHistory,
                familyHistoryOfChronicDiseases,
            },
        }));

    };

    const handleFamilyHistoryOfChronicDiseasesChange = (index: number, newValue: string) => {
        const updatedFamilyHistoryOfChronicDiseases = [...familyHistoryOfChronicDiseases];
        updatedFamilyHistoryOfChronicDiseases[index] = newValue;
        console.log('index, newValue', index, newValue)
        setFamilyHistoryOfChronicDiseases(updatedFamilyHistoryOfChronicDiseases);
    };









    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        if (!setPersonData) return;

        if (name == "height") {
            setPersonData({
                ...personData,
                height: `${value} ${unitH}`,
            });
            return
        }

        if (name == "weight") {
            setPersonData({
                ...personData,
                weight: `${value} ${unitW}`,
            });
            return
        }

        setPersonData({
            ...personData,
            [name]: value,
        });
    };

    const toggleUnitHeight = () => {
        setUnitH(unitH === 'cm' ? 'inches' : 'cm');
        setUnitW(unitW === 'kg' ? 'lbs' : 'kg');
    };

    const toggleUnitWeight = () => {
        setUnitW(unitW === 'kg' ? 'lbs' : 'kg');
    };




    const handleFileInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files && event.target.files[0];
        if (file) {
            const binaryImage = await file.arrayBuffer();
            const base64Image = btoa(
                new Uint8Array(binaryImage).reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
            // setSelectedImage(`data:${file.type};base64,${base64Image}`);

            if (!setPersonData) return;
            setPersonData({
                ...personData,
                image: `data:${file.type};base64,${base64Image}`,
            });

        }
    };

    const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        const file = event.dataTransfer.files && event.dataTransfer.files[0];
        if (file) {
            const binaryImage = await file.arrayBuffer();
            const base64Image = btoa(
                new Uint8Array(binaryImage).reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
            // setSelectedImage(`data:${file.type};base64,${base64Image}`);

            if (!setPersonData) return;
            setPersonData({
                ...personData,
                image: `data:${file.type};base64,${base64Image}`,
            });

        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsDrag(true);
    };






    const handleNestedChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        key: "anthropometricData" | "laboratoryTestResults" | "nutritionalStatus" | "lifestyleFactors" | "personalPreferences"
    ) => {
        const { name, value } = event.target;

        // For nested object, destructure the object for the specific field
        if (!setPersonData) return;

        setPersonData((personData) => ({
            ...personData,
            [key]: {
                ...personData?.[key],
                [name]: value,
            },
        }));
    };































    // UseEffect Section will handle first level elements
    useEffect(() => {
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            if (!setPersonData) return;
            setPersonData({ ...personData, [name]: value });
            // setPersonData(personData => ({
            //     ...personData,
            //     [name]: value,
            // }));;
            setPersonData({
                ...personData,
                allergiesAndSensitivities: {
                    ...personData?.allergiesAndSensitivities,
                    [name]: value,
                },
            });

        };

    }, [setPersonData, personData]);



    // Main View
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
                                <sup
                                    className="text-white mt-1 ml-1 cursor-pointer"
                                    title="Your Name"
                                >
                                    <FaInfoCircle />
                                </sup>
                                <input
                                    type="text"
                                    id="name"
                                    className="border-2 border-gray-300 rounded-md p-1 w-full"
                                />
                            </div>
                            {/* <div className="mb-2">
                                <label htmlFor="email" className="block text-gray-700 font-bold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border-2 border-gray-300 rounded-md p-1 w-full"
                                />
                            </div> */}
                            <div className="overflow-y-auto max-h-60">

                                {/* Start Form Overflow */}
                                <div className="mb-2">
                                    <label htmlFor="Gender" className="block text-gray-700 font-bold">
                                        Gender
                                    </label>
                                    <input
                                        name='gender'
                                        value={personData?.gender ?? ""}
                                        onChange={handleChange}
                                        type="text"
                                        id="gender"
                                        className="border-2 border-gray-300 rounded-md p-1 w-full"
                                    />
                                </div>


                                <div className="mb-2">
                                    <label htmlFor="Job Title" className="block text-gray-700 font-bold">
                                        Job Title
                                    </label>
                                    <input
                                        name='jobTitle'
                                        value={personData?.jobTitle ?? ""}
                                        onChange={handleChange}
                                        type="text"
                                        id="jobTitle"
                                        className="border-2 border-gray-300 rounded-md p-1 w-full"
                                    />
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="birthDate" className="block text-gray-700 font-bold">
                                        Birth Date
                                    </label>
                                    <input
                                        name="birthDate"
                                        value={personData?.birthDate}
                                        onChange={handleChange}
                                        type="date"
                                        id="birthDate"
                                        className="border-2 border-gray-300 rounded-md p-1 w-full"
                                    />
                                </div>



                                <div className="mb-2">
                                    <label htmlFor="Height" className="block text-gray-700 font-bold">
                                        Height ({unitH})
                                    </label>

                                    <div className="flex justify-between items-center">
                                        <input
                                            name='height'
                                            value={parseFloat(personData?.height?.split(' ')[0] ?? '')}
                                            onChange={handleChange}
                                            type="number"
                                            id="height"
                                            className="border-2 border-gray-300 rounded-md p-1 w-full"
                                        />
                                        <button
                                            type="button"
                                            onClick={toggleUnitHeight}
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
                                            title="Toggle between Imperial and Metric systems. CLICK BUTTON FIRST BEFORE INPUT"
                                        >
                                            {"cm" == unitH ? <FaToggleOff /> : <FaToggleOn />}
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <label htmlFor="Weight" className="block text-gray-700 font-bold">
                                        Weight ({unitW})
                                    </label>

                                    <div className="flex justify-between items-center">
                                        <input
                                            name='weight'
                                            value={parseFloat(personData?.weight?.split(' ')[0] ?? '')}
                                            onChange={handleChange}
                                            type="number"
                                            id="weight"
                                            className="border-2 border-gray-300 rounded-md p-1 w-full"
                                        />
                                        <button
                                            type="button"
                                            /* onClick={toggleUnitWeight} */
                                            className="bg-grey-500 text-white font-bold py-2 px-4 rounded ml-2"
                                            disabled
                                        >
                                            {/* {"kg" == unitW ? <FaToggleOff /> : <FaToggleOn />} */}
                                            <FaMehBlank />
                                        </button>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <p className="block text-gray-700 font-bold">
                                        Add Profile Image
                                    </p>

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileInputChange}
                                        style={{ display: 'none' }}
                                        id="file-upload"
                                    />
                                    <div
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        style={{ border: '2px dashed #aaa', padding: '20px', textAlign: 'center', cursor: 'pointer' }}
                                    >
                                        <label htmlFor="file-upload">Drag & drop or click to select an image</label>
                                        {personData?.image ? (
                                            <div>
                                                <Image src={personData?.image} alt="user image" width={350} height={0} />
                                                {/* <img src={personData?.image} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} /> */}
                                            </div>
                                        ) : (

                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <label htmlFor="file-upload">
                                                    {isDrag ? (

                                                        <Image src={'/drag.gif'} alt="user image" width={150} height={0} />
                                                    ) : (

                                                        <Image src={'/drag.jpg'} alt="user image" width={150} height={0} />
                                                    )}
                                                </label>

                                                {/* <img src={personData?.image} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} /> */}
                                            </div>
                                        )}
                                    </div>


                                </div>
                                <hr style={hrColor} />





                                {/* ***************** */}
                                {/* Food Allergies */}
                                {/* ***************** */}
                                <p className="block text-gray-700 font-bold">
                                    Allergies and Sensitivities
                                </p>

                                <hr style={hrColor} />
                                {foodAllergies.map((foodAllergy, index) => (
                                    <div key={index} className="mb-2">
                                        <label htmlFor={`foodAllergy-${index}`} className="block text-gray-700 font-bold">
                                            Food Allergy {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`foodAllergy-${index}`}
                                                value={foodAllergy}
                                                onChange={(e) => handleFoodAllergyChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeFoodAllergiesField(index)}
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
                                        onClick={addFoodAllergies}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>


                                {/* ***************** */}
                                {/* Food Intolerances */}
                                {/* ***************** */}
                                {foodIntolerances.map((foodIntolerance, index) => (
                                    <div key={index} className="mb-2 mt-2">
                                        <label htmlFor={`foodIntolerance-${index}`} className="block text-gray-700 font-bold">
                                            Food Intolerance {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`foodIntolerance-${index}`}
                                                value={foodIntolerance}
                                                onChange={(e) => handleFoodIntolerancesChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeFoodIntolerancesField(index)}
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
                                        onClick={addFoodIntolerances}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>
                                <hr style={hrColor} />



                                {/* ******************************************** */}
                                {/* Medical Condition */}
                                {/* ******************************************** */}

                                {medicalConditions.map((medicalCondition, index) => (
                                    <div key={index} className="mb-2">
                                        <label htmlFor={`medicalCondition-${index}`} className="block text-gray-700 font-bold">
                                            Medical Condition {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`medicalCondition-${index}`}
                                                value={medicalCondition}
                                                onChange={(e) => handleMedicalConditionsChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeMedicalConditionsField(index)}
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
                                        onClick={addMedicalConditions}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>
                                <hr style={hrColor} />



                                {/* ***************** */}
                                {/* Medications */}
                                {/* ***************** */}
                                <p className="block text-gray-700 font-bold">
                                    Medications
                                </p>

                                <hr style={hrColor} />








                                {/* ***************** */}
                                {/* Prescription Drugs */}
                                {/* ***************** */}
                                {prescriptionDrugs.map((prescriptionDrug, index) => (
                                    <div key={index} className="mb-2">
                                        <label htmlFor={`prescriptionDrug-${index}`} className="block text-gray-700 font-bold">
                                            Prescription Drug {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`prescriptionDrug-${index}`}
                                                value={prescriptionDrug}
                                                onChange={(e) => handlePrescriptionDrugsChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removePrescriptionDrugsField(index)}
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
                                        onClick={addPrescriptionDrugs}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>
                                {/* <hr style={hrColor} /> */}


                                {/* ***************** */}
                                {/* Over The Counter Meds */}
                                {/* ***************** */}

                                {overTheCounterMeds.map((overTheCounterMed, index) => (
                                    <div key={index} className="mb-2 mt-2">
                                        <label htmlFor={`overTheCounterMed-${index}`} className="block text-gray-700 font-bold">
                                            Over The Counter Meds {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`overTheCounterMed-${index}`}
                                                value={overTheCounterMed}
                                                onChange={(e) => handleOverTheCounterMedsChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeOverTheCounterMedsField(index)}
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
                                        onClick={addOverTheCounterMeds}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>
                                {/* <hr style={hrColor} /> */}

                                {/* ******************* */}
                                {/* Dietary Supplements */}
                                {/* ******************* */}

                                {dietarySupplements.map((dietarySupplement, index) => (
                                    <div key={index} className="mb-2 mt-2">
                                        <label htmlFor={`dietarySupplement-${index}`} className="block text-gray-700 font-bold">
                                            Dietary Supplements {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`dietarySupplement-${index}`}
                                                value={dietarySupplement}
                                                onChange={(e) => handleDietarySupplementsChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeDietarySupplementsField(index)}
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
                                        onClick={addDietarySupplements}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>
                                <hr style={hrColor} />


                                {/* ***************** */}
                                {/* Dietary Restrictions */}
                                {/* ***************** */}
                                <p className="block text-gray-700 font-bold">
                                    Dietary Restrictions
                                </p>

                                <hr style={hrColor} />


                                {/* ******************************************** */}
                                {/* Dietary Restrictions (Religious or Cultural) */}
                                {/* ******************************************** */}

                                {religiousOrCultural.map((ReligiousOrCulture, index) => (
                                    <div key={index} className="mb-2">
                                        <label htmlFor={`ReligiousOrCulture-${index}`} className="block text-gray-700 font-bold">
                                            Dietary Restrictions (Religious or Cultural) {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`ReligiousOrCulture-${index}`}
                                                value={ReligiousOrCulture}
                                                onChange={(e) => handleReligiousOrCulturalChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeReligiousOrCulturalField(index)}
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
                                        onClick={addReligiousOrCultural}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>
                                {/* <hr style={hrColor} /> */}



                                {/* ******************************************** */}
                                {/* Dietary Restrictions (Ethical Preferences) */}
                                {/* ******************************************** */}

                                {ethicalPreferences.map((ethicalPreference, index) => (
                                    <div key={index} className="mb-2 mt-2">
                                        <label htmlFor={`ethicalPreference-${index}`} className="block text-gray-700 font-bold">
                                            Dietary Restrictions (Ethical Preferences) {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`ethicalPreference-${index}`}
                                                value={ethicalPreference}
                                                onChange={(e) => handleEthicalPreferencesChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeEthicalPreferencesField(index)}
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
                                        onClick={addEthicalPreferences}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>
                                <hr style={hrColor} />


                                {/* ***************** */}
                                {/* Laboratory Test Results */}
                                {/* ***************** */}
                                <p className="block text-gray-700 font-bold">
                                    Laboratory Test Results
                                </p>

                                <hr style={hrColor} />


                                {/* ******************************************** */}
                                {/* Blood Glucose Levels */}
                                {/* ******************************************** */}
                                <div className="mb-2">
                                    <label htmlFor="Blood Glucose Levels" className="block text-gray-700 font-bold">
                                        Blood Glucose Levels
                                    </label>
                                    <input
                                        name="bloodGlucoseLevels"
                                        value={personData?.laboratoryTestResults?.bloodGlucoseLevels ?? ''}
                                        onChange={(e) => handleNestedChange(e, 'laboratoryTestResults')}
                                        type="text"
                                        id="bloodGlucoseLevels"
                                        className="border-2 border-gray-300 rounded-md p-1 w-full"
                                    />
                                </div>


                                {/* ******************************************** */}
                                {/* Cholesterol Levels */}
                                {/* ******************************************** */}
                                <div className="mb-2">
                                    <label htmlFor="Cholesterol Levels" className="block text-gray-700 font-bold">
                                        Cholesterol Levels
                                    </label>
                                    <input
                                        name="cholesterolLevels"
                                        value={personData?.laboratoryTestResults?.cholesterolLevels ?? ''}
                                        onChange={(e) => handleNestedChange(e, 'laboratoryTestResults')}
                                        type="text"
                                        id="cholesterolLevels"
                                        className="border-2 border-gray-300 rounded-md p-1 w-full"
                                    />
                                </div>



                                {/* ******************************************** */}
                                {/* Kidney Function Tests */}
                                {/* ******************************************** */}
                                <div className="mb-2">
                                    <label htmlFor="Kidney Function Tests" className="block text-gray-700 font-bold">
                                        Kidney Function Tests
                                    </label>
                                    <input
                                        name="kidneyFunctionTests"
                                        value={personData?.laboratoryTestResults?.kidneyFunctionTests ?? ''}
                                        onChange={(e) => handleNestedChange(e, 'laboratoryTestResults')}
                                        type="text"
                                        id="kidneyFunctionTests"
                                        className="border-2 border-gray-300 rounded-md p-1 w-full"
                                    />
                                </div>


                                {/* ******************************************** */}
                                {/* Liver Function Tests */}
                                {/* ******************************************** */}
                                <div className="mb-2">
                                    <label htmlFor="Liver Function Tests" className="block text-gray-700 font-bold">
                                        Liver Function Tests
                                    </label>
                                    <input
                                        name="liverFunctionTests"
                                        value={personData?.laboratoryTestResults?.liverFunctionTests ?? ''}
                                        onChange={(e) => handleNestedChange(e, 'laboratoryTestResults')}
                                        type="text"
                                        id="liverFunctionTests"
                                        className="border-2 border-gray-300 rounded-md p-1 w-full"
                                    />
                                </div>


                                <hr style={hrColor} />

                                {/* ***************** */}
                                {/* Nutritional Status */}
                                {/* ***************** */}
                                <p className="block text-gray-700 font-bold">
                                    Nutritional Status
                                </p>

                                <hr style={hrColor} />


                                {/* ******************************************** */}
                                {/* Dietary Intake */}
                                {/* ******************************************** */}
                                <div className="mb-2">
                                    <label htmlFor="Dietary Intake" className="block text-gray-700 font-bold">
                                        Dietary Intake
                                    </label>
                                    <input
                                        name="dietaryIntake"
                                        value={personData?.nutritionalStatus?.dietaryIntake ?? ''}
                                        onChange={(e) => handleNestedChange(e, 'nutritionalStatus')}
                                        type="text"
                                        id="dietaryIntake"
                                        className="border-2 border-gray-300 rounded-md p-1 w-full"
                                    />
                                </div>




                                {/* ******************************************** */}
                                {/* Nutrient Deficiencies */}
                                {/* ******************************************** */}

                                {nutrientDeficiencies.map((nutrientDeficiency, index) => (
                                    <div key={index} className="mb-2">
                                        <label htmlFor={`nutrientDeficiency-${index}`} className="block text-gray-700 font-bold">
                                            Nutrient Deficiencies {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`nutrientDeficiency-${index}`}
                                                value={nutrientDeficiency}
                                                onChange={(e) => handleNutrientDeficienciesChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeNutrientDeficienciesField(index)}
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
                                        onClick={addNutrientDeficiencies}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>
                                {/* <hr style={hrColor} /> */}

                                {/* ******************************************** */}
                                {/* Nutritional Risk Factors */}
                                {/* ******************************************** */}

                                {nutritionalRiskFactors.map((nutritionalRiskFactor, index) => (
                                    <div key={index} className="mb-2 mt-2">
                                        <label htmlFor={`nutritionalRiskFactor-${index}`} className="block text-gray-700 font-bold">
                                            Nutritional Risk Factors {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`nutritionalRiskFactor-${index}`}
                                                value={nutritionalRiskFactor}
                                                onChange={(e) => handleNutritionalRiskFactorsChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeNutritionalRiskFactorsField(index)}
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
                                        onClick={addNutritionalRiskFactors}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>
                                <hr style={hrColor} />



                                {/* ***************** */}
                                {/* Lifestyle Factors */}
                                {/* ***************** */}
                                <p className="block text-gray-700 font-bold">
                                    Lifestyle Factors
                                </p>

                                <hr style={hrColor} />


                                {/* ******************************************** */}
                                {/* Physical Activity Levels */}
                                {/* ******************************************** */}
                                <div className="mb-2">
                                    <label htmlFor="Physical Activity Levels" className="block text-gray-700 font-bold">
                                        Physical Activity Levels
                                    </label>
                                    <input
                                        name="physicalActivityLevels"
                                        value={personData?.lifestyleFactors?.physicalActivityLevels ?? ''}
                                        onChange={(e) => handleNestedChange(e, 'lifestyleFactors')}
                                        type="text"
                                        id="physicalActivityLevels"
                                        className="border-2 border-gray-300 rounded-md p-1 w-full"
                                    />
                                </div>


                                {/* ******************************************** */}
                                {/* Smoking Status */}
                                {/* ******************************************** */}

                                <div className="mb-2">
                                    <label htmlFor="Smoking Status" className="block text-gray-700 font-bold">
                                        Smoking Status
                                    </label>
                                    <input
                                        name="smokingStatus"
                                        value={personData?.lifestyleFactors?.smokingStatus ?? ''}
                                        onChange={(e) => handleNestedChange(e, 'lifestyleFactors')}
                                        type="text"
                                        id="smokingStatus"
                                        className="border-2 border-gray-300 rounded-md p-1 w-full"
                                    />
                                </div>

                                {/* ******************************************** */}
                                {/* Alcohol Consumption */}
                                {/* ******************************************** */}
                                <div className="mb-2">
                                    <label htmlFor="Alcohol Consumption" className="block text-gray-700 font-bold">
                                        Alcohol Consumption
                                    </label>
                                    <input
                                        name="alcoholConsumption"
                                        value={personData?.lifestyleFactors?.alcoholConsumption ?? ''}
                                        onChange={(e) => handleNestedChange(e, 'lifestyleFactors')}
                                        type="text"
                                        id="alcoholConsumption"
                                        className="border-2 border-gray-300 rounded-md p-1 w-full"
                                    />
                                </div>

                                <hr style={hrColor} />

                                {/* ***************** */}
                                {/* Personal Preferences */}
                                {/* ***************** */}
                                <p className="block text-gray-700 font-bold">
                                    Personal Preferences
                                </p>

                                <hr style={hrColor} />

                                {/* ******************************************** */}
                                {/* Food Preferences */}
                                {/* ******************************************** */}

                                {foodPreferences.map((foodPreference, index) => (
                                    <div key={index} className="mb-2">
                                        <label htmlFor={`foodPreference-${index}`} className="block text-gray-700 font-bold">
                                            Food Preferences {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`foodPreference-${index}`}
                                                value={foodPreference}
                                                onChange={(e) => handleFoodPreferencesChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeFoodPreferencesField(index)}
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
                                        onClick={addFoodPreferences}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>
                                {/* <hr style={hrColor} /> */}


                                {/* ******************************************** */}
                                {/* Cooking Skills & Resources */}
                                {/* ******************************************** */}

                                <div className="mb-2 mt-2">
                                    <label htmlFor="Cooking Skills & Resources" className="block text-gray-700 font-bold">
                                        Cooking Skills & Resources
                                    </label>
                                    <input
                                        name="cookingSkillsAndResources"
                                        value={personData?.personalPreferences?.cookingSkillsAndResources ?? ''}
                                        onChange={(e) => handleNestedChange(e, 'personalPreferences')}
                                        type="text"
                                        id="cookingSkillsAndResources"
                                        className="border-2 border-gray-300 rounded-md p-1 w-full"
                                    />
                                </div>



                                {/* ******************************************** */}
                                {/* Cultural Food Practices */}
                                {/* ******************************************** */}

                                {culturalFoodPractices.map((culturalFoodPractice, index) => (
                                    <div key={index} className="mb-2">
                                        <label htmlFor={`culturalFoodPractice-${index}`} className="block text-gray-700 font-bold">
                                            Cultural Food Practices {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`culturalFoodPractice-${index}`}
                                                value={culturalFoodPractice}
                                                onChange={(e) => handleCulturalFoodPracticesChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeCulturalFoodPracticesField(index)}
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
                                        onClick={addCulturalFoodPractices}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>
                                <hr style={hrColor} />


                                {/* ***************** */}
                                {/* Past Medical History */}
                                {/* ***************** */}
                                <p className="block text-gray-700 font-bold">
                                    Past Medical History
                                </p>

                                <hr style={hrColor} />


                                {/* ******************************************** */}
                                {/* Previous Surgeries Or Hospitalizations */}
                                {/* ******************************************** */}

                                {previousSurgeriesOrHospitalizations.map((previousSurgeriesOrHospitalization, index) => (
                                    <div key={index} className="mb-2">
                                        <label htmlFor={`previousSurgeriesOrHospitalization-${index}`} className="block text-gray-700 font-bold">
                                            Previous Surgeries Or Hospitalizations {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`previousSurgeriesOrHospitalization-${index}`}
                                                value={previousSurgeriesOrHospitalization}
                                                onChange={(e) => handlePreviousSurgeriesOrHospitalizationsChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removePreviousSurgeriesOrHospitalizationsField(index)}
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
                                        onClick={addPreviousSurgeriesOrHospitalizations}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>
                                {/* <hr style={hrColor} /> */}




                                {/* ******************************************** */}
                                {/* Family History Of Chronic Diseases */}
                                {/* ******************************************** */}

                                {familyHistoryOfChronicDiseases.map((familyHistoryOfChronicDisease, index) => (
                                    <div key={index} className="mb-2 mt-2">
                                        <label htmlFor={`familyHistoryOfChronicDisease-${index}`} className="block text-gray-700 font-bold">
                                            Family History Of Chronic Diseases {index + 1}
                                        </label>
                                        <div className="flex justify-between items-center">
                                            <input
                                                type="text"
                                                id={`familyHistoryOfChronicDisease-${index}`}
                                                value={familyHistoryOfChronicDisease}
                                                onChange={(e) => handleFamilyHistoryOfChronicDiseasesChange(index, e.target.value)}
                                                className="border-2 border-gray-300 rounded-md p-1 w-full"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeFamilyHistoryOfChronicDiseasesField(index)}
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
                                        onClick={addFamilyHistoryOfChronicDiseases}
                                        className=" flex justify-between items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded"
                                    >
                                        <FaPlusCircle /> &nbsp; Add
                                    </button>
                                </div>
                                <hr style={hrColor} />










































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
