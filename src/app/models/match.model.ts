export interface Match {
    id: number,
    level: number | null,
    clubId: number,
    players: Array<User>,
    date: number,
    indoor: boolean | null,
    price: number
}

export interface User {
    id: number
}