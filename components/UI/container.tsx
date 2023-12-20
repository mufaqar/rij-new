import React, { FC } from 'react'

const Container: FC<any> = ({children, className}) => {
  return (
    <div className={`${className} container mx-auto px-2`}>{children}</div>
  )
}

export default Container