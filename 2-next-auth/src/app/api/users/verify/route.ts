import connect from "@/db/db";
import User from '@/model/userModel';
import { NextRequest, NextResponse } from 'next/server'

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const {token} = reqBody
        console.log(token);

        const user = await User.findOne({verifyToken: token, verifyTokenExpiry: {$gt: Date.now()}})     // expiry date should be greater than now
        if (!user) {
            return NextResponse.json({error: "Invalid token", status: 400})
        }
        console.log(user);

        user.isVerified= true
        user.verifyToken = ""
        user.verifyTokenExpiry= ""
        await user.save()

        return NextResponse.json({message: "User verified", status: 200})
        
    } catch (error: any) {
        return NextResponse.json({error: error.message, status: 500})
    }
}