import React from "react"
export const ErrorMessage = ({message,className})=>{
if(!message)return null;
else return <p className={className}>{message}</p>
}