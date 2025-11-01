import {NextResponse} from "next/server";
import {places} from "@/app/api/places/route";
import {Place} from "@/types/Place.type";

export async function GET(
    request: Request,
    context: { params: { id: string } }
) {
    const id = parseInt(context.params.placeId, 10)
    const place = places.find((p) => p.id === id)

    if (!place) {
        return NextResponse.json({ error: 'Place not found' }, { status: 404 })
    }
    return NextResponse.json<Place>(place)
}