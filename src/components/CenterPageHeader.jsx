import React from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import GroupTab from "../images/group-tab.png";
import ManageGroup from "../images/manage-group.png";
import UserThumbnail from "../images/user-thumbnail.png";
import GreenCircle from "../images/green-circle.png";

function CenterPageHeader({
    tab1,
    tab,
    tab2,
    setShowTab,
    showTab,
    handleCloseTab,
}) {
    let navigate = useNavigate();
    return (
        <>
            <div className="py-[10px] flex items-center justify-between">
                <div className="flex gap-[15px]">
                    {tab1 && (
                        <div
                            onClick={() => {
                                setShowTab(1);
                                navigate("/");
                            }}
                            className={showTab !== 1 ? "tabs2" : "tabs"}>
                            <button className="bg-[#2c66dd] cursor-default p-[3px] rounded-[2px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="7"
                                    height="7"
                                    viewBox="0 0 12 12"
                                    fill="none">
                                    <path
                                        d="M9.5 2H2.5C2.10218 2 1.72064 2.15804 1.43934 2.43934C1.15804 2.72064 1 3.10218 1 3.5V8.5C1 8.89782 1.15804 9.27936 1.43934 9.56066C1.72064 9.84196 2.10218 10 2.5 10H9.5C9.89782 10 10.2794 9.84196 10.5607 9.56066C10.842 9.27936 11 8.89782 11 8.5V3.5C11 3.10218 10.842 2.72064 10.5607 2.43934C10.2794 2.15804 9.89782 2 9.5 2V2ZM9.5 3L6.25 5.235C6.17399 5.27888 6.08777 5.30199 6 5.30199C5.91223 5.30199 5.82601 5.27888 5.75 5.235L2.5 3H9.5Z"
                                        fill="#fff"
                                    />
                                </svg>
                            </button>
                            <p
                                className={
                                    showTab === 1
                                        ? "text-[#000]"
                                        : "text-[#CACACA]"
                                }>
                                Mail
                            </p>
                        </div>
                    )}
                    {tab === true ? (
                        <div
                            className={
                                showTab !== 2
                                    ? "tabs2 relative -z-10 text-[#ffffff00]"
                                    : "tabs relative"
                            }>
                            {showTab !== 2 ? (
                                <img src={GroupTab} alt="" />
                            ) : (
                                <img src={ManageGroup} alt="" />
                            )}
                            <p
                                onClick={() => {
                                    setShowTab(2);
                                    navigate("/group");
                                }}
                                className={
                                    showTab === 2
                                        ? "text-[#000] relative"
                                        : "text-[#CACACA] relative"
                                }>
                                Manage &nbsp;{" "}
                                <span className="absolute">G</span>
                            </p>
                            <button
                                onClick={handleCloseTab}
                                className={
                                    showTab === 2
                                        ? "px-[4px] absolute right-[4px] bg-white"
                                        : "px-[4px] absolute right-[4px] bg-[#3d3f43]"
                                }>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="none"
                                        stroke="#000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                    />
                                </svg>
                            </button>
                        </div>
                    ) : null}
                    {tab2 === true ? (
                        <div
                            className={
                                showTab !== 3
                                    ? "tabs2 relative -z-10 text-[#ffffff00]"
                                    : "tabs relative"
                            }>
                            {showTab !== 3 ? (
                                <img src={GroupTab} alt="" />
                            ) : (
                                <img src={ManageGroup} alt="" />
                            )}
                            <p
                                onClick={() => {
                                    setShowTab(3);
                                    navigate("/streams/home");
                                }}
                                className={
                                    showTab === 3
                                        ? "text-[#000] relative"
                                        : "text-[#CACACA] relative"
                                }>
                                Streams
                            </p>
                            <button
                                onClick={handleCloseTab}
                                className={
                                    showTab === 3
                                        ? "px-[4px] absolute right-[4px] bg-white"
                                        : "px-[4px] absolute right-[4px] bg-[#3d3f43]"
                                }>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="none"
                                        stroke="#000"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
                                    />
                                </svg>
                            </button>
                        </div>
                    ) : null}
                </div>
                <div className=" flex gap-[25px] text-[#BCBEC2] items-center pr-[10px] ">
                    <span className=" flex bg-[#3d3e41] rounded-[8px] pl-[10px] p-[0.3125rem_0] gap-[8px]  ">
                        <span className=" flex items-center gap-[5px] ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24">
                                <path
                                    fill="none"
                                    stroke="#BCBEC2"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"
                                />
                            </svg>
                            <p>Mail</p>
                            <Icon
                                icon="radix-icons:caret-down"
                                color="#BCBEC2"
                                width="14"
                            />
                        </span>
                        <p>|</p>
                        <input
                            type="search"
                            placeholder="Search ( / )"
                            className="bg-transparent"
                        />
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 48 48">
                        <g
                            fill="none"
                            stroke="#bcbec2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="4">
                            <path d="M12 33C8.66666 33 4 31.5 4 25.5C4 18.5 11 17 13 17C14 13.5 16 8 24 8C31 8 34 12 35 15.5C35 15.5 44 16.5 44 25C44 31 40 33 36 33" />
                            <path d="M29 28L19 38" />
                            <path d="M19 28L29 38" />
                        </g>
                    </svg>
                    <Icon
                        icon="clarity:notification-solid"
                        color="#bcbec2"
                        width="18"
                        height="18"
                    />
                    <span className="relative">
                        <img
                            src={UserThumbnail}
                            className="h-[24px] rounded-[2px]"
                            alt=""
                        />
                        <img
                            src={GreenCircle}
                            className="absolute h-[12px] right-[-2px] bottom-[-2px]"
                            alt=""
                        />
                    </span>
                    <Icon
                        icon="fluent:grid-dots-20-regular"
                        color="#bcbec2"
                        width="18"
                        height="18"
                    />
                </div>
            </div>
        </>
    );
}

export default CenterPageHeader;
