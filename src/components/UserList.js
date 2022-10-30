import {useFetch} from "../customHook/useFetch";

const UserList = () => {

  const {data} = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
   <div className='mt-4 p-2'>
     <h1 className='text-center p-2'>Fonte JsonPlaceHolder</h1>
     <ul className='grid gap-2 grid-cols-3 grid-rows-3'>
       {data && data.map(user => (
        <div key={user.id} className='mb-2 bg-gray-100 p-2 rounded-lg'>
          <h1 className='font-bold uppercase'>{user.name}</h1>
          <h2 className='text-xs'>Username: {user.username}</h2>
          <p className='text-xs'> Address: {user.address?.street}</p>
          <p className='text-xs'>Contact: {user.phone}</p>

          <div className='flex flex-col font 2-xs'>
            <small>Azienda : {user.company?.name}</small>
            <small>PayoffAziendale: {user.company?.catchPhrase}</small>
          </div>
        </div>
       ))}
     </ul>
   </div>
  )
}
export default UserList