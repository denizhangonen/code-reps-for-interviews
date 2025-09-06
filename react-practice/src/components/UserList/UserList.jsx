import { useEffect, useState, useReducer, lazy, Suspense } from "react";

const LazyDetails = lazy(() => import('./LazyDetails/LazyDetails'))

const url = 'https://jsonplaceholder.typicode.com/users';

const reducer = (state, action) => {
  switch (action.type) {
    case 'set_users': {
      return {
        ...state,
        users: action.payload
      }
    }
    case 'loading_true': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'loading_false': {
      return {
        ...state,
        isLoading: false
      }
    }
    case 'set_error': {
      return {
        ...state,
        errorMessage: action.payload
      }
    }
    default: {
      throw new Error('Unknown action:' + action.type)
    }
  }



}

const UserList = () => {
  const [state, dispatch] = useReducer(reducer, { users: [], isLoading: false, errorMessage: null })

  const { users, isLoading, errorMessage } = state;

  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState(false)
  // const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      // setIsLoading(true)
      dispatch({ type: 'loading_true' })
      try {
        const delay = (ms) => new Promise(res => setTimeout(res, ms));

        await delay(2000);           // wait 2s before the request
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('response status:', response.status)
        }
        const result = await response.json();
        // setUsers(result);
        dispatch({ type: 'set_users', payload: result })
      } catch (e) {
        // setErrorMessage('Error loading users')
        dispatch({ type: 'set_error', payload: 'Error loading users' })
      } finally {
        // setIsLoading(false)
        dispatch({ type: 'loading_false' })
      }
    }
    fetchUsers();
  }, [])

  return <div>
    <div>
      <h2>
        User List
      </h2>
    </div>
    <div>
      {errorMessage && errorMessage}
      {isLoading && 'Loading…'}
      {!isLoading && users.length > 0 && (
        <ul>
          {users.map(u => <li key={u.id}>{u.name}</li>)}
        </ul>
      )}
    </div>
    {!isLoading && users.length > 0 && (
      <Suspense fallback={<p>Loading...</p>} >
        <LazyDetails />
      </Suspense>)
    }

  </div>
}

export default UserList;