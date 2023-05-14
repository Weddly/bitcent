import {
    OrderByDirection,
    QueryConstraint,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    setDoc,
    orderBy,
    collection,
    DocumentSnapshot,
    DocumentData,
    where,
    WhereFilterOp
} from 'firebase/firestore'
import { app } from '../config/app'
import Id from '@/logic/core/shared/Id'

export interface Filter {
    attribute: string
    op: WhereFilterOp
    value: any
}

export default class Collection {

    async save (path: string, entity: any, id?: string): Promise<any> {
        const db = getFirestore(app)
        const finalId = id ?? entity.id ?? Id.new()
        const docRef = doc(db, path, finalId)
        await setDoc(docRef, entity)

        return {
            ...entity,
            id: entity.id ?? finalId
        }
    }

    async delete (path: string, id?: string): Promise<boolean> {
        if(!id) return false
        const db = getFirestore(app)
        const docRef = doc(db, path, id)
        const itemDB = await getDoc(docRef)
        if (!itemDB.exists()) return false
        await deleteDoc(docRef)

        return true
    }

    async get (path: string, ordination?: string, direction?: OrderByDirection): Promise<any[]> {
        const db = getFirestore(app)
        const collectionRef = collection(db, path)
        const filter: QueryConstraint[] = []
        const order = ordination ? [orderBy(ordination, direction)] : []
        const search = query(collectionRef, ...filter, ...order)
        const result = await getDocs(search)

        return result.docs.map(this._firebaseDateConverter)
    }

    async getById (path: string, id: string): Promise<any> {
        if(!id) return null
        const db = getFirestore(app)
        const docRef = doc(db, path, id)
        const result = await getDoc(docRef)

        return this._firebaseDateConverter(result)
    }

    async getFiltered (path: string, filter: Filter[], ordination?: string, direction?: OrderByDirection): Promise<any[]> {
        const db = getFirestore(app)
        const collectionRef = collection(db, path)
        const filterWhere = filter?.map(f => where(f.attribute, f.op, f.value)) ?? []
        const order = ordination ? [orderBy(ordination, direction)] : []

        const search = query(collectionRef, ...filterWhere, ...order)
        const result = await getDocs(search)

        return result.docs.map(this._firebaseDateConverter) ?? []
    }


    private _firebaseDateConverter(snapshot: DocumentSnapshot<DocumentData>) {
        if(!snapshot.exists()) return null
        const entity: any = {...snapshot.data(), id: snapshot.id}
        if (!entity) return entity
        return Object.keys(entity).reduce((obj: any, attribute: string) => {
            const value: any = entity[attribute]
            return { ...obj, [attribute]: value.toDate?.() ?? value}
        }, {})
    }
}