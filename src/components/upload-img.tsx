import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import Image from 'next/image'
import { randomPersonData } from '@/utils/keeps';

const NEXT_PUBLIC_FOODCHECK_AI_API = process.env["NEXT_PUBLIC_FOODCHECK_AI_API"] ?? 'http://localhost:3002/upload'

const UploadImg = () => {
    const [imageUrl, setImageUrl] = useState<string>('');
    const [isDrag, setIsDrag] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const dropAreaRef = useRef<HTMLDivElement>(null);



    const handleImgSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const confirmed = window.confirm("Do you really want to submit?");

        if (confirmed) {
            // Continue with your form submission logic here...


            const file = fileInputRef.current?.files?.[0];

            if (file) {
                const formData = new FormData();
                formData.append('image_file', file);

                const objectData = randomPersonData

                formData.append('json_data', JSON.stringify(objectData));

                try {
                    const response = await fetch(NEXT_PUBLIC_FOODCHECK_AI_API, {
                        method: 'POST',
                        body: formData,
                    });

                    if (response.ok) {
                        console.log('Image uploaded successfully!');
                        console.log('response', response)
                        // Reset the image preview after successful upload
                        setImageUrl('');

                        console.log('Form submitted!');
                    } else {
                        console.error('Failed to upload image.');
                    }
                } catch (error) {
                    console.error('Error uploading image:', error);
                }
            } else {
                alert("No file yet!")
            }

        } else {
            console.log('Submission cancelled');
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




    return (
        <>
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
                >
                    Submit
                </button>

            </form>
        </>
    );
}

export default UploadImg;