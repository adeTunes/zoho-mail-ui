import React from "react";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import StreamsIcon from "../images/streams-icon.png";

function SideLeftTwo({
    handleGroup,
    handlePageNavigation,
    handleHomeStreams,
    handleUnreadStreams,
    bg,
}) {
    const [caretDropdown, setCaretDropdown] = useState(false);
    const [showStreams, setShowStreams] = useState(false);
    const [showFolders, setShowFolders] = useState(false);
    const [showViews, setShowViews] = useState(false);

    let caretRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (!caretRef.current.contains(event.target)) {
                setCaretDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return (
        <div className=" grid grid-rows-[auto_1fr] overflow-auto ml-[10px] text-[#f2f3f4]">
            <div
                ref={caretRef}
                className="pb-[20px] pr-[10px] relative flex items-center">
                <button className="new-mail-btn-1 text-white font-semibold text-[1rem] bg-[#2c66dd] hover:bg-[#5e93ff] h-[34px] px-[30px] rounded-l-[8px] ">
                    New Mail
                </button>
                <button
                    onClick={() =>
                        caretDropdown
                            ? setCaretDropdown(false)
                            : setCaretDropdown(true)
                    }
                    className={
                        caretDropdown
                            ? "new-mail-btn-2-state h-[34px] px-[8px] rounded-r-[5px] border-l-[1px] border-solid border-[#25212141]"
                            : "new-mail-btn-2 h-[34px] px-[8px] rounded-r-[5px] border-l-[1px] border-solid border-[#25212141] "
                    }>
                    <Icon
                        icon="radix-icons:caret-down"
                        color="#fff"
                        width="18"
                    />
                </button>
                {caretDropdown && (
                    <div className=" grid items-center text-[14px] absolute top-[39px] rounded-[4px] gap-x-[10px] bg-white text-black grid-cols-[auto_auto] whitespace-nowrap px-[15px] py-[12px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 36 36">
                            <path
                                fill="#666970"
                                d="M32.25 6h-4v3a2.2 2.2 0 1 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6ZM10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z"
                                className="clr-i-solid clr-i-solid-path-1"
                            />
                            <path
                                fill="#666970"
                                d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                className="clr-i-solid clr-i-solid-path-2"
                            />
                            <path
                                fill="#666970"
                                d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                className="clr-i-solid clr-i-solid-path-3"
                            />
                            <path fill="none" d="M0 0h36v36H0z" />
                        </svg>
                        <p>New Note</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 36 36">
                            <path
                                fill="#666970"
                                d="M32.25 6h-4v3a2.2 2.2 0 1 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6ZM10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z"
                                className="clr-i-solid clr-i-solid-path-1"
                            />
                            <path
                                fill="#666970"
                                d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                className="clr-i-solid clr-i-solid-path-2"
                            />
                            <path
                                fill="#666970"
                                d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                className="clr-i-solid clr-i-solid-path-3"
                            />
                            <path fill="none" d="M0 0h36v36H0z" />
                        </svg>
                        <p>New Task</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 36 36">
                            <path
                                fill="#666970"
                                d="M32.25 6h-4v3a2.2 2.2 0 1 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6ZM10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z"
                                className="clr-i-solid clr-i-solid-path-1"
                            />
                            <path
                                fill="#666970"
                                d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                className="clr-i-solid clr-i-solid-path-2"
                            />
                            <path
                                fill="#666970"
                                d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                className="clr-i-solid clr-i-solid-path-3"
                            />
                            <path fill="none" d="M0 0h36v36H0z" />
                        </svg>
                        <p>New Event</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 36 36">
                            <path
                                fill="#666970"
                                d="M32.25 6h-4v3a2.2 2.2 0 1 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6ZM10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z"
                                className="clr-i-solid clr-i-solid-path-1"
                            />
                            <path
                                fill="#666970"
                                d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                className="clr-i-solid clr-i-solid-path-2"
                            />
                            <path
                                fill="#666970"
                                d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                className="clr-i-solid clr-i-solid-path-3"
                            />
                            <path fill="none" d="M0 0h36v36H0z" />
                        </svg>
                        <p>New Contact</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 36 36">
                            <path
                                fill="#666970"
                                d="M32.25 6h-4v3a2.2 2.2 0 1 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6ZM10 26H8v-2h2Zm0-5H8v-2h2Zm0-5H8v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm6 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Z"
                                className="clr-i-solid clr-i-solid-path-1"
                            />
                            <path
                                fill="#666970"
                                d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                className="clr-i-solid clr-i-solid-path-2"
                            />
                            <path
                                fill="#666970"
                                d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
                                className="clr-i-solid clr-i-solid-path-3"
                            />
                            <path fill="none" d="M0 0h36v36H0z" />
                        </svg>
                        <p>New Bookmark</p>
                    </div>
                )}
            </div>
            <div className="scroll-bar scroll-list overflow-y-scroll text-[13.5px] text-[#BCBEC2]">
                <div>
                    <div className=" leading-[1.75rem] flex flex-col gap-[20px] ">
                        <div>
                            <p className=" flex items-center text-[#5e93ff] text-[.6875rem] font-bold uppercase ">
                                <span
                                    className="flex-1 text-[11px] cursor-pointer"
                                    onClick={() =>
                                        showStreams
                                            ? setShowStreams(false)
                                            : setShowStreams(true)
                                    }>
                                    streams
                                </span>
                                <img
                                    className="cursor-pointer"
                                    onClick={handleGroup}
                                    src={StreamsIcon}
                                    alt=""
                                />
                            </p>
                            {showStreams && (
                                <ul className="">
                                    <li
                                        className={
                                            bg === "home_streams"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={handleHomeStreams}>
                                        Home
                                    </li>
                                    <li
                                        className={
                                            bg === "unread_streams"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={handleUnreadStreams}>
                                        All unread
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <p className="text-[#5e93ff] flex items-center text-[.6875rem] font-bold uppercase">
                                <span
                                    className=" flex-1 text-[11px] cursor-pointer"
                                    onClick={() =>
                                        showFolders
                                            ? setShowFolders(false)
                                            : setShowFolders(true)
                                    }>
                                    folders
                                </span>
                                <span className=" flex gap-[4px] items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="12"
                                        height="12"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 28 28">
                                        <path
                                            fill="#bcbec2"
                                            d="M14 9.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9ZM11 14a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm10.71 8.395l-1.728-.759a1.72 1.72 0 0 0-1.542.086c-.467.27-.765.747-.824 1.284l-.208 1.88a.923.923 0 0 1-.703.796a11.67 11.67 0 0 1-5.412 0a.923.923 0 0 1-.702-.796l-.208-1.877a1.701 1.701 0 0 0-.838-1.281a1.694 1.694 0 0 0-1.526-.086l-1.728.759a.92.92 0 0 1-1.043-.215a12.064 12.064 0 0 1-2.707-4.672a.924.924 0 0 1 .334-1.016l1.527-1.128a1.7 1.7 0 0 0 0-2.74l-1.527-1.125a.924.924 0 0 1-.334-1.017A12.059 12.059 0 0 1 5.25 5.821a.92.92 0 0 1 1.043-.214l1.72.757a1.707 1.707 0 0 0 2.371-1.376l.21-1.878a.923.923 0 0 1 .715-.799c.881-.196 1.78-.3 2.704-.311c.902.01 1.8.115 2.68.311a.922.922 0 0 1 .715.8l.209 1.878a1.701 1.701 0 0 0 1.688 1.518c.233 0 .464-.049.68-.144l1.72-.757a.92.92 0 0 1 1.043.214a12.057 12.057 0 0 1 2.708 4.667a.924.924 0 0 1-.333 1.016l-1.525 1.127c-.435.32-.698.829-.698 1.37c0 .54.263 1.049.699 1.37l1.526 1.126c.316.234.45.642.334 1.017a12.065 12.065 0 0 1-2.707 4.667a.92.92 0 0 1-1.043.215Zm-5.447-.198a3.162 3.162 0 0 1 1.425-1.773a3.22 3.22 0 0 1 2.896-.161l1.344.59a10.565 10.565 0 0 0 1.97-3.398l-1.189-.877v-.001a3.207 3.207 0 0 1-1.309-2.578c0-1.027.497-1.98 1.307-2.576l.002-.001l1.187-.877a10.56 10.56 0 0 0-1.971-3.397l-1.333.586l-.002.001c-.406.18-.843.272-1.286.272a3.202 3.202 0 0 1-3.178-2.852v-.002l-.163-1.46a11.476 11.476 0 0 0-1.95-.193a11.71 11.71 0 0 0-1.975.193l-.163 1.461A3.207 3.207 0 0 1 7.41 7.737l-1.336-.588a10.558 10.558 0 0 0-1.971 3.397l1.19.877a3.201 3.201 0 0 1 0 5.155l-1.19.878a10.565 10.565 0 0 0 1.97 3.403l1.345-.59a3.194 3.194 0 0 1 2.878.16a3.2 3.2 0 0 1 1.579 2.411v.005l.162 1.464c1.297.255 2.63.255 3.927 0l.162-1.467c.024-.22.07-.437.138-.645Z"
                                        />
                                    </svg>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24">
                                        <path
                                            fill="#bcbec2"
                                            d="M12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 12 7Zm-9-.75A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25Z"
                                        />
                                    </svg>
                                </span>
                            </p>
                            {showFolders && (
                                <ul className="">
                                    <li
                                        className={
                                            bg === "inbox"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/",
                                                "inbox"
                                            )
                                        }>
                                        Inbox
                                    </li>
                                    <li
                                        className={
                                            bg === "drafts"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/mail/drafts",
                                                "drafts"
                                            )
                                        }>
                                        Drafts
                                    </li>
                                    <li
                                        className={
                                            bg === "templates"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/mail/templates",
                                                "templates"
                                            )
                                        }>
                                        Templates
                                    </li>
                                    <li
                                        className={
                                            bg === "snoozed"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/mail/snoozed",
                                                "snoozed"
                                            )
                                        }>
                                        Snoozed
                                    </li>
                                    <li
                                        className={
                                            bg === "sent"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/mail/sent",
                                                "sent"
                                            )
                                        }>
                                        Sent
                                    </li>
                                    <li
                                        className={
                                            bg === "spam"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/mail/spam",
                                                "spam"
                                            )
                                        }>
                                        Spam
                                    </li>
                                    <li
                                        className={
                                            bg === "trash"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/mail/trash",
                                                "trash"
                                            )
                                        }>
                                        Trash
                                    </li>
                                    <li
                                        className={
                                            bg === "outbox"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/mail/outbox",
                                                "outbox"
                                            )
                                        }>
                                        Outbox
                                    </li>
                                    <li
                                        className={
                                            bg === "newsletter"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/mail/newsletter",
                                                "newsletter"
                                            )
                                        }>
                                        NewsLetter
                                    </li>
                                    <li
                                        className={
                                            bg === "notification"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/mail/notification",
                                                "notification"
                                            )
                                        }>
                                        Notification
                                    </li>
                                </ul>
                            )}
                        </div>
                        <div>
                            <p className=" flex items-center text-[#5e93ff] text-[.6875rem] font-bold uppercase">
                                <span className="flex-1 text-[11px] cursor-pointer">
                                    tags
                                </span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    preserveAspectRatio="xMidYMid meet"
                                    viewBox="0 0 24 24">
                                    <path
                                        fill="#bcbec2"
                                        d="M12 7a.75.75 0 0 1 .75.75v3.5h3.5a.75.75 0 0 1 0 1.5h-3.5v3.5a.75.75 0 0 1-1.5 0v-3.5h-3.5a.75.75 0 0 1 0-1.5h3.5v-3.5A.75.75 0 0 1 12 7Zm-9-.75A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75H6.25Z"
                                    />
                                </svg>
                            </p>
                        </div>
                        <div>
                            <p className="flex justify-between text-[#5e93ff] text-[.6875rem] font-bold uppercase">
                                <span
                                    className="text-[11px] flex-1 cursor-pointer"
                                    onClick={() =>
                                        showViews
                                            ? setShowViews(false)
                                            : setShowViews(true)
                                    }>
                                    views
                                </span>
                            </p>
                            {showViews && (
                                <ul className=" transition duration-1000">
                                    <li
                                        className={
                                            bg === "unread"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/mail/unread",
                                                "unread"
                                            )
                                        }>
                                        Unread
                                    </li>
                                    <li
                                        className={
                                            bg === "all_messages"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/mail/all_messages",
                                                "all_messages"
                                            )
                                        }>
                                        All messages
                                    </li>
                                    <li
                                        className={
                                            bg === "flagged"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/mail/flagged",
                                                "flagged"
                                            )
                                        }>
                                        Flagged
                                    </li>
                                    <li
                                        className={
                                            bg === "all_archived"
                                                ? "cursor-pointer pl-[10px] bg-[#55585E80] rounded-l-[4px]"
                                                : "cursor-pointer pl-[10px] hover:bg-[#55585E50]"
                                        }
                                        onClick={() =>
                                            handlePageNavigation(
                                                1,
                                                "/mail/all_archived",
                                                "all_archived"
                                            )
                                        }>
                                        All archived
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideLeftTwo;
