import { notFound } from "next/navigation";

interface Place {
    id: number;
    name: string;
    shortDescription: string;
    longDescription: string;
    image: string;
    timeFromCenter: string;
    mapUrl: string;
}

export default async function PlacePage({
                                            params,
                                        }: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/places/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) return notFound();

    const place: Place = await res.json();

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

            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-3">📍 Розташування</h2>
                <iframe
                    src={place.mapUrl}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl shadow-md"
                ></iframe>
            </div>
        </div>
    );
}
