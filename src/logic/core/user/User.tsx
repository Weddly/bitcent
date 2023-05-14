export default interface UserLogin {
    id: string,
    name: string,
    email: string,
    imgUrl: string | null
    ssn?: string
    phone?: string
}