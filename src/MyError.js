import React from 'react'

export default function MyError({children}) {
  
    return (
        <div style={{color:"red"}}>
            this is my :{children}
        </div>
    )
}
