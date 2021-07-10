import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {

    async execute(user_id) {
        const complimentRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = await complimentRepositories.find({
            where: {
                user_sender: user_id
            },
            relations: ["userSender", "userReceiver", "tag"],
        });

        return compliments;
    }

}

export { ListUserSendComplimentsService }