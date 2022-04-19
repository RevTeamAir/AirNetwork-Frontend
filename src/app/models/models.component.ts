export interface userPost {
  id : number;
  description : string;
  creationDate : Date;
  PostImageLocation : string;
  authorFk : number;
  likes : Array<{
    id : number;
    authorFk : number;
    postFk : number;
  }>
}