'use client';
import { useState } from "react";

export default function Menu() {
    return (
        <div className="px-[10%]">
            <div className="border-b-2 ">
                <p className="w-3/4 mt-[35%] pb-5">Uncommons is a researcher garden for decentralized thought and techno-social philosophies.</p>
            </div>
            <div className="mt-[10%] grid space-y-2">
                <a href="/home" className="text-xl">About</a>
                <a href="/stories" className="text-xl">Stories</a>
                <a href="/lab" className="text-xl">Lab</a>
                <a href="/joinus" className="text-xl">Join Us</a>
                <a href="" className="text-xl">Connect Wallet</a>
            </div>

            <div className="mt-[20%] grid space-y-2">
                <p className="border-b-2 pb-2">Find Us</p>

                <div className="border-b-2 pb-2 flex justify-between">
                    <span>Notion</span>
                    <a href="https://uncommons.notion.site" target="_blank" rel="noopener noreferrer">
                    <span className="text-gray-400">&#8599;</span>
                    </a>
                </div>

                <div className="border-b-2 pb-2 flex justify-between">
                    <span>Telegram</span>
                    <a href="https://telegram.me/theuncommons" target="_blank" rel="noopener noreferrer">
                    <span className="text-gray-400">&#8599;</span>
                    </a>
                </div>

                <div className="border-b-2 pb-2 flex justify-between">
                    <span>X.com</span>
                    <a href="https://x.com/Un__commons" target="_blank" rel="noopener noreferrer">
                    <span className="text-gray-400">&#8599;</span>
                    </a>
                </div>

                <div className="flex justify-between">
                    <span>Blog</span>
                    <a href="https://blog.uncommons.cc" target="_blank" rel="noopener noreferrer">
                    <span className="text-gray-400">&#8599;</span>
                    </a>
                </div>
            </div>
        </div>
    );
}