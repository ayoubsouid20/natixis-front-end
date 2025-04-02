import { useNavigate } from 'react-router'
import Button from '../../../components/buttons/Button'
import './greeting-section.css'

const GreetingSection = () => {
  const navigate = useNavigate()
  return (
    <div>
        <h1 className='greeting-title'>Natixis Products</h1>
        <h3 className='greeting-description'>where you find your favorites Products</h3>

        <div style={{
            textAlign:'center'
        }}>
            <Button title='Explore Our Products' clickHandler={()=> navigate('/login')}/>
        </div>
    </div>
  )
}

export default GreetingSection