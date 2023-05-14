import Collection from "@/logic/firebase/db/Collection";
import Transaction from "./Transaction";
import UserLogin from "../user/User";
import DateFormat from "@/logic/utils/Date";

export default class TransactionServices{
    private _collection = new Collection()

    async save(transaction: Transaction, user: UserLogin){
        return this._collection.save(
            `finances/${user.email}/transactions`,
            transaction
        )
    }

    async delete(transaction: Transaction, user: UserLogin){
        return this._collection.delete(
            `finances/${user.email}/transactions`,
            transaction.id
        )
    }

    async get(user: UserLogin) {
        const path = `finances/${user.email}/transactions`
        return await this._collection.get(path, 'date', 'asc')
    }

    async getByMonth(user: UserLogin, date: Date) {
        const path = `finances/${user.email}/transactions`
        return await this._collection.getFiltered(path, [
            {attribute: 'date', op: ">=", value: DateFormat.firstDay(date)},
            {attribute: 'date', op: "<=", value: DateFormat.lastDay(date)},
        ])
    }


}