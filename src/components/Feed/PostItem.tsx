import Avatar from "react-avatar";
import avt from "../../assets/Profile.jpg";
import MoreOptions from "../../assets/MoreOptions.svg";
import Save from "../../assets/Save.svg";
import Comment from "../../assets/Comment.svg";
import Love from "../../assets/Love.svg";
import Direct from "../../assets/Direct.svg";
import Emoji from "../../assets/Emoji.svg";
import Unlike from "../../assets/Unlike.svg";
import { useState } from "react";



export function PostItem() {
    return <div className="w-full max-w-[470px] flex flex-col box-border items-stretch seft-auto grow justify-start">
        <div>
            <div className="flex flex-col py-0 ">
                <div className="border-b border-b-custom-gray pb-4 min-w-[390px] border-gray-300 mb-5 flex flex-col">
                    <PostHeader />
                    <PostImage />
                    <PostReaction />
                    <PostCountLike />
                    <PostCaption />
                    <PostComment />
                </div>
            </div>
        </div>
    </div>;
}

function PostComment() {
    return <div className="flex flex-col items-start text-sm">
        <button className="text-gray-500">View all 10 comments</button>
        <div className="flex flex-row w-full">
            <input type="text" placeholder="Add a comment..." className="placeholder:text-gray-500 w-full" />
            <img src={Emoji} alt="Emoji" />
        </div>
    </div>
}

function PostCaption() {
    const [showMore, setShowMore] = useState(false);
    const caption = "Thanks the MGI Family for always welcoming me ❤️❤️ as former Queen, i feel so happy to see the growth of the company and i know that nothing can stop this because we are Grand the one and only ❤️❤️";
    const isCaptionLong = caption.length > 50;
    return <div className="text-sm mt-2">
        <span className="font-semibold ">phuonnngminh</span>
        <span>&nbsp;{!isCaptionLong || showMore ? caption : `${caption.slice(0, 50)}...`}&nbsp;
            {isCaptionLong && !showMore && (
                <button onClick={() => setShowMore(true)} className="text-gray-500">more</button>)}</span>
    </div>

}

function PostCountLike() {
    return <div>
        <div className="flex flex-row items-center text-sm">
            <div className="bg-white rounded-full flex items-center justify-center px-0.5 py-0.5 mx-0.5 my-0.5">
                <Avatar
                    src={avt}
                    round={true}
                    alt="Avatar"
                    size="14"
                    className="mx-auto my-auto"
                />
            </div>
            <div><p className="font-sans font-semibold leading-4">68,686 likes</p></div>
        </div>
    </div>;
}

function PostReaction() {
    const [isLoveClicked, setIsLoveClicked] = useState(false);

    return <div className="my-1">
        <div className=" flex flex-row w-full h-fullx items-stretch">
            <div className="flex grid grid-flow-col shrink">
                <button
                    className={`p-2 -ml-2`}
                    onClick={() => setIsLoveClicked(prev => !prev)}
                >
                    {isLoveClicked ? (
                        <img src={Unlike} alt="Unlike" />
                    ) : (
                        <img src={Love} alt="Love" />
                    )}
                </button>
                <div className="p-2"><img src={Comment} alt="Comment" /></div>
                <div className="p-2"><img src={Direct} alt="Direct" /></div>
            </div>
            <div className="flex grow justify-end py-2"><img src={Save} alt="Save" /></div>
        </div>
    </div>;
}

function PostImage() {
    return <div>
        <div><img src={avt} alt="PostImage" /></div>
    </div>;
}

function PostHeader() {
    return <div className="pb-3 pl-1 ">
        <div className="w-full flex items-center flex-row justify-start ">
            <div className="mr-3">
                <div className="inline-flex rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-purple-400">
                    <div className="mx-0.5 my-0.5 bg-white rounded-full px-0.5 py-0.5 w-full">
                        <Avatar
                            src={avt}
                            round={true}
                            alt="Avatar"
                            size="38"
                        />
                    </div>
                </div>
            </div>
            <div className="box-border flex items-center flex-col whitespace-nowrap self-auto justify-start grow min-w-0 min-h-0 rounded-bl-none rounded-br-none rounded-tl-none rounded-tr-none">
                <div className="w-full box-border flex items-strectch self-auto grow-0 rounded-bl-none rounded-br-none rounded-tl-none rounded-tr-none">
                    <div className="box-border flex flex-row justify-start items-center self-auto grow-0 rounded-bl-none rounded-br-none rounded-tl-none rounded-tr-none">
                        <div>
                            <div className="box-border flex flex-row justify-start items-center self-auto grow-0 rounded-bl-none rounded-br-none rounded-tl-none rounded-tr-none">
                                <span className="line-clamp-3 leading-base-clamp min-w-0 mb-0 max-w-full mt-0 text-sm mr-0 font-semibold font-sans break-words whitespace-pre-line ml-0">phuonnngminh</span>
                            </div>
                        </div>
                        <div className="rounded-bl-none box-border flex items-center rounded-br-none flex-row self-auto justify-start rounded-tl-none rounded-tr-none text-gray-500">
                            <span className="pt-0 mt-0 mb-0 pb-0 mr-1 ml-1 pl-0 pr-0 break-words inline-block ">
                                <span className="line-clamp-3 leading-base-clamp min-w-0 mb-0 max-width-full text-sm font-normal mr-0 font-sans ml-0 break-words">•</span>
                            </span>
                            <div className="rounded-bl-none flex flex-col box-border rounded-br-none items-stretch self-auto justify-start ml-0 grow-0 rounded-tr-none rounded-tl-none" >
                                <span className="font-normal break-words mr-0 block">1h</span>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-bl-none box-border flex items-center rounded-br-none flex-row justify-start grow-0 rounded-tl-none rounded-tr-none">
                        <span className="min-w-0 mb-0 w-full mt-0 font-normal mr-0 break-words block font-sans text-xs"></span>
                    </div>
                </div>
                <div className="w-full box-border flex items-strectch self-auto grow-0 rounded-bl-none rounded-br-none rounded-tl-none rounded-tr-none">
                    <div className="box-border flex items-streach flex-row self-auto  grow-0 min-w-0 min-h-0 rounded-bl-none rounded-br-none rounded-tl-none rounded-tr-none ">
                        <span className="line-clamp-3 leading-base-clamp min-w-0 mb-0 font-normal mr-0 break-words block font-sans text-xs ml-0 ">
                            <div className="rounded-bl-none flex flex-col box-border rounded-br-none rounded-tl-none rounded-tr-none items-center justify-start">
                                <a href="" className="w-full pt-0 mt-0 mb-0 rounded-b-none border-x-0 border-y-0 inline box-border">
                                    <span className="leading-4 min-w-0 mb-0 w-full mt-0 inline font-normal mr-0 break-words font-sans font-xs ml-0">
                                        <div className="w-full flex ">
                                            <span>aygun__gahramanova
                                                <span className="mr-1 ml-1 break-words inline-block ">
                                                    <span className="break-words font-sans min-w-0 mb-0 leading-4">•</span>
                                                </span>
                                                Original audio
                                            </span>
                                        </div>
                                    </span>
                                </a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <button><img src={MoreOptions} alt="More" /></button>
            </div>

        </div>
    </div>;
}
