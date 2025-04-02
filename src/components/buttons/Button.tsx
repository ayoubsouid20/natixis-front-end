import { CSSProperties } from 'react'
import  './buttons.css'
type ButtonTypeProps = {
  clickHandler? :()=> void
  title: string
  extraStyle?: CSSProperties
  type?: string
}
const Button = ({title, clickHandler, extraStyle}:ButtonTypeProps) => {
  return (
    <button onClick={()=> clickHandler?.()} style={extraStyle}>{title}</button>
  )
}

export default Button