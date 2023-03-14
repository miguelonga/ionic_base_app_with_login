export class Match {
    id: number = 0;
    level: number = 0; 
    clubId: number = 0;
    court: number = 0;
    players: Player[] = [];
    date: number = Date.now();
    indoor: boolean = false;
    price: number = 0
}

export interface User {
    id: number
}

export interface Player {
    id: number,
    name: string,
    image: string,
    matches: {
        total: number,
        winned: number,
        organized: number
    },
    level: number
}

export interface MatchesInDay {
    date: Date,
    matches: Match[]
}