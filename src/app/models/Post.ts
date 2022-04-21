import { User } from "./User";
import { Like } from "./Like";

export interface Post{
    postId: number;
    description: string;
    creationDate: Date;
    postImageLocation: string;
    authorIdFK: {
        userId: number;
        username: string;
        password: string;
        firstname: string;
        lastname: string;
        email: string;
        profilePictureLocation: string;
        bio: string;
        posts: Array<Post>
    
    };
    
    like: Array<Like>;
}