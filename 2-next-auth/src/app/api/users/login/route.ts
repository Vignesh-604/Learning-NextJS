import connect from "@/db/db";
import User from '@/model/userModel';
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()            // the request body is a promise
        const { email, password } = reqBody

        const user = await User.findOne({ email })
        if (user) {
            return NextResponse.json({ error: "User not found.", status: 404 })
        }

        const validPassword = await bcrypt.compare(password, user.password)
        if (validPassword) {
            return NextResponse.json({error: "Password didn't match", status: 400})
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({ message: "User logged in!", status: 200 })

        response.cookies.set("token", token, {httpOnly: true})      // only server can manipulate

        return response

    } catch (error: any) {
        return NextResponse.json({ error: error.message, status: 500 })
    }
}