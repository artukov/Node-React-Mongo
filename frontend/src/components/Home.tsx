import { useUser } from "../context/userContext";

export const Home = () => {
  const { user } = useUser();

    return (
      <div>
        {user && (
          <h1>Hello {user.firstName} {user.lastName}</h1>
        )}
    </div>
    )
  }