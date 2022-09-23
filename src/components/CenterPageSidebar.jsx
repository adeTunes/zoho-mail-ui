import React from "react";
import Viewer from "../images/viewer.png";
import CalendarLike from "../images/calendar-like.png";
import Search from "../images/search.png";
import ZohoDesk from "../images/zoho-desk.png";
import ZohoCrm from "../images/zoho-crm.png";
import ZohoMeeting from "../images/zoho-meeting.png";
import ZohoProjects from "../images/zoho-projects.png";
import ZohoWorkdrive from "../images/zoho-workdrive.png";
import StickyNote from "../images/sticky-note.png";
import ProductUpdates from "../images/product-updates.png";
import Reminders from "../images/reminders.png";
import ZohoLight from "../images/zoho-light.png";
import ZohoFeedback from "../images/zoho-feedback.png";

function CenterPageSidebar() {
    return (
        <div className="overflow-hidden border border-l-[#e1e2e6] border-solid bg-[#f7f8fa]">
            <div className="pt-[14px] flex flex-col items-center">
                <div className="border border-solid p-[8px] border-[rgba(0,0,0,.05)]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 28 28">
                        <path
                            fill="#666970"
                            d="M14 9.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9ZM11 14a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm10.71 8.395l-1.728-.759a1.72 1.72 0 0 0-1.542.086c-.467.27-.765.747-.824 1.284l-.208 1.88a.923.923 0 0 1-.703.796a11.67 11.67 0 0 1-5.412 0a.923.923 0 0 1-.702-.796l-.208-1.877a1.701 1.701 0 0 0-.838-1.281a1.694 1.694 0 0 0-1.526-.086l-1.728.759a.92.92 0 0 1-1.043-.215a12.064 12.064 0 0 1-2.707-4.672a.924.924 0 0 1 .334-1.016l1.527-1.128a1.7 1.7 0 0 0 0-2.74l-1.527-1.125a.924.924 0 0 1-.334-1.017A12.059 12.059 0 0 1 5.25 5.821a.92.92 0 0 1 1.043-.214l1.72.757a1.707 1.707 0 0 0 2.371-1.376l.21-1.878a.923.923 0 0 1 .715-.799c.881-.196 1.78-.3 2.704-.311c.902.01 1.8.115 2.68.311a.922.922 0 0 1 .715.8l.209 1.878a1.701 1.701 0 0 0 1.688 1.518c.233 0 .464-.049.68-.144l1.72-.757a.92.92 0 0 1 1.043.214a12.057 12.057 0 0 1 2.708 4.667a.924.924 0 0 1-.333 1.016l-1.525 1.127c-.435.32-.698.829-.698 1.37c0 .54.263 1.049.699 1.37l1.526 1.126c.316.234.45.642.334 1.017a12.065 12.065 0 0 1-2.707 4.667a.92.92 0 0 1-1.043.215Zm-5.447-.198a3.162 3.162 0 0 1 1.425-1.773a3.22 3.22 0 0 1 2.896-.161l1.344.59a10.565 10.565 0 0 0 1.97-3.398l-1.189-.877v-.001a3.207 3.207 0 0 1-1.309-2.578c0-1.027.497-1.98 1.307-2.576l.002-.001l1.187-.877a10.56 10.56 0 0 0-1.971-3.397l-1.333.586l-.002.001c-.406.18-.843.272-1.286.272a3.202 3.202 0 0 1-3.178-2.852v-.002l-.163-1.46a11.476 11.476 0 0 0-1.95-.193a11.71 11.71 0 0 0-1.975.193l-.163 1.461A3.207 3.207 0 0 1 7.41 7.737l-1.336-.588a10.558 10.558 0 0 0-1.971 3.397l1.19.877a3.201 3.201 0 0 1 0 5.155l-1.19.878a10.565 10.565 0 0 0 1.97 3.403l1.345-.59a3.194 3.194 0 0 1 2.878.16a3.2 3.2 0 0 1 1.579 2.411v.005l.162 1.464c1.297.255 2.63.255 3.927 0l.162-1.467c.024-.22.07-.437.138-.645Z"
                        />
                    </svg>
                </div>
                <img className="py-[8px]" src={Viewer} alt="" />
                <img className="py-[8px]" src={CalendarLike} alt="" />
            </div>
            <div className=" py-[10px] border-t border-b m-[6px] border-solid">
                <div className="flex flex-col items-center p-[3px] bg-white rounded-[4px]">
                    <img
                        className="py-[8px] border-b border-solid"
                        src={Search}
                        alt=""
                    />
                    <img className="py-[8px]" src={ZohoDesk} alt="" />
                    <img className="py-[8px]" src={ZohoCrm} alt="" />
                    <img className="py-[8px]" src={ZohoMeeting} alt="" />
                    <img className="py-[8px]" src={ZohoProjects} alt="" />
                    <img className="py-[8px]" src={ZohoWorkdrive} alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center">
                <img className="py-[8px]" src={StickyNote} alt="" />
                <img className="py-[8px]" src={ProductUpdates} alt="" />
                <img className="py-[8px]" src={Reminders} alt="" />
            </div>
            <div className="border border-solid p-[8px] flex flex-col items-center border-[rgba(0,0,0,.05)]">
                <img src={ZohoLight} alt="" />
            </div>
            <div className="border border-solid p-[8px] flex flex-col items-center border-[rgba(0,0,0,.05)]">
                <img src={ZohoFeedback} alt="" />
            </div>
        </div>
    );
}

export default CenterPageSidebar;
