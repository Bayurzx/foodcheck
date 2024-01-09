// context/Web5Context.tsx

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Web5, Record } from "@web5/api";
import protocolDefinition from "@/utils/profile.protocol.json"
import { PersonData, Person, Web5ContextType, Web5ProviderProps } from '@/types'
import { emptyPersonData } from '@/utils/keeps'

const Web5Context = createContext<Web5ContextType | undefined>(undefined);

export const useWeb5 = (): Web5ContextType => {
    const context = useContext(Web5Context);
    if (!context) {
        throw new Error('useWeb5 must be used within a Web5Provider');
    }
    return context;
};




export const Web5Provider = ({ children }: Web5ProviderProps) => {

    const [web5, setWeb5] = useState<Web5 | null>(null);
    const [did, setDid] = useState<string>("");
    const [persons, setPersons] = useState<Person[]>([]); // Define the type for the persons state
    const [personData, setPersonData] = useState<PersonData>(emptyPersonData); // Define the type for the persons state
    const [records, setRecords] = useState<Record[] | undefined>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { web5: _web5, did: _did } = await Web5.connect();
                setWeb5(_web5);
                setDid(_did);
                // Populate persons from DWN
                const { records: _records } = await _web5.dwn.records.query({
                    message: {
                        filter: {
                            schema: protocolDefinition.types.person.schema,
                        },
                    },
                });
                setRecords(_records);
                // Add entry to Person array
                if (records) {
                    const fetchedUserData: Person[] = records.map((record: any) => ({
                        record,
                        data: record.data,
                        id: record.id,
                    }));
                    setPersons(fetchedUserData);
                }
            } catch (error) {
                console.error('Error with Web5 data:', error);
            }
        };

        fetchData();
    }, []);


    const addUserData = async () => {
        try {
            // Create the record.
            if (!web5 || !personData) throw new Error('Web5 or personData not ready yet');

            const { record } = await web5.dwn.records.create({
                data: personData,
                message: {
                    schema: protocolDefinition.types.person.schema,
                    dataFormat: 'application/json',
                },
            });

            console.log('record', record);
        } catch (error) {
            console.error('Error adding user data:', error);
            // Handle error or re-throw to propagate it further
            throw error;
        }
    };

    const deleteUserData = async () => {
        try {
            if (!web5 || !records) throw new Error('Web5 or records not ready yet');
            await web5.dwn.records.delete({
                message: {
                    recordId: records[0]?.id,
                },
            });
        } catch (error) {
            console.error('Error deleting user data:', error);
            // Handle error or re-throw to propagate it further
            throw error;
        }
    };

    async function updateUserData() {
        try {
            if (!web5 || !records) throw new Error('Web5 or records not ready yet');

            // Read the record
            const { record } = await web5.dwn.records.read({
                message: {
                    filter: {
                        recordId: records[0]?.id,
                    },
                },
            });

            // Update the record
            await record.update({ data: personData });
        } catch (error) {
            console.error('Error updating user data:', error);
            // Handle error or re-throw to propagate it further
            throw error;
        }
    }

    const contextValue: Web5ContextType = {
        web5,
        persons,
        did,
        addUserData,
        deleteUserData,
        updateUserData,
        setPersonData,
        personData,
    };










    return <Web5Context.Provider value={contextValue}>{children}</Web5Context.Provider>;
};

export default Web5Context;
