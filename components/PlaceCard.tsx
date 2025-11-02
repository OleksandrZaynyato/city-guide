"use client";

import Link from "next/link";
import {Place} from "@/types/Place.type";
import React from "react";

export const PlaceCard: React.FC<Place> = ({id, name, shortDescription, longDescription, image, timeFromCenter}) => {
    return (
        <div
            key={id}
            className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-amber-900 mb-2">{name}</h2>
                    <p className="text-gray-700 text-sm mb-3">{shortDescription}</p>
                </div>
                <div className="mt-auto">
                    <p className="text-gray-600 text-sm mb-3">⏱ {timeFromCenter}</p>
                    <Link href={`/place/${id}`}>
                        <div className=" bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline w-fit">
                            Детальніше
                        </div>
                    </Link>


                </div>
            </div>

        </div>
    )
}