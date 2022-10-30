import {Link} from "react-router-dom";

const Navbar = () => {
  return (
   <nav className='flex bg-gray-100 font-light text-sm space-x-2 p-4 justify-end'>
     <Link to='/' className='hover:font-semibold'>Home</Link>
     <Link to='/pirate' className='hover:font-semibold'>Pirate Drunk</Link>
     <Link to='/customHook' className='hover:font-semibold'>CustomHook</Link>
     <Link to='/todoapp' className='hover:font-semibold'>Todo App</Link>
   </nav>
  )
}
export default Navbar