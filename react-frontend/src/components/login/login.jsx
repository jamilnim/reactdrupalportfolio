import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";

function Login({ onLogin }) {
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      onLogin({
        name: user.displayName,
        email: user.email,
        role: "user", // default role
      });
    } catch (error) {
      console.error(error);
    }
  };

  return <button onClick={handleGoogleLogin}>Login with Google</button>;
}

export default Login;
