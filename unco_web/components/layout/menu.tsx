'use client';
import { useState } from "react";

export default function Menu() {
    return (
        <div>
            <div className="border-b-2 ml-12 mr-10">
                <p className="w-3/4 mt-[40%] pb-5">Uncommons is a researcher garden for decentralized thought and techno-social philosophies.</p>
            </div>
            <div className="mt-[20%] ml-12 grid space-y-2">
                <a href="/home" className="text-2xl">About</a>
                <a href="/stories" className="text-2xl">Stories</a>
                <a href="/lab" className="text-2xl">Lab</a>
                <a href="/joinus" className="text-2xl">Join Us</a>
                <a href="" className="text-2xl">Connect Wallet</a>
            </div>

            <div className="mt-[20%] ml-12 grid space-y-2">
                <p className="border-b-2 mr-10 pb-2">Find Us</p>

                <div className="border-b-2 mr-10 pb-2 flex justify-between">
                    <span>Notion</span>
                    <a href="https://uncommons.notion.site" target="_blank" rel="noopener noreferrer">
                    <span className="text-gray-400">&#8599;</span>
                    </a>
                </div>

                <div className="border-b-2 mr-10 pb-2 flex justify-between">
                    <span>Telegram</span>
                    <a href="https://telegram.me/theuncommons" target="_blank" rel="noopener noreferrer">
                    <span className="text-gray-400">&#8599;</span>
                    </a>
                </div>

                <div className="border-b-2 mr-10 pb-2 flex justify-between">
                    <span>X.com</span>
                    <a href="https://x.com/Un__commons" target="_blank" rel="noopener noreferrer">
                    <span className="text-gray-400">&#8599;</span>
                    </a>
                </div>

                <div className="flex justify-between mr-10">
                    <span>Blog</span>
                    <a href="https://blog.uncommons.cc" target="_blank" rel="noopener noreferrer">
                    <span className="text-gray-400">&#8599;</span>
                    </a>
                </div>
            </div>
        </div>
    );
}