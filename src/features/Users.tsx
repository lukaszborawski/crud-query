import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../api/usersApi'

const Users = () => {
  const { data: users, isLoading, error } = useQuery(
    ["users"],
    getUsers
  )

  return (
    <>
      {isLoading && "Loading..."}
      {error && "Error. Try again later"}
      {users &&
        users?.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.description}</p>

            </div>
          )
        })}
    </>
  )
}

export default Users