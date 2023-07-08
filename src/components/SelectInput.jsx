import { useState } from 'react'
import Select from 'react-select'
import Avatar1 from '../assets/Avatar1.webp'
import Avatar2 from '../assets/Avatar2.webp'
import Avatar3 from '../assets/Avatar3.webp'
import Avatar4 from '../assets/Avatar4.webp'
import Avatar5 from '../assets/Avatar5.webp'


const options = [
  { value: Avatar1, label: 'Avatar 1' },
  { value: Avatar2, label: 'Avatar 2' },
  { value: Avatar3, label: 'Avatar 3' },
  { value: Avatar4, label: 'Avatar 4' },
  { value: Avatar5, label: 'Avatar 5' },
]


export const MyComponent = () => {
    const [ imageAvatar, setImageAvatar] = useState("")
    const handleSelectChange = (e) => {
        setImageAvatar(e.value)
    }

    return (
        <div>
            <Select options={options} 
            onChange={handleSelectChange}/>
            <p className='my-6'>Tu avatar: </p>
            <div className='flex justify-center'>
                <img className=' rounded-lg my-6 w-[100px]' src={imageAvatar} />
            </div>
            
        </div>
    
)}