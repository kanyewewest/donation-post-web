import { ITag } from './tag.model';
import { IUser } from './user.model';

export interface IPost {
    id: number
    title: string
    description: string
    address: string
    latitude: number
    longitude: number
    thumbnailUrl: string
    imgsUrl: string[]

    creator: IUser
    similar?: IPost[]
    tags: ITag[]

    dateExpiration?: string
    dateCreated: string
}