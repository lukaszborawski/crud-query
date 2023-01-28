import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getUsers, deleteUser } from '../api/usersApi'

const Users = () => {
  const queryClient = useQueryClient()
  const { data: users, isLoading, error } = useQuery(
    ["users"],
    getUsers
  )

  const deleteUserMutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"])
    }
  })

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
              <button onClick={() => deleteUserMutation.mutate({ id: user.id })}>Delete</button>
            </div>
          )
        })}
    </>
  )
}

export default Users