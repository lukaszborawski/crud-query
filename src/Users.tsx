import { useQuery } from '@tanstack/react-query'

const Users = () => {
  const { isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/users').then(
        (res) => res.json(),
      ),
  })


  return (
    <>
      {isLoading && "Loading..."}
      {error && "Error."}
    </>
  )
}

export default Users