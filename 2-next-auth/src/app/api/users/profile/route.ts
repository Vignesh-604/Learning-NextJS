import connect from "@/db/db";
import User from '@/model/userModel';
import { NextRequest, NextResponse } from 'next/server'
import tokenData from "@/helpers/tokenData";

connect()

export async function GET(request: NextRequest) {
    try {
        const userId = await tokenData(request)

        const user = await User.findById(userId).select(" -password ")
        if (!user) {
            return NextResponse.json({error: "Invalid token (User not found)", status: 404})
        }

        return NextResponse.json({message: "User fetched successfully", status: 200, data: user})

    } catch (error: any) {
        return NextResponse.json({ error: error.message, status: 500 })
    }
}