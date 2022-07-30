import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { useMemo } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UserContext = createContext();

const UseHooks = () => {
  const [user, setUser] = useState("PLEASE SUBMIT");
  const [booolean, setbooolean] = useState(false);

  const refName = useRef(null);
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const handleSubmit = (e) => {
    //console.log(refContainer.current);
    e.preventDefault();
    setUser("THANK YOU");
  };
  const d = useRef({ a: 1 });
  const a = useMemo(() => {
    return { b: 1 };
  }, []);
  let c = 1;
  useEffect(() => {
    console.log("first", a.b);
  }, [a]);
  const label = document.querySelector("#password-label");

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <h1 id="h1">FORM</h1>
          <br></br>
          <label id="name-label" htmlFor="inputName">
            Name:{" "}
          </label>
          <input type="text" ref={refName} />
        </div>
        <div>
          <label id="email-label" htmlFor="inputEmail">
            Email:{" "}
          </label>
          <input type="text" ref={refEmail} />
        </div>
        <div>
          <label id="password-label" htmlFor="inputPassword">
            Password:{" "}
          </label>
          <input type="password" ref={refPassword} />
        </div>
        <br></br>
        <button
          id="submit-label"
          type="submit"
          onClick={() => {
            setbooolean(!booolean);
          }}
        >
          Submit
        </button>
        <UserContext.Provider value={user}>
          <Component1 />
        </UserContext.Provider>
      </form>
    </>
  );
};

const Component1 = () => {
  return (
    <>
      <Component2 />
    </>
  );
};

const Component2 = () => {
  return (
    <>
      <Component3 />
    </>
  );
};

const Component3 = () => {
  const user = useContext(UserContext);
  return <p id="user">{user}</p>;
};

export default UseHooks;
