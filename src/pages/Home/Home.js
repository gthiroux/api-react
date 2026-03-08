import { useState } from "react";
import apiFecth from "../../utils/apiFetch";
import "./Home.scss";
const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState(null);
  const register = async (e) => {
    e.preventDefault();
    const res = await apiFecth("auth/login", "POST", null, {
      username: username,
      password: password,
    });
    setResult(res.data);
  };
  return (
    <div className="Home">
      <form onSubmit={register}>
        <label htmlFor="username">Name</label>
        <input
          id="username"
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Connection" />
      </form>
      {result && (
        <div className="result-api">
          {result.message ? (
            <p>{result.message}</p>
          ) : (
            <pre className="result-api__text">
              {JSON.stringify(
                result,
                [
                  "username",
                  "email",
                  "firstName",
                  "lastName",
                  "gender",
                  "image",
                ],
                3,
              )}
            </pre>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
