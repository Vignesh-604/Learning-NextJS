import connect from "@/db/db";
import { NextRequest, NextResponse } from 'next/server';

connect()

export async function GET(request: NextRequest) {
    try {
        const response = NextResponse.json({ message: "User logged out!", status: 200 })

        response.cookies.set("token", "", {httpOnly: true, expires: new Date(0)})      // only server can manipulate

        return response

    } catch (error: any) {
        return NextResponse.json({ error: error.message, status: 500 })
    }
}