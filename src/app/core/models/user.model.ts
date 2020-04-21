import { IPost } from "./post.model";

export interface IUser {
    id: number
    name: string
    email: string
    password?: string

    //TODO: contact information
    posts?: IPost
    dateCreated?: string
}

