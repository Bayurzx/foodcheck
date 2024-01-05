import { Web5, Record } from "@web5/api";
import { ReactNode } from 'react'

export type PersonData = {
    name?: string;
    gender?: string;
    jobTitle?: string;
    birthDate?: string;
    height?: string;
    weight?: string;
    image?: string;
    allergiesAndSensitivities?: {
        foodAllergies?: string[];
        foodIntolerances?: string[];
    };
    medicalConditions?: string[];
    medications?: {
        prescriptionDrugs?: string[];
        overTheCounterMeds?: string[];
        dietarySupplements?: string[];
    };
    anthropometricData?: {
        height?: string;
        weight?: string;
        bodyMassIndex?: string;
    };
    dietaryRestrictions?: {
        religiousOrCultural?: string[];
        ethicalPreferences?: string[];
    };
    laboratoryTestResults?: {
        bloodGlucoseLevels?: string;
        cholesterolLevels?: string;
        kidneyFunctionTests?: string;
        liverFunctionTests?: string;
    };
    nutritionalStatus?: {
        dietaryIntake?: string;
        nutrientDeficiencies?: string[];
        nutritionalRiskFactors?: string[];
    };
    lifestyleFactors?: {
        physicalActivityLevels?: string;
        smokingStatus?: string;
        alcoholConsumption?: string;
    };
    personalPreferences?: {
        foodPreferences?: string[];
        cookingSkillsAndResources?: string;
        culturalFoodPractices?: string[];
    };
    pastMedicalHistory?: {
        previousSurgeriesOrHospitalizations?: string[];
        familyHistoryOfChronicDiseases?: string[];
    };
};

export type Person = {
    record: Record;
    data: PersonData;
    id: string;
};

export type Web5ContextType = {
    web5: Web5 | null;
    persons: Person[];
    did: string;
    addUserData: () => void;
    deleteUserData: () => void;
    updateUserData: () => void;
    setPersonData: React.Dispatch<React.SetStateAction<PersonData>>
    personData: PersonData;
};

export type Web5ProviderProps = {
    children: ReactNode;
};
