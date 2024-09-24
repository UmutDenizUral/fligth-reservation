import prisma from '@/libs/prismadb'
import { NextResponse } from "next/server";

export async function DELETE(request: Request,{ params }: { params: { id: string } }) {
    
    const flight = await prisma.flight.delete({
        where:{
            id: params.id
        }
    });

    return NextResponse.json(flight)
}
