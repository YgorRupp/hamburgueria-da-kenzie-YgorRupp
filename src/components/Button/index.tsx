import React from "react"


interface iButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: iButtonProps) => {

  return (

    <button className="subTitle one">{children}</button>
    
  )

}
