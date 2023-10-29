import { useDispatch } from 'react-redux'
import { setCategory } from '../redux/slices/HomeApiSlice'


const Category = ({ title, categoryCode }) => {
  const dispatch = useDispatch()
  return (
    <div className=''
    >
      <div className=''>
        {/* <button className='border-4 w-[200px]' onClick={() => dispatch(setCategory(categoryCode))}>
          {title}
        </button> */}
        <ul className='flex flex-wrap '>
          <li className='px-4 text-sm hover:text-blue-600 cursor-pointer' onClick={() => dispatch(setCategory(categoryCode))}>{title}</li>
        </ul>
      </div>
    </div>
  )
}

export default Category
