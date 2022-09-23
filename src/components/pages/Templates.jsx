import React from "react";
import { Icon } from "@iconify/react";
import ViewType from "../../images/view-type.png";
import ViewList from "../../images/view-list.png";
import { Link } from "react-router-dom";

function Templates() {
    return (
        <div>
            <div className=" px-[15px] border-[#e4e5e7] border-b border-solid pt-[15px] flex justify-between items-center">
                <div className="flex flex-col gap-[15px]">
                    <div>
                        <p className=" text-[#18191B]">
                            <strong className="text-[14px]">Templates</strong>
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
                        <span className="flex items-center gap-[8px]">
                            <Icon
                                icon="carbon:document-attachment"
                                color="#666970"
                                width="18"
                                height="18"
                            />
                            Create Template
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <img src={ViewType} alt="" />
                    <img src={ViewList} alt="" />
                </div>
            </div>
            <div className="px-[15px] text-center text-[14px] pt-[40px]">
                You do not have any templates yet. Create a{" "}
                <span className="text-[#0000EE]">
                    <Link to="/">new template</Link>
                </span>
            </div>
        </div>
    );
}

export default Templates;
