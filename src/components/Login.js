import { useRef, useState } from "react";
import Header from "./Header";
import validate from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState({});
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    password.current.value = null;
    email.current.value = null;
    setErrorMessage({});
  };

  const handleSignIn = () => {
    const errMsg = validate(email.current.value, password.current.value);
    setErrorMessage(errMsg);
    if (Object.keys(errMsg).length !== 0) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage({ serverError: `${errorCode} ${errorMessage}` });
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        ></img>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-opacity-80 text-white px-6 py-8 bg-black w-[90%] md:w-3/12  my-36 mx-auto right-0 left-0"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 my-1 w-full bg-gray-700"
          />
        )}
        <p className="text-red-600 h-6 m-1">{errorMessage?.name}</p>
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-1 w-full bg-gray-700"
        />
        <p className="text-red-600 h-6 m-1">{errorMessage?.email}</p>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-1 w-full  bg-gray-700"
        />
        <p className="text-red-600 h-6 m-1">{errorMessage?.password}</p>

        <button
          className="p-4 my-1 bg-red-700 w-full rounded-md"
          onClick={handleSignIn}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-600 h-6">{errorMessage?.serverError}</p>
        <p className="py-2 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
