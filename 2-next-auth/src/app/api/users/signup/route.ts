import connect from "@/db/db";
import User from '@/model/userModel';
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from "bcryptjs";
import sendEmail from "@/helpers/mailer";

connect();      // Need to connect to db for every request

// Functions are named as the req protocol to be used
export async function POST(request: NextRequest) {
    try {
        // No middlewares required like in express
        const reqBody = await request.json()            // the request body is a promise
        const {username, email, password} = reqBody
        console.log(reqBody)        // validation
        
        const user = await User.findOne({email})
        if (user) {
            return NextResponse.json({error: "User already exists.", status: 400})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)        // encrypting password

        const newUser = new User({username, email, hashedPassword})     // creating new user object

        const savedUser = await newUser.save()                          // User.create() will work too

        // send verification mail
        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({message: "User registered successfully", status: 201, data: savedUser})

    } catch (error: any) {
        return NextResponse.json({error: error.message, status: 500})
    }
}