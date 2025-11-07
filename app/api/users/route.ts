import { NextResponse } from "next/server";

export async function GET(request: Request) {
    return NextResponse.json({
        users: [
            {id: 1, name: "daisy"},
            {id: 2, name: "tom"},
            {id: 3, name: "michael"},
        ]
    })
}
