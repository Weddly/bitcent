/* eslint-disable react-hooks/exhaustive-deps */
import services from "@/logic/core";
import UserLogin from "@/logic/core/user/User";
import { createContext, useEffect, useState } from "react";

interface AuthProps {
    loading: boolean,
    user: UserLogin | null,
    loginGoogle: () => Promise<UserLogin | null>
    logout: () => Promise<void>
    updateUser: (newUser: UserLogin) => Promise<void>
}

const AuthContext = createContext<AuthProps>({
    loading: true,
    user: null,
    loginGoogle: async () => null,
    logout: async () => {},
    updateUser: async () => {}
})

export function AuthProvider(props: any) {

    const [loading, setLoading] = useState<boolean>(true)
    const [user, setUser] = useState<UserLogin | null>(null)


    useEffect(() => {
        const cancel = services.user.authMonitoring((user) => {
            setUser(user)
            setLoading(false)
        })

        return () => cancel()

    }, [])

    async function updateUser(newUser:UserLogin) {
        if(user && user.email !== newUser.email) return logout()
        if(user && newUser && user.email === newUser.email) {
            await services.user.save(newUser)
            setUser(newUser)
        }
    }


    async function loginGoogle() {
        const userLogin = await services.user.loginGoogle()
        setUser(userLogin)
        return userLogin
    }

    async function logout() {
        await services.user.logout()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            loading,
            user,
            loginGoogle,
            logout,
            updateUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext