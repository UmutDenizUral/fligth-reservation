import prisma from '@/libs/prismadb'
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    console.log("!!!!!!!!!!!!"+body )
    const { id, apiID, flightName, flightNumber, prefixICAO, estimatedLandingTime, flightDirection, route,scheduleDateTime } = body;

    const flight = await prisma.flight.create({
        data: {
            id: id,
            apiID: apiID,
            flightName: flightName,
            flightNumber: String(flightNumber),
            prefixICAO: prefixICAO,
            estimatedLandingTime: estimatedLandingTime,
            flightDirection: flightDirection,
            scheduleDateTime:scheduleDateTime,
            route: route
        }
    });

    return NextResponse.json(flight)
}
