import { ObjectId } from "bson";


export const availableAgentSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberVievs', 'memberRank']
export const availableMemberSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberVievs']
export const shapeIntoMongoObjectId = (target: any) => {
    return typeof target === "string" ? new ObjectId(target) : target;
};
