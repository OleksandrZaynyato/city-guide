'use client';

interface PlaceMapProps {
    mapUrl: string;
}

export const PlaceMap: React.FC<PlaceMapProps> = ({ mapUrl }) => {
    return (
        <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-3">📍 Розташування</h2>
            <iframe
                src={mapUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl shadow-md"
            ></iframe>
        </div>
    );
};
