import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest ){
    console.log("API Route Hit :::", req.body);

    return NextResponse.json({status:200, success:true});
    
}