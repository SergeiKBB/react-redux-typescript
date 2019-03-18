import axios from "axios";

export function fetchUsers(): Promise<{}> {
    return axios.get('https://randomuser.me/api/?nat=gb&results=5');
}
