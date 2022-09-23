import React from "react";
import { Icon } from "@iconify/react";
import ViewType from "../../images/view-type.png";
import ViewList from "../../images/view-list.png";

function Spam() {
    return (
        <div>
            <div className=" px-[15px] border-[#e4e5e7] border-b border-solid pt-[15px] flex justify-between items-center">
                <div className="flex flex-col gap-[15px]">
                    <div>
                        <p className=" text-[#18191B] flex items-center">
                            <strong className="text-[14px]">Spam</strong>
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
                            Attachment options
                        </span>
                        <span className="flex items-center gap-[8px]">
                            <Icon
                                icon="iwwa:option"
                                color="#666970"
                                width="18"
                                height="18"
                            />
                            Sort by
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <img src={ViewType} alt="" />
                    <img src={ViewList} alt="" />
                </div>
            </div>
            <div className="px-[20px] text-[14px] py-[10px] bg-[#f1f2f3] text-[#666970] border-[#e4e5e7] border-b border-solid">
                Spam emails received more more than{" "}
                <span className="text-[#0000EE]">30</span> days ago will be
                deleted permanently.
            </div>
            <div className="px-[15px] text-center text-[14px] pt-[40px]">
                Good riddance! No spam here.
            </div>
        </div>
    );
}

export default Spam;
