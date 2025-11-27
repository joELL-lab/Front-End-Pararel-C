import ambilDataUser from "./ambilDatauser.js";
import { messages } from "./message.js";

const init = async () => {
	await messages();
	await ambilDataUser();
};

init();