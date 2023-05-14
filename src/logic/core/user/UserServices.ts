import Authentication, { CancelMonitor, UserMonitor } from "@/logic/firebase/auth/Authentication";
import Collection from "@/logic/firebase/db/Collection";
import UserLogin from "./User";

export default class UserServices{
    private _auth = new Authentication()
    private _collection = new Collection()

    authMonitoring(observer: UserMonitor) : CancelMonitor {
        return this._auth.monitoring(async user => {
            observer(user ? {
                ...user,
                ...await this.check(user.email)
            }: null)
        })
    }

    logout(): Promise<void> {
        return this._auth.logout()
    }

    async loginGoogle(): Promise<UserLogin | null> {
        const user = await this._auth.loginGoogle()
        if(!user) return null

        let userDB = await this.check(user.email)
        if(!userDB) userDB = await this.save(user)

        return { ...user, ...userDB}
    }

    async save(user: UserLogin) {
        return await this._collection.save(
            'users', user, user.email
        )
    }

    async check(email: string) {
        return await this._collection.getById('users', email)
    }

    

}