import { Post } from "./Post";

export interface User{
    userId: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    profilePictureLocation: string;
    bio: string;
    posts: Array<Post>

}