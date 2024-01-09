'use client';

import { ReactNode, useState, useEffect } from 'react';
import { Web5, Record } from "@web5/api";
import protocolDefinition from "@/utils/profile.protocol.json"
import Image from "next/image";

import {
    FaHome,
    FaRegListAlt,
    FaUserAlt,
    FaEllipsisH,
} from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";
import styles from '@/styling/sidebar.module.css'; // Import your CSS module
import SidebarToggle from './sidebar-toggle';
import { PersonData } from '@/types';


interface NavItemProps {
    icon: ReactNode; // ReactNode is a type that represents a React component or JSX element
    label: string;
    link: string;
}

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [myWeb5, setMyWeb5] = useState<Web5 | null>(null);
    const [myDid, setMyDid] = useState<string>("");
    const [userData, setUserData] = useState<PersonData | null>(null)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar state
    };


    useEffect(() => {

        const initWeb5 = async () => {
            // @ts-ignore
            // const { Web5 } = await import('@web5/api/browser');

            try {
                const { web5, did } = await Web5.connect({ sync: '5s' });
                setMyWeb5(web5);
                setMyDid(did);
                console.log(web5);
                if (web5 && did) {
                    console.log('Web5 initialized');
                    // await configureProtocol(web5, did);
                    const { records } = await web5.dwn.records.query({
                        message: {
                            filter: {
                                schema: protocolDefinition.types.person.schema,
                            },
                        },
                    });
                    const userData_ = await (records?.[0]?.data.json())
                    console.log('records', userData_)
                    setUserData(userData_)
                }
            } catch (error) {
                console.error('Error initializing Web5:', error);
            }
        };

        initWeb5();


    }, [])

    const session = {
        user: {
            image: "https://www.clker.com/cliparts/h/z/Z/5/f/x/100px-coffee-cup-hi.png",
            name: "AB"
        }
    }

    const NavItem: React.FC<NavItemProps> = ({ icon, label, link }) => {

        return (
            <a href={link} target={label === "Update" || label === "Profile" ? "_blank" : "_self"}>
                <div className="mb-2 hover:bg-gray-200 rounded-full py-2 px-6 flex items-center space-x-2">
                    {icon}

                    <span>{label}</span>
                </div>
            </a>
        );
    }

    return (
        <>
        <SidebarToggle isSidebarOpen = {isSidebarOpen} toggleSidebar = {toggleSidebar} />
            <div className={`${styles.sidebar}  ${isSidebarOpen ? styles.show : ""} flex-none bg-gray-800 text-white p-4 overflow-y-auto`}>
            <div className="flex flex-col items-center">
                <VscGithubAlt className="text-gray-200 text-4xl mb-4" />

                {userData?.image ? (<Image
                    width={200}
                    height={0}
                    className={`rounded-full sidebarImg ${styles.sidebarImg}`}
                    src={userData?.image}
                    alt="User profile"
                />) : (
                    <Image src={"/placeholder.gif"} width={200} height={0} alt="User Profile Placeholder" />
                )}


                {/* {session?.user?.image && <img
                    className={`rounded-full sidebarImg ${styles.sidebarImg}`}
                    src={session?.user?.image}
                    alt="User profile"
                />} */}


                <nav className="mb-4">
                    <hr />
                    <h2
                        style={{
                            padding: "12px",
                            paddingTop: "50px",
                            fontSize: "20px",
                            fontWeight: "bold"
                        }}

                    >
                        👩🏾‍⚕️ Health DID 💗
                        <br />
                    </h2>

                    <hr />
                    <h2
                        style={{
                            padding: "12px",
                            paddingTop: "50px",
                            fontSize: "20px",
                            fontWeight: "bold"
                        }}

                    >
                            Hello {userData?.name?.split(' ')[0]} 👋🏾
                    </h2>
                    <br />
                    <hr />
                    <br />
                    <NavItem link={"#"} icon={<FaHome className="text-xl" />} label="Home" />

                    <NavItem link={"#"} icon={<FaRegListAlt className="text-xl" />} label="Update" />
                    <NavItem link={"#"} icon={<FaUserAlt className="text-xl" />} label="View" />
                    <NavItem link={"#"} icon={<FaEllipsisH className="text-xl" />} label="Learn More" />
                </nav>
                <button onClick={() => ""} className="w-full bg-red-500 text-white rounded-full py-3 font-bold">
                    Delete
                </button>

            </div>
        </div>
        </>

    )
}

export default Sidebar;