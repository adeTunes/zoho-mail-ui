import React, { useState } from "react";
import SideLeftTwo from "./SideLeftTwo";
import { useNavigate } from "react-router-dom";
import Logo from "../images/mail-logo-safari.svg";

function SideLeft({ setTab, setTab2, setShowTab }) {
    const [bg, setBg] = useState("inbox");

    let navigate = useNavigate();

    const handleGroup = () => {
        setTab(true);
        setShowTab(2);
        navigate("/group");
    };

    const handleHomeStreams = () => {
        setTab2(true);
        setShowTab(3);
        setBg("home_streams");
        navigate("/streams/home");
    };
    const handleUnreadStreams = () => {
        setTab2(true);
        setShowTab(3);
        setBg("unread_streams");
        navigate("/streams/unread");
    };

    const handlePageNavigation = (tab, link, name) => {
        setShowTab(tab);
        navigate(link);
        setBg(name);
    };
    return (
        <div className="col-left">
            <div className=" p-[20px]">
                <img src={Logo} alt="" className="h-[20px]" />
            </div>
            <div className="grid grid-cols-[auto_auto] overflow-auto">
                <div className=" overflow-auto">
                    <ul className=" flex flex-col gap-[15px]">
                        <li className="pl-[3px] pt-[8px] pb-[6px] border-l-2 border-l-[#5e93ff] border-solid">
                            <div className=" flex flex-col items-center gap-[2px]">
                                <button className="bg-[#2c66dd] p-[5px] rounded-[3px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 12 12"
                                        fill="none">
                                        <path
                                            d="M9.5 2H2.5C2.10218 2 1.72064 2.15804 1.43934 2.43934C1.15804 2.72064 1 3.10218 1 3.5V8.5C1 8.89782 1.15804 9.27936 1.43934 9.56066C1.72064 9.84196 2.10218 10 2.5 10H9.5C9.89782 10 10.2794 9.84196 10.5607 9.56066C10.842 9.27936 11 8.89782 11 8.5V3.5C11 3.10218 10.842 2.72064 10.5607 2.43934C10.2794 2.15804 9.89782 2 9.5 2V2ZM9.5 3L6.25 5.235C6.17399 5.27888 6.08777 5.30199 6 5.30199C5.91223 5.30199 5.82601 5.27888 5.75 5.235L2.5 3H9.5Z"
                                            fill="#fff"
                                        />
                                    </svg>
                                </button>
                                <p className=" text-white text-[11px]">Mail</p>
                            </div>
                        </li>
                        <li className="pl-[3px] pt-[8px] pb-[6px] border-l-2 border-l-[#242933] border-solid">
                            <div className=" flex flex-col items-center gap-[2px] opacity-[.7]">
                                <button className="bg-[#8f55cc] p-[5px] rounded-[3px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 36 36">
                                        <path
                                            fill="white"
                                            d="M32.25 6h-4v3a2.2 2.2 0 1 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6ZM10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z"
                                            className="clr-i-solid clr-i-solid-path-1"
                                        />
                                        <path
                                            fill="white"
                                            d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                            className="clr-i-solid clr-i-solid-path-2"
                                        />
                                        <path
                                            fill="white"
                                            d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                            className="clr-i-solid clr-i-solid-path-3"
                                        />
                                        <path fill="none" d="M0 0h36v36H0z" />
                                    </svg>
                                </button>
                                <p className=" text-white text-[11px]">
                                    Calendar
                                </p>
                            </div>
                        </li>
                        <li className="pl-[3px] pt-[8px] pb-[6px] border-l-2 border-l-[#242933] border-solid">
                            <div className=" flex flex-col items-center gap-[2px] opacity-[.7]">
                                <button className="bg-[#1b8855] p-[5px] rounded-[3px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 48 48">
                                        <mask id="svgIDa">
                                            <path
                                                fill="#fff"
                                                fillRule="evenodd"
                                                stroke="#fff"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="4"
                                                d="m4 24l5-5l10 10L39 9l5 5l-25 25L4 24Z"
                                                clipRule="evenodd"
                                            />
                                        </mask>
                                        <path
                                            fill="white"
                                            d="M0 0h48v48H0z"
                                            mask="url(#svgIDa)"
                                        />
                                    </svg>
                                </button>
                                <p className=" text-white text-[11px]">Tasks</p>
                            </div>
                        </li>
                        <li className="pl-[3px] pt-[8px] pb-[6px] border-l-2 border-l-[#242933] border-solid">
                            <div className=" flex flex-col items-center gap-[2px] opacity-[.7]">
                                <button className="bg-[#b36f47] p-[5px] rounded-[3px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="white"
                                            d="M4 13q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h16q.425 0 .712.287q.288.288.288.713t-.288.712Q20.425 13 20 13Zm0 5q-.425 0-.712-.288Q3 17.425 3 17t.288-.712Q3.575 16 4 16h10q.425 0 .713.288q.287.287.287.712t-.287.712Q14.425 18 14 18ZM4 8q-.425 0-.712-.287Q3 7.425 3 7t.288-.713Q3.575 6 4 6h16q.425 0 .712.287Q21 6.575 21 7t-.288.713Q20.425 8 20 8Z"
                                        />
                                    </svg>
                                </button>
                                <p className=" text-white text-[11px]">Notes</p>
                            </div>
                        </li>
                        <li className="pl-[3px] pt-[8px] pb-[6px] border-l-2 border-l-[#242933] border-solid">
                            <div className=" flex flex-col items-center gap-[2px] opacity-[.7]">
                                <button className="bg-[#b35c44] p-[5px] rounded-[3px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="white"
                                            d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2S7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"
                                        />
                                    </svg>
                                </button>
                                <p className=" text-white text-[11px]">
                                    Contacts
                                </p>
                            </div>
                        </li>
                        <li className="pl-[3px] pt-[8px] pb-[6px] border-l-2 border-l-[#242933] border-solid">
                            <div className=" flex flex-col items-center gap-[2px] opacity-[.7]">
                                <button className="bg-[#cc3d55] p-[5px] rounded-[3px] relative h-[24px] w-[24px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className=" absolute top-[2px] right-[5px]"
                                        width="12"
                                        height="12"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 16 16">
                                        <path
                                            fill="white"
                                            d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
                                        />
                                    </svg>
                                </button>
                                <p className=" text-white text-[11px]">
                                    Bookmarks
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <SideLeftTwo
                    handleGroup={handleGroup}
                    handleHomeStreams={handleHomeStreams}
                    handleUnreadStreams={handleUnreadStreams}
                    handlePageNavigation={handlePageNavigation}
                    bg={bg}
                />
            </div>
        </div>
    );
}

export default SideLeft;
