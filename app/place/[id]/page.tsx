'use client';

import React, { useEffect, useState } from 'react';
import { Place } from '@/types/Place.type';
import { PlaceMap } from '@/components/PlaceMap';
import { useParams } from 'next/navigation';

export default function PlacePage() {
    const params = useParams(); // отримує { id: string }
    const [place, setPlace] = useState<Place | null>(null);

    useEffect(() => {
        if (!params?.id) return;

        fetch(`/api/places/${params.id}`)
            .then((res) => res.json())
            .then(setPlace)
            .catch(console.error);
    }, [params?.id]);

    if (!place) return <p>Завантаження...</p>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-10 min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-6">{place.name}</h1>

            <img
                src={place.image}
                alt={place.name}
                className="w-full h-80 object-cover rounded-2xl shadow-md mb-6"
            />

            <div className="space-y-4 text-gray-700">
                <p className="text-lg font-semibold">{place.shortDescription}</p>
                <p className="text-base leading-relaxed">{place.longDescription}</p>
                <p className="text-sm italic text-gray-600">
                    ⏱ Час від центру: {place.timeFromCenter}
                </p>
            </div>

            <PlaceMap mapUrl={place.mapUrl} />
        </div>
    );
}
