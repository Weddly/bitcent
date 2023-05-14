export default interface User {
    id: string,
    name: string,
    email: string,
    imgUrl: string | null
    ssn?: string
    phone?: string
}