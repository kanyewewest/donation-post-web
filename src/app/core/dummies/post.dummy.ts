import { IPost } from "../models/post.model";

export const dummyPost: IPost = {
    id: 99,
    title: "Leftovers from a pizza place",
    description: "After a regular workday we have some leftover pizzas, if you're in need of food feel free to contact me or come to our location after 9pm.",
    address: "Av. Arequipa",
    latitude: 40.73,
    longitude: -73.93,
    thumbnailUrl: "https://placekitten.com/300/200",
    imgsUrl: [
        "https://placekitten.com/400/600",
        "https://placekitten.com/500/500",
        "https://placekitten.com/600/400",
        "https://placekitten.com/300/200"
    ],
    creator: {
        id: 199,
        email: "giornos@pizza.com",
        name: "Giorno Bond"
    },
    tags: [
        {
            id: 299,
            name: "Food"
        },
        {
            id: 298,
            name: "Tag2"
        }
    ],
    dateExpiration: "2020-04-30T11:08:45.750Z",
    dateCreated: "2020-04-20T11:08:45.750Z"
}

export const dummyPosts: IPost[] = [
    dummyPost,
    dummyPost,
    dummyPost,
    dummyPost
]