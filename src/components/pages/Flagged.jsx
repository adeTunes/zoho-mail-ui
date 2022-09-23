import React from "react";
import { Icon } from "@iconify/react";
import ViewType from "../../images/view-type.png";
import ViewList from "../../images/view-list.png";

function Flagged() {
    return (
        <div>
            <div className=" px-[15px] border-[#e4e5e7] border-b border-solid pt-[15px] flex justify-between items-center">
                <div className="flex flex-col gap-[15px]">
                    <div>
                        <p className=" text-[#18191B] flex items-center">
                            <strong className="text-[14px]">Flagged</strong>
                            <span className="text-[35px]">
                                <Icon
                                    icon="ci:dot-01-xs"
                                    color="#bcbec2"
                                    width="18"
                                    height="18"
                                />
                            </span>
                            <span className=" text-[13px]">
                                Flagged messages
                            </span>
                        </p>
                    </div>
                    <div className=" text-[14px] flex items-center gap-[20px] text-[#666970]">
                        <span className="flex items-center gap-[8px]">
                            <input type="checkbox" name="" id="" />
                            <Icon
                                icon="radix-icons:caret-down"
                                color="#666970"
                                width="14"
                            />
                        </span>
                        <span className="flex items-center gap-[8px]">
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
                            Views
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <img src={ViewType} alt="" />
                    <img src={ViewList} alt="" />
                </div>
            </div>
            <div className="px-[15px] text-center text-[14px] pt-[40px]">
                There are no flagged emails.
            </div>
        </div>
    );
}

export default Flagged;
