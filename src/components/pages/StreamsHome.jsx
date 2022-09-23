import React from "react";
import { Icon } from "@iconify/react";
import ViewType from "../../images/view-type.png";
import ViewList from "../../images/view-list.png";
import NameLogo from "../../images/name-logo.png";
import CouponCard from "../../images/coupon-card.png";
import ZMLogo from "../../images/zm-logo.png";
import discount from "../../images/discount.png";
import Star from "../../images/star.png";
import { SystemUiconsFaceDelighted } from "../../images/FaceEmoji";
import UserThumbnail from "../../images/user-thumbnail.png";

function StreamsHome() {
    return (
        <div className="grid grid-rows-[auto_1fr] overflow-auto">
            <div className=" px-[15px] border-[#e4e5e7] border-b border-solid py-[15px] flex justify-between items-center">
                <div>
                    <p className=" text-[#18191B] gap-[5px] flex items-center">
                        <img src={NameLogo} alt="" />
                        <strong className="text-[14px]">Home</strong>
                        <Icon
                            icon="radix-icons:caret-down"
                            color="#666970"
                            width="14"
                        />
                    </p>
                </div>
                <div className="flex items-center gap-[10px]">
                    <img src={ViewType} alt="" />
                    <img src={ViewList} alt="" />
                </div>
            </div>
            <div className="overflow-auto text-[14px] pt-[30px]">
                <div className="rounded-[5px] pt-[8px] pl-[8px] w-[95%] my-0 mx-auto border border-solid border-[#e4e5e7]">
                    <textarea
                        className="w-full h-[25px]"
                        name=""
                        placeholder="@mention users or select a group to post your messsage"
                        id=""
                        cols="30"></textarea>
                </div>
                <ul className="pt-[10px] border-[#e4e5e7] border-b border-solid sticky top-[-30px] bg-white text-[#878787] flex items-start p-[15px] justify-between">
                    <li className="border-[#2c66dd] text-[#000] px-[6px] pb-[10px] border-b-[3px] border-solid">
                        Streams to me
                    </li>
                    <li className="border-[#fff] border-b-[3px] border-solid px-[6px] pb-[10px]">
                        Invites
                    </li>
                    <li className="border-[#fff] border-b-[3px] border-solid px-[6px] pb-[10px]">
                        @Mention
                    </li>
                    <li className="border-[#fff] border-b-[3px] border-solid px-[6px] pb-[10px]">
                        Favourites
                    </li>
                    <li className="border-[#fff] border-b-[3px] border-solid px-[6px] pb-[10px]">
                        Streams by me
                    </li>
                    <li className="border-[#fff] border-b-[3px] border-solid px-[6px] pb-[10px]">
                        Attachments
                    </li>
                    <li className="flex gap-[5px] items-center text-[10px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 32 32">
                            <path
                                fill="none"
                                stroke="#878787"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M2 5s4-2 14-2s14 2 14 2L19 18v9l-6 3V18L2 5Z"
                            />
                        </svg>
                        <p>|</p>
                        <img src={CouponCard} className="h-[20px]" alt="" />
                        <p>|</p>
                        <p className="flex gap-[2px] items-center">
                            <span>Filter by:</span>
                            <span>All</span>
                            <Icon
                                icon="radix-icons:caret-down"
                                color="#666970"
                                width="11"
                            />
                        </p>
                    </li>
                </ul>
                <div className="border-[#bcbec2] mail-view mt-[8px] rounded-[5px] w-[95%] m-[0_auto] p-[.9375rem_.9375rem_0_.9375rem] border border-solid">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-[8px]">
                            <img src={ZMLogo} alt="" />
                            <div className="flex flex-col gap-[10px] justify-between ">
                                <p>
                                    <strong>Zoho Mail</strong> has posted a
                                    message
                                </p>
                                <div className="flex items-center justify-between">
                                    <small>Now</small>
                                    <div className="flex items-center gap-[5px]">
                                        <span className="flex items-center gap-[2px]">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                preserveAspectRatio="xMidYMid meet"
                                                viewBox="0 0 24 24">
                                                <path
                                                    fill="#878787"
                                                    d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z"
                                                />
                                            </svg>
                                            <Icon
                                                icon="ci:dot-01-xs"
                                                color="#bcbec2"
                                                width="18"
                                                height="18"
                                            />
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                preserveAspectRatio="xMidYMid meet"
                                                viewBox="0 0 32 32">
                                                <path
                                                    fill="none"
                                                    stroke="#878787"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M27 15v15H2V5h15m13 1l-4-4L9 19l-2 6l6-2Zm-8 0l4 4ZM9 19l4 4Z"
                                                />
                                            </svg>
                                        </span>
                                        <p>|</p>
                                        <img src={discount} alt="" />
                                        <p>|</p>
                                        <img src={Star} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[15px] items-center mr-[20px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 24 24">
                                <g
                                    fill="none"
                                    stroke="#878787"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2">
                                    <circle cx="12" cy="13" r="8" />
                                    <path d="M12 9v4l2 2M5 3L2 6m20 0l-3-3M6 19l-2 2m14-2l2 2" />
                                </g>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                preserveAspectRatio="xMidYMid meet"
                                viewBox="0 0 40 40">
                                <g fill="currentColor">
                                    <path d="M23.112 9.315a3.113 3.113 0 1 1-6.226.002a3.113 3.113 0 0 1 6.226-.002z" />
                                    <circle cx="20" cy="19.999" r="3.112" />
                                    <circle cx="20" cy="30.685" r="3.112" />
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[25px]">
                        <div className="mt-[20px] flex flex-col gap-[13px]">
                            <p>Hello and welcome to your Streams ! </p>
                            <p>
                                From here, you can create groups, add people
                                into a group, start a conversation with a
                                teammate or group, and interact around shared
                                emails.{" "}
                            </p>
                        </div>
                        <div className="flex flex-col gap-[13px]">
                            <p>Create a Group: </p>
                            <p>
                                Click on the "+" icon at the top to Create a
                                group. To add team members into your group,
                                simply start typing their names in the Members
                                field.{" "}
                            </p>
                        </div>
                        <div className="flex flex-col gap-[13px]">
                            <p>Start a Conversation: </p>
                            <p>
                                To start a conversation with a teammate, simply
                                @mention them. For example, @john, @linda.
                            </p>
                            <p>
                                To start a conversation with a group, navigate
                                to that groups' Stream, and post a message
                                there. All members of that group will see your
                                message. In addition, you can create a common
                                Note, Task or Event for a group.{" "}
                            </p>
                            <p>
                                To learn more about how to use Streams
                                <a
                                    className=" underline text-[#598FDE]"
                                    href="https://www.zoho.com/mail/help/streams.html">
                                    https://www.zoho.com/mail/help/streams.html
                                </a>{" "}
                            </p>
                            <p>
                                Or watch this short video about Streams
                                <a
                                    className=" underline text-[#598FDE]"
                                    href="https://www.youtube.com/watch?v=Kd4i-NqzU5Y">
                                    https://www.youtube.com/watch?v=Kd4i-NqzU5Y
                                </a>{" "}
                            </p>
                        </div>
                        <div className="flex flex-col gap-[13px]">
                            <p>Interact Around Shared Emails: </p>
                            <p>
                                If an email is shared with you, you will see it
                                under the "My Stream" tab in Home. From here,
                                you can interact with your team "behind the
                                scenes", and reply once you come to a consensus.
                            </p>
                            <p>
                                You can read more about Email Sharing here{" "}
                                <br />
                                <a
                                    className=" underline text-[#598FDE]"
                                    href="https://www.zoho.com/mail/help/email-sharing.html">
                                    https://www.zoho.com/mail/help/email-sharing.html
                                </a>
                            </p>
                            <div className="flex justify-between items-center">
                                <span className="flex items-center gap-[15px]">
                                    <span className="flex gap-[4px] items-center">
                                        <span>L</span>
                                        <Icon
                                            icon="ci:dot-01-xs"
                                            color="#bcbec2"
                                            width="18"
                                            height="18"
                                        />
                                        <span>U</span>
                                    </span>
                                    P
                                </span>
                                <p className="comment text-[.75rem] cursor-pointer text-[#2558BB]">
                                    Comment privately
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-[8px] gap-[15px] bg-[#f1f2f3]">
                        <img
                            src={UserThumbnail}
                            className="h-[34px] rounded-[2px]"
                            alt=""
                        />
                        <div className="flex flex-1 justify-between px-[10px] rounded-[3px] border border-solid border-[#e4e5e7] items-center bg-white h-[34px]">
                            <input
                                type="text"
                                className="bg-transparent"
                                placeholder="Write a comment..."
                            />
                            <SystemUiconsFaceDelighted />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <Icon icon="carbon:up-to-top" />
        // <Icon icon="ant-design:heart-filled" />
        // <Icon icon="carbon:menu" />
        // <Icon icon="carbon:add" />
        // <Icon icon="ant-design:user-add-outlined" />
    );
}

export default StreamsHome;
