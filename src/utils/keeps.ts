const randomPersonData = {
    name: "John Doe",
    gender: "Male",
    height: "180 cm",
    weight: "75 kg",
    allergiesAndSensitivities: {
        foodAllergies: ["Peanuts"],
        foodIntolerances: ["Lactose intolerance"]
    },
    medicalConditions: ["Diabetes", "High blood pressure"],
    medications: {
        prescriptionDrugs: [
            { name: "Insulin", dosage: "10 units", frequency: "Twice daily" }
        ],
        overTheCounterMeds: ["Aspirin"],
        dietarySupplements: ["Vitamin D"]
    },
    dietaryRestrictions: {
        religiousOrCultural: ["Vegetarian"],
        ethicalPreferences: ["Avoiding animal products"]
    },
    laboratoryTestResults: {
        bloodGlucoseLevels: "120 mg/dL",
        cholesterolLevels: "200 mg/dL",
        kidneyFunctionTests: "Normal",
        liverFunctionTests: "Normal"
    },
    nutritionalStatus: {
        dietaryIntake: "Balanced diet",
        nutrientDeficiencies: ["Vitamin B12"],
        nutritionalRiskFactors: ["High sodium intake"]
    },
    lifestyleFactors: {
        physicalActivityLevels: "Moderate",
        smokingStatus: "Non-smoker",
        alcoholConsumption: "Occasional"
    },
    personalPreferences: {
        foodPreferences: ["Italian cuisine", "Fruits"],
        cookingSkillsAndResources: "Intermediate cooking skills",
        culturalFoodPractices: ["Celebrating cultural festivals with traditional dishes"]
    },
    pastMedicalHistory: {
        previousSurgeriesOrHospitalizations: ["Appendectomy"],
        familyHistoryOfChronicDiseases: ["Heart disease"]
    },
    foodOfInterest: "Peanuts"
};

export const emptyPersonData = {
    name: "",
    gender: "",
    height: "",
    weight: "",
    allergiesAndSensitivities: {
        foodAllergies: [] as string[],
        foodIntolerances: [] as string[]
    },
    medicalConditions: [] as string[],
    medications: {
        prescriptionDrugs: [] as string[],
        overTheCounterMeds: [] as string[],
        dietarySupplements: [] as string[]
    },
    dietaryRestrictions: {
        religiousOrCultural: [] as string[],
        ethicalPreferences: [] as string[]
    },
    laboratoryTestResults: {
        bloodGlucoseLevels: "",
        cholesterolLevels: "",
        kidneyFunctionTests: "",
        liverFunctionTests: ""
    },
    nutritionalStatus: {
        dietaryIntake: "",
        nutrientDeficiencies: [] as string[],
        nutritionalRiskFactors: [] as string[]
    },
    lifestyleFactors: {
        physicalActivityLevels: "",
        smokingStatus: "",
        alcoholConsumption: ""
    },
    personalPreferences: {
        foodPreferences: [] as string[],
        cookingSkillsAndResources: "",
        culturalFoodPractices: [] as string[]
    },
    pastMedicalHistory: {
        previousSurgeriesOrHospitalizations: [] as string[],
        familyHistoryOfChronicDiseases: [] as string[]
    },
    foodOfInterest: ""
};




type PersonData = {
    name: string;
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
        prescriptionDrugs?: { name: string; dosage: string; frequency: string }[];
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


// function filterNonEmptyKeys(personData) {
//     const filteredData = {};
//     for (const key in personData) {
//         if (personData.hasOwnProperty(key)) {
//             const value = personData[key];
//             if (value !== null && value !== "" && !Array.isArray(value)) {
//                 if (typeof value === "object") {
//                     const filteredNested = filterNonEmptyKeys(value);
//                     if (Object.keys(filteredNested).length > 0) {
//                         filteredData[key] = filteredNested;
//                     }
//                 } else {
//                     filteredData[key] = value;
//                 }
//             } else if (Array.isArray(value) && value.length > 0) {
//                 filteredData[key] = value.filter((item) => item !== "");
//             }
//         }
//     }
//     return filteredData;
// }

function filterNonEmptyKeys2(emptyPersonData: PersonData) {
    return JSON.parse(JSON.stringify(emptyPersonData, (key, value) => {
        if (value === null || value === "" || (Array.isArray(value) && value.length === 0)) {
            return undefined; // Exclude keys with null, empty strings, or empty arrays
        }
        return value; // Include other non-empty values
    }));
}
