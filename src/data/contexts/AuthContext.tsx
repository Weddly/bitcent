/* eslint-disable react-hooks/exhaustive-deps */
import UserLogin from "@/logic/core/user/User";
import Authentication from "@/logic/firebase/auth/Authentication";
import { createContext, useEffect, useState } from "react";

interface AuthProps {
    loading: boolean,
    user: UserLogin | null,
    loginGoogle: () => Promise<UserLogin | null>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthProps>({
    loading: true,
    user: null,
    loginGoogle: async () => null,
    logout: async () => {}
})

export function AuthProvider(props: any) {

    const [loading, setLoading] = useState<boolean>(true)
    const [user, setUser] = useState<UserLogin | null>(null)

    const auth = new Authentication()

    useEffect(() => {
        const cancel = auth.monitoring((user) => {
            setUser(user)
            setLoading(false)
        })

        return () => cancel()

    }, [])


    async function loginGoogle() {
        const user = await auth.loginGoogle()
        setUser(user)
        return user
    }

    async function logout() {
        await auth.logout()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            loading,
            user,
            loginGoogle,
            logout,
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext