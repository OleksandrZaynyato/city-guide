"use client";

import React from "react";

const Header:React.FC = () => {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-shadow-gray-900">City Guide Львова 🏙️</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="/" className="text-gray-700 hover:text-blue-500 transition-colors">
                                Головна
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;