import './App.css'
import Users from './Users'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  )
}

export default App
