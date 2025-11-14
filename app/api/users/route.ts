import { NextResponse } from "next/server";

const DB = [
    {id: 1, name: "daisy"},
    {id: 2, name: "tom"},
    {id: 3, name: "michael"},
]

export async function GET(request: Request) {
    const searchParams = new URL(request.url).searchParams;
    const name = searchParams.get("name") as string;

    return NextResponse.json({
        users: DB.filter((user) => user.name.includes(name))
    });
}
