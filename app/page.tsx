"use client";

import Link from "next/link";
import {PlaceCard} from "@/components/PlaceCard";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 py-12 px-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-amber-800 mb-10">
                    City Guide Львова 🏙️
                </h1>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/*{places.map((place) => (*/}
                    {/*    <PlaceCard key={place.id} {...place}/>*/}
                    {/*))}*/}
                </div>
            </div>
        </main>
    );
}
