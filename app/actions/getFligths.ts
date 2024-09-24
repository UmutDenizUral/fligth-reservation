import prisma from '@/libs/prismadb';

export async function getFligths() {

    try {
        const flights = await prisma.flight.findMany({
            select: {
                id: true,
                apiID: true,
                flightName: true,
                flightNumber: true,
                prefixICAO: true,
                scheduleDateTime:true,
                estimatedLandingTime: true,
                flightDirection: true,
                route: true
            
            }
        });
        return flights;
    } catch (error) {
        console.error("Failed to fetch products", error);
        return null;
    }
}
