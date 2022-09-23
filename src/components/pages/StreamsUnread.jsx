import React from "react";
import { Icon } from "@iconify/react";
import ViewType from "../../images/view-type.png";
import ViewList from "../../images/view-list.png";

function StreamsUnread() {
    return (
        <div>
            <div className=" px-[15px] border-[#e4e5e7] border-b border-solid py-[15px] flex justify-between items-center">
                <div>
                    <p className=" text-[#18191B] gap-[5px] flex items-center">
                        <strong className="text-[14px]">All archived</strong>
                        <Icon
                            icon="radix-icons:caret-down"
                            color="#666970"
                            width="14"
                        />
                    </p>
                </div>
                <div className="flex items-center gap-[10px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 32 32">
                        <path
                            fill="none"
                            stroke="#666970"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2 5s4-2 14-2s14 2 14 2L19 18v9l-6 3V18L2 5Z"
                        />
                    </svg>
                    <img src={ViewType} alt="" />
                    <img src={ViewList} alt="" />
                </div>
            </div>
            <div className="px-[15px] text-center text-[14px] pt-[50px]">
                Nothing here
            </div>
        </div>
    );
}

export default StreamsUnread;
