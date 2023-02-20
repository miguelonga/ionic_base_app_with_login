export interface Match {
    level: number,
    clubId: number,
    players: Array<User>,
    date: number,
    indoor: boolean,
    price: number
}

export interface User {
    userId: number
}