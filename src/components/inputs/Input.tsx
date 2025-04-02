import './input.css'

type InputProps = {
    label: string
    value: string | number
    placeholder: string
    onchangeFunc:(value: string) => void
    type?: string
}

const Input = ({type = "text", label, value, placeholder, onchangeFunc}: InputProps) => {
    return (
        <div className="input-container">
            <label htmlFor="user-input">{label}</label>
            <input type={type} id="user-input" placeholder={placeholder} 
                onChange={(e)=> onchangeFunc(e.target.value)}
                value={value}
            />
        </div>
    )
}

export default Input