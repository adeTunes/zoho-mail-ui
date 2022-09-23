import React from "react";
import { Icon } from "@iconify/react";
import ViewType from "../../images/view-type.png";
import ViewList from "../../images/view-list.png";

function Outbox() {
    return (
        <div>
            <div className=" px-[15px] border-[#e4e5e7] border-b border-solid pt-[15px] flex justify-between items-center">
                <div className="flex flex-col gap-[15px]">
                    <div>
                        <p className=" text-[#18191B]">
                            <strong className="text-[14px]">Outbox</strong>
                        </p>
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <input type="checkbox" name="" id="" />
                        <Icon
                            icon="radix-icons:caret-down"
                            color="#666970"
                            width="14"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-[10px]">
                    <img src={ViewType} alt="" />
                    <img src={ViewList} alt="" />
                </div>
            </div>
            <div className="px-[15px] text-center text-[14px] pt-[40px]">
                No emails in queue.
            </div>
        </div>
    );
}

export default Outbox;
