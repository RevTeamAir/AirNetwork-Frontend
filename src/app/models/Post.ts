import { User } from "./User";
import { Like } from "./Like";

export interface Post{
    postId: number;
    description: string;
    creationDate: Date;
    postImageLocation: string;
    authorIdFK: User;
    like: Array<Like>;
}