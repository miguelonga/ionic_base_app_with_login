export class Match {
    id: number = 0;
    level: number = 0; 
    clubId: number = 0;
    players: Array<User> = [];
    date: number = 0;
    indoor: boolean = false;
    price: number = 0
}

export interface User {
    id: number
}