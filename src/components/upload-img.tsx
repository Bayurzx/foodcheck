import { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react';
import Image from 'next/image'
import MarkdownPage from './markdown-page';

import { filterNonEmptyKeys, randomPersonData } from '@/utils/keeps';
import protocolDefinition from "@/utils/profile.protocol.json"
import { PersonData } from '@/types';
import CheckLoading from './check-loading';

const NEXT_PUBLIC_FOODCHECK_AI_API = process.env["NEXT_PUBLIC_FOODCHECK_AI_API"] ?? 'http://localhost:3002/upload'

const UploadImg = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [isDrag, setIsDrag] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 
    const [dataResponse, setDataResponse] = useState(null)

    const [userData, setUserData] = useState<PersonData | null>(null)

    const fileInputRef = useRef<HTMLInputElement>(null);
    const dropAreaRef = useRef<HTMLDivElement>(null);



    const handleImgSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true); 

        const confirmed = window.confirm("Do you really want to submit?");

        if (confirmed) {
            // Continue with your form submission logic here...


            const file = fileInputRef.current?.files?.[0];

            if (file) {
                const formData = new FormData();
                formData.append('image_file', file);

                const objectData = filterNonEmptyKeys(userData)
                console.log('objectData', objectData)

                formData.append('json_data', JSON.stringify(objectData));

                try {
                    const response = await fetch(NEXT_PUBLIC_FOODCHECK_AI_API, {
                        method: 'POST',
                        body: formData,
                    });

                    if (response.ok) {
                        console.log('Image uploaded successfully!');
                        const data = await response.json();
                        console.log(data); // Log the JSON data returned by the server
                        setDataResponse(data.text)
                        // Reset the image preview after successful upload
                        setImageUrl('');

                        console.log('Form submitted!');
                    } else {
                        console.error('Failed to upload image.');
                    }
                } catch (error) {
                    console.error('Error uploading image:', error);
                } finally {
                    setIsLoading(false); 
                    globalThis.scrollTo(0, 0)

                }
            } else {
                alert("No file yet!")
                setIsLoading(false); 
                globalThis.scrollTo(0, 0)

            }

        } else {
            console.log('Submission cancelled');
            setIsLoading(false); 
            globalThis.scrollTo(0, 0)

        }

    };


    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    };

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageUrl(reader.result as string);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);


        const file = e.dataTransfer.files?.[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageUrl(reader.result as string);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };



    // UseEffect Section will handle first level elements
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                // Populate persons from DWN
                const { Web5 } = await import('@web5/api');
                const { web5, did } = await Web5.connect({ sync: '5s' });

                const { records } = await web5.dwn.records.query({
                    message: {
                        filter: {
                            schema: protocolDefinition.types.person.schema,
                        },
                    },
                });

                const userData_ = await (records?.[0]?.data.json())
                console.log('records2', userData_)
                setUserData(userData_)

            } catch (error) {
                console.error('Error with Web5 data:', error);
            } finally {
                setIsLoading(false)
                globalThis.scrollTo(0, 0)

            }
        };

        fetchData();

    }, []);

    if (!userData) {
        return (
            <div className="flex justify-center items-center mt-16">Create Your Health DID below</div>
        )
    }




    return (
        <>
            { isLoading && <CheckLoading /> }
            {dataResponse && <MarkdownPage dataResponse={dataResponse} />}

            <form action="" onSubmit={handleImgSubmit}>
                <div className="m-2">
                    <p className="block text-gray-700 font-bold"></p>
                    <input
                        alt=""
                        type="file"
                        accept="image/*"
                        onChange={handleFileInputChange}
                        id="file-upload"
                        ref={fileInputRef}

                    />
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        ref={dropAreaRef}
                        style={{ border: '2px dashed #aaa', padding: '20px', textAlign: 'center', cursor: 'pointer' }}

                    >
                        <label htmlFor="file-upload">Drag & drop or click to select an image (less than 10mb)</label>
                        {imageUrl ? (
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Image src={imageUrl} alt="Consumables image" width={600} height={0} />
                            </div>
                        ) : (
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <label htmlFor="file-upload">
                                    {isDrag ? (

                                        <Image src={'/cloud-eating.gif'} alt="user image" width={600} height={0} />
                                    ) : (

                                        <Image src={'/feed-cloud.png'} alt="user image" width={600} height={0} />
                                    )}
                                </label>

                            </div>
                        )}
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 mt-4 float-right"
                    disabled={isLoading} 
                >
                    {isLoading ? 'Loading...' : 'Submit'}
                </button>

            </form>
        </>
    );
}

export default UploadImg;