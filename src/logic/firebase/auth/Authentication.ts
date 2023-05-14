import UserLogin from "@/logic/core/user/User";
import {
    Auth, GoogleAuthProvider, User, getAuth, onIdTokenChanged, signInWithPopup, signOut
} from "firebase/auth"
import { app } from "../config/app";

export type UserMonitor = (user: UserLogin | null) => void
export type CancelMonitor = () => void

export default class Authentication {
    private _auth: Auth
    constructor() {
        this._auth = getAuth(app)
    }

    async loginGoogle(): Promise<UserLogin | null> {
        const resp = await signInWithPopup(this._auth, new GoogleAuthProvider())
        return this.toUserConverter(resp.user)
    }

    logout(): Promise<void> {
        return signOut(this._auth)
    }

    monitoring(notify: UserMonitor): CancelMonitor {
        return onIdTokenChanged(this._auth, async (userFirebase) => {
            const user = this.toUserConverter(userFirebase)
            notify(user)
        })

    }

    private toUserConverter(userFirebase: User | null): UserLogin | null {
           if(!userFirebase?.email) return null
           const altName = userFirebase.email!.split('@')[0]

           return {
                id: userFirebase.uid,
                name: userFirebase.displayName ?? altName,
                email: userFirebase.email,
                imgUrl: userFirebase.photoURL
           }
    }
}