import jwt from 'jsonwebtoken'
import { useId } from 'react'

export const generateToken = (userId) =>{
    return jwt.sign({id: userId}, process.env.JWT_SECRETE,{
        expiresIn:"15m",
    })
}

export const generateRefreshToken = (userId)=>{
    return jwt.sign({id: useId}, process.env.JWT_REFRESH_SECRETE,{
        expiresIn:"7d",
    })
}