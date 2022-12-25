import { useContext, createContext, useEffect } from 'react'

import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updatePassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../firebase'
import { getDatabase, ref, set } from 'firebase/database'

import { setCurrentUser } from '../store/user/userSlice'
import { store } from '../store'
import { revertAll } from '../store/generalActions'

export const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const writeUserData = async (userId, name, email, password) => {
    const db = getDatabase()
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      password: password,
    })
  }

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserName = (username) => {
    return updateProfile(auth.currentUser, {
      displayName: username,
    })
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUserPassword = (password) => {
    return updatePassword(auth.currentUser, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    console.log('проверяю')
    onAuthStateChanged(auth, (currentUser) => {
      //console.log(currentUser)
      if (currentUser) {
        store.dispatch(
          setCurrentUser({
            login: currentUser.displayName,
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
    writeUserData,
    login,
    signup,
    updateUserPassword,
    updateUserName,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
