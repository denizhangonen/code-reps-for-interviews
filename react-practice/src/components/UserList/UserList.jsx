import { useEffect, useState } from "react";

const url = 'https://jsonplaceholder.typicode.com/users';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('response status:', response.status)
        }
        const result = await response.json();
        setUsers(result);
      } catch (e) {
        setErrorMessage('Error loading users')
      } finally {
        setIsLoading(false)
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


  </div>
}

export default UserList;