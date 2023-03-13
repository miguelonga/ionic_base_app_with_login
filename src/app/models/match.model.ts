export class Match {
    id: number = 0;
    level: number = 0; 
    clubId: number = 0;
    players: Array<User> = [];
    date: number = Date.now();
    indoor: boolean = false;
    price: number = 0
}

export interface User {
    id: number
}

export interface MatchesInDay {
    date: Date,
    matches: Match[]
}