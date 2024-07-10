import { promises as fs } from "fs";

export async function GET() {
    const jsonData = await fs.readFile('./app/api/population/data.json', 'utf8');
    const data = JSON.parse(jsonData);
    return Response.json({ data });
}