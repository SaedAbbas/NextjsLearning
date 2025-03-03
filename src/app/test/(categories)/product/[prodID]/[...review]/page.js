import { notFound } from 'next/navigation'
import React from 'react'

export const generateMetadata = ({params}) => {
    return{
    title : {
        absolute:`review [${params.review[1]}]`
    }

    }
}

const review = ({params}) => {
    if(params.review[0] > 10){
        return notFound()
    }
  return (
    <div>
       <h1> product number [{params.prodID}] with review number [{params.review[1]}] </h1>
      
    </div>
  )
}

export default review
