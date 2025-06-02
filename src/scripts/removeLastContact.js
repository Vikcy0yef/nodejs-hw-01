import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
    try {
        const constants = await readContacts();
        if (constants.length > 0) {
            constants.pop();
            await writeContacts(constants);
        }
    } catch (error) {
        console.error(error);
    }
};

removeLastContact();
