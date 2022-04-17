import { Post } from "./Post";
import { User } from "./User";

export interface Like{
    likeId: number;
    authorFK: User;
    postFK: Post;
}