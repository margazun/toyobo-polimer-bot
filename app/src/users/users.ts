import { User } from "../types";
import fs from 'fs';



// export const USERS: User[] = [
//     {
//         id: 1306406670,
//         first_name: 'Олег',
//         last_name: 'Федоров',
//         username: 'Margazun'
//     },
// ]

export const USERS: User[] = getUsers(); 

export function getUsers():User[] {
    return JSON.parse(fs.readFileSync(__dirname +'/../../users.json', 'utf-8')) as User[];
}