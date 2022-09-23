import React from "react";
import { Icon } from "@iconify/react";
import MailBox from "../../images/mail-box-2.png";
import ViewType from "../../images/view-type.png";
import ViewList from "../../images/view-list.png";

function Mail({ showTab }) {
    return (
        <div>
            <div className=" px-[15px] border-[#e4e5e7] border-b border-solid pt-[15px] flex justify-between items-center">
                <div className="flex flex-col gap-[15px]">
                    <div>
                        <p className=" text-[#18191B] flex items-center">
                            <strong className="text-[14px]">Inbox</strong>
                            <span className="text-[35px]">
                                <Icon
                                    icon="ci:dot-01-xs"
                                    color="#bcbec2"
                                    width="18"
                                    height="18"
                                />
                            </span>
                            <span className="text-[#2558BB] text-[13px]">
                                2 Unread Emails
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
                        <span className="flex items-center gap-[8px]">
                            <Icon
                                icon="carbon:document-attachment"
                                color="#666970"
                                width="18"
                                height="18"
                            />
                            Attachment options
                        </span>
                        <Icon
                            icon="iwwa:option"
                            color="#666970"
                            width="18"
                            height="18"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <img src={MailBox} alt="" />
                    <img src={ViewType} alt="" />
                    <img src={ViewList} alt="" />
                </div>
            </div>
            <div className="px-[15px] text-[14px] py-[6px] bg-[#f1f2f3] text-[#666970]">
                Earlier in September
            </div>
            <div className="pl-[15px] border-l-[2px] border-l-[#2C66DD] border-b-[1px] border-solid border-b-[#f4f4f4] grid gap-x-[8px] grid-cols-[auto_auto_1fr] items-center">
                <input type="checkbox" name="" id="" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 48 48">
                    <path
                        fill="none"
                        stroke="#2558bb"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M43.5 35.5v-23a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2v23a2 2 0 0 0 2 2h35a2 2 0 0 0 2-2Z"
                    />
                    <path
                        fill="none"
                        stroke="#2558bb"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M43.5 14.981L24 24L4.5 14.981"
                    />
                </svg>
                <p>
                    <span className="text-[#2558BB] text-[12px]">(2)</span>
                    <span className="text-[#18191B] text-[14px] font-[600]">
                        {" "}
                        welcome@zoho.com... Me
                    </span>
                </p>
                <span></span>
                <button className="p-[0.2px] rounded-[0.625rem] border-[#dadbdd] border text-[#666970] text-[10px]">
                    2
                </button>
                <p className="flex justify-between items-center">
                    <span className="text-[#18191B] text-[14px]">
                        Welcome to Zoho Mail
                    </span>
                    <span className="text-[#878787] pr-[35px] text-[10px]">
                        THU SEP 1 2:11 PM
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Mail;
