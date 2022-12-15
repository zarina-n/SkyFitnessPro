import { useContext, createContext, useEffect } from 'react'

import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../firebase'

import { setCurrentUser } from '../store/user/userSlice'
import { store } from '../store'
import { revertAll } from '../store/generalActions'

const AuthContext = createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function updateUserPassword(password) {
    return updatePassword(auth.currentUser, password)
  }

  function logout() {
    return signOut(auth)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      if (currentUser) {
        store.dispatch(
          setCurrentUser({
            email: currentUser.email,
            token: currentUser.accessToken,
            id: currentUser.uid,
          })
        )
      } else {
        store.dispatch(revertAll())
      }
    })
  }, [])

  const value = {
    login,
    signup,
    updateUserPassword,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
