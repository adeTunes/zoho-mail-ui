import React from "react";
import { Icon } from "@iconify/react";

function Group() {
    return (
        <div className="grid grid-rows-[auto_1fr] overflow-auto">
            <div className="flex items-center gap-[10px] pl-[15px] py-[20px] border border-solid border-[#e4e5e7]">
                <p className="flex items-center font-bold text-[14px]">
                    All
                    <Icon
                        icon="radix-icons:caret-down"
                        color="#000"
                        width="18"
                    />
                </p>
                <p className="flex items-center text-[#878787] text-[13px]">
                    <Icon
                        icon="ci:dot-01-xs"
                        color="#bcbec2"
                        width="18"
                        height="18"
                    />
                    No Groups
                </p>
            </div>
            <div className="grid grid-cols-[200px_1fr] overflow-auto">
                <div className="flex flex-col text-[14px] text-[#18191B] gap-[20px] overflow-auto border border-solid border-r-[#e4e5e7]">
                    <div className="pt-[15px] flex flex-col gap-[15px]">
                        <p className="text-[700] pl-[10px]">Type</p>
                        <ul className="grid gap-[10px] pl-[10px] grid-cols-[auto_auto]">
                            <li>
                                <input type="radio" name="Type" id="" />
                            </li>
                            <li>All</li>
                            <li>
                                <input type="radio" name="Type" id="" />
                            </li>
                            <li>Personal groups</li>
                            <li>
                                <input type="radio" name="Type" id="" />
                            </li>
                            <li>Organization email groups</li>
                            <li>
                                <input type="radio" name="Type" id="" />
                            </li>
                            <li>Organization groups (without email)</li>
                        </ul>
                    </div>
                    <div className="pt-[15px] flex flex-col gap-[15px]">
                        <p className="text-[700] pl-[10px]">Role</p>
                        <ul className="pl-[10px] flex flex-col gap-[10px]">
                            <li className="flex items-center gap-[10px]">
                                <input type="radio" name="Role" id="" />
                                <li>All</li>
                            </li>
                            <li className="flex items-center gap-[10px]">
                                <input type="radio" name="Role" id="" />
                                <li>Owner</li>
                            </li>
                            <li className="flex items-center gap-[10px]">
                                <input type="radio" name="Role" id="" />
                                <li>Moderator</li>
                            </li>
                            <li className="flex items-center gap-[10px]">
                                <input type="radio" name="Role" id="" />
                                <li>Member</li>
                            </li>
                        </ul>
                    </div>
                    <div className="pt-[15px] flex flex-col gap-[15px]">
                        <p className="text-[700] pl-[10px]">Streams status</p>
                        <ul className="pl-[10px] flex flex-col gap-[10px]">
                            <li className="flex items-center gap-[10px]">
                                <input type="checkbox" name="" id="" />
                                <li>Enabled groups</li>
                            </li>
                            <li className="flex items-center gap-[10px]">
                                <input type="checkbox" name="" id="" />
                                <li>Disabled groups</li>
                            </li>
                            <li className="flex items-center gap-[10px]">
                                <input type="checkbox" name="" id="" />
                                <li>Hidden groups</li>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" text-center">
                    <div className="m-[25px_auto] text-left p-[10px] w-[95%] bg-[#f0f9ff] border-solid rounded-[5px] border border-[#b3e0ff]">
                        <p className="text-[14px]">
                            Go to the{" "}
                            <span className="text-[#007DA8]">
                                Groups page in Accounts
                            </span>{" "}
                            to create a group, and then enable Streams here.
                        </p>
                    </div>
                    <p className="text-[14px]">
                        You haven't created any groups yet.{" "}
                        <a href="/" className=" underline text-[#0000EE]">
                            Create Group
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Group;
