"use client";

import {PlaceCard} from "@/components/PlaceCard";
import {Place} from "@/types/Place.type";
import React, { useEffect, useState } from 'react';

export default function HomeClient(){
    const [places, setPlaces] = useState<Place[]>([]);

    useEffect(() => {
        const getPlaces = async () => {
            const res = await fetch('/api/places');
            const data = await res.json();
            setPlaces(data);
        };
        getPlaces();
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-zinc-800 mb-10">
                    City Guide Львова
                </h1>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {places.map((place) => (
                        <PlaceCard key={place.id} {...place}/>
                    ))}
                </div>
            </div>
        </main>
    );
}

