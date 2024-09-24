import { NextResponse } from 'next/server';
import https from 'https';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const arrival = searchParams.get('arrival');
    const departure = searchParams.get('departure');
    const fromDate = searchParams.get('fromDate');
    const toDate = searchParams.get('toDate');

    const options = {
        method: 'GET',
        hostname: 'api.schiphol.nl',
        path: `/public-flights/flights?flightDirection=A&includedelays=false&fromDateTime=${fromDate}T00:00&toDateTime=${toDate}T00:00&page=0&sort=%2BscheduleTime`, // Sorgu parametrelerini buraya ekle
        headers: {
            'resourceversion': 'v4',
            'app_id': 'b4cbaeb5',
            'app_key': '431adb970184239bdcd413595eebd2ad',
            'Accept': 'application/json'
        }
    };

    return new Promise((resolve, reject) => {
        const request = https.request(options, (response) => {
            let chunks: Buffer[] = [];

            response.on('data', (chunk) => {
                chunks.push(chunk);
            });

            response.on('end', () => {
                const body = Buffer.concat(chunks);
                const data = JSON.parse(body.toString());
                resolve(NextResponse.json(data)); 
            });
        });

        request.on('error', (error) => {
            console.error('Error fetching data:', error);
            reject(NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 }));
        });

        request.end();
    });
}
