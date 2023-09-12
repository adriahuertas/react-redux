import { useSelector, useDispatch } from "react-redux"
import { updateAnecdote, voteAnecdote } from "../reducers/anecdoteReducer"
import {
  deleteNotification,
  setNotification,
} from "../reducers/notificationReducer"
import { clear } from "@testing-library/user-event/dist/clear"
import { useEffect } from "react"

export const AnecdoteList = () => {
  const dispatch = useDispatch()
  let notificationTimeout
  const anecdotes = useSelector((state) => {
    console.log(state)
    if (state.filter === "") {
      return state.anecdotes
    }
    const filteredAnecdotes = state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    )
    return filteredAnecdotes
  })

  const handleVote = (id) => {
    const anecdoteToUpdate = anecdotes.find((a) => a.id === id)
    dispatch(
      updateAnecdote(id, {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1,
      })
    )

    dispatch(
      setNotification(
        `you voted '${anecdotes.find((a) => a.id === id).content}'`
      )
    )
    notificationTimeout = setTimeout(() => {
      dispatch(deleteNotification())
    }, 5000)
  }

  useEffect(() => {
    return () => {
      clearTimeout(notificationTimeout)
    }
  }, [])

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes
        .toSorted((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </>
  )
}

export default AnecdoteList
