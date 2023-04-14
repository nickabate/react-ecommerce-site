// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

import {
  // auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/Firebase";

import SignUpForm from "../../components/SignUpForm/SignUpForm";

const SignIn = () => {
  //   useEffect(() => {
  //     const reDirect = async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const userDocRef = await createUserDocumentFromAuth(response.user);
  //       }
  //     };
  //     reDirect();
  //   }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
