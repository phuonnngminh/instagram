import Avatar from "react-avatar";
import avt from "../../assets/Profile.jpg";

interface StoryItemProps {
    size: string;
}

export function StoryItem() {
    return (<div>
        <div className="pb-2 mb-6 border-b border-elevated-separator border-t rounded-tr-lg rounded-tl-lg border-b-0 border-t-0">
            <div className="flex flex-col items-stretch" style={{ height: '108px' }}>
                <div className="align-baseline">
                    <div className="h-full flex flex-row items-stretch">
                        <div style={{  height: '108px' }} className="pt-1 pb-0 flex flex-col box-border pl-1 pr-1">
                            <button style={{ width: '64px' }} className="px-0 flex flex-col self-center text-center items-center">
                                <div>
                                    <span style={{ width: '56px', height: '56px', borderBottomLeftRadius: '50%', borderBottomRightRadius: '50%', borderTopLeftRadius: '50%', borderTopRightRadius: '50%' }} className="box-border text-center">
                                        <div className="inline-flex rounded-full bg-gradient-to-r from-yellow-500 via-red-500 to-purple-400">
                                            <div className="mx-0.5 my-0.5 bg-white rounded-full px-0.5 py-0.5 w-full">
                                                <Avatar
                                                    src={avt}
                                                    round={true}
                                                    alt="Avatar"
                                                    size = "56"
                                                />
                                            </div>
                                        </div>
                                    </span>
                                </div>
                                <div className="text-black font-normal text-xs text-center">
                                    <div style={{ letterSpacing: '.01em',  maxWidth: '74px' }} className="text-center pl-0.5 pr-0.5 box-border">
                                        <p>lpm</p>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <button className="absolute right-0 top-1/2 transform -translate-y-1/2 px-0 pb-3 ml-2 mr-2">
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}
