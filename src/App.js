import { useEffect } from "react"
import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Filter from "./components/Filter"
import Notification from "./components/Notification"
import { useDispatch } from "react-redux"
import anecdoteService from "./services/anecdotes"
import { initializeAnecdotes } from "./reducers/anecdoteReducer"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    anecdoteService.getAll().then((anecdotes) => {
      dispatch(initializeAnecdotes(anecdotes))
    })
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
      <Filter />
    </div>
  )
}

export default App
