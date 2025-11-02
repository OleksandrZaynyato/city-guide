import { NextResponse } from 'next/server'
import { places } from '../route'

export async function GET(
    _request: Request,
    context: { params: Promise<{ id: string }> } // 👈 тут вказуємо Promise
) {
    const { id } = await context.params; // 👈 додаємо await
    const place = places.find((p) => p.id === Number(id));

    if (!place) {
        return NextResponse.json({ error: "Place not found" }, { status: 404 });
    }

    return NextResponse.json(place);
}
