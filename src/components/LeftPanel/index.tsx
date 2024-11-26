import React, { Profiler } from "react";
import logo from "../../assets/logo.svg";
import Home from "../../assets/Home.svg";
import Search from "../../assets/Search.svg";
import Explore from "../../assets/Explore.svg";
import Reels from "../../assets/Reels.svg";
import Messages from "../../assets/Messages.svg";
import Notifications from "../../assets/Notifications.svg";
import Create from "../../assets/Create.svg";
import More from "../../assets/More.svg";
import Avatar from "react-avatar";
import avt from "../../assets/Profile.jpg";

export default function LeftPanel() {
    return (
        <div className="border-r border-solid border-r-gray-300 w-80 h-dvh ">
            <div className="pb-5 pt-2 pr-3 pl-3 content-start flex flex-col min-h-screen">
                <div className="pt-6 pb-4 pr-3 pl-3 mb-5">
                    <img src={logo} alt="logo" className="mt-2" />
                </div>
                <div className="flex-1 flex flex-col grow">
                    <div className="mt-1 mb-1 pt-3 pb-3 pr-3 pl-3 flex-row inline-flex items-center">
                        <img src={Home} alt="Home" />
                        <p className="pl-4 ">Home</p>
                    </div>
                    <div className="mt-1 mb-1 pt-3 pb-3 pr-3 pl-3 flex-row inline-flex items-center">
                        <img src={Search} alt="Search" />
                        <p className="pl-4 ">Search</p>
                    </div>
                    <div className="mt-1 mb-1 pt-3 pb-3 pr-3 pl-3 flex-row inline-flex items-center">
                        <img src={Explore} alt="Explore" />
                        <p className="pl-4 ">Explore</p>
                    </div>
                    <div className="mt-1 mb-1 pt-3 pb-3 pr-3 pl-3 flex-row inline-flex items-center">
                        <img src={Reels} alt="Reels" />
                        <p className="pl-4">Reels</p>
                    </div>
                    <div className="mt-1 mb-1 pt-3 pb-3 pr-3 pl-3 flex-row inline-flex items-center">
                        <img src={Messages} alt="Messages" />
                        <p className="pl-4">Messages</p>
                    </div>
                    <div className="mt-1 mb-1 pt-3 pb-3 pr-3 pl-3 flex-row inline-flex items-center">
                        <img src={Notifications} alt="Notifications" />
                        <p className="pl-4">Notifications</p>
                    </div>
                    <div className="mt-1 mb-1 pt-3 pb-3 pr-3 pl-3 flex-row inline-flex items-center">
                        <img src={Create} alt="Create" />
                        <p className="pl-4">Create</p>
                    </div>
                    <div className="mt-1 mb-1 pt-3 pb-3 pr-3 pl-3 flex-row inline-flex items-center">
                        <Avatar
                            src={avt}
                            size="24"
                            round={true}
                            alt="Avatar"
                        />
                        <p className="pl-4 ">Profile</p>
                    </div>
                </div>
                <div>
                    <div className="mt-1 mb-1 pt-3 pb-3 pr-3 pl-3 flex-row inline-flex">
                        <img src={More} alt="More" />
                        <p className="items-center pl-4">More</p>
                    </div>
                </div>
            </div>
        </div>
    );
}