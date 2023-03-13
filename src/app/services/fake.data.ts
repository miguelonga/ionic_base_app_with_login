let generateDate = function(days: number){
  let today = new Date()
  
  return today.setDate(today.getDate() + days)
}
export let fakeData = [
    {
      id: 1,
      level: 3.1,
      clubId: 8,
      players: [{id:1}],
      date: generateDate(1),
      indoor: true,
      price: 14
    },
    {
      id: 2,
      level: 2.1,
      clubId: 8,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(2),
      indoor: true,
      price: 11.2
    },
    {
      id: 3,
      level: 4.3,
      clubId: 8,
      players: [{id:1},{id:2}],
      date: generateDate(2),
      indoor: false,
      price: 9
    },
    {
      id: 4,
      level: 1.5,
      clubId: 8,
      players: [{id:1}],
      date: generateDate(2),
      indoor: false,
      price: 11
    },
    {
      id: 5,
      level: 3.1,
      clubId: 8,
      players: [{id:1}],
      date: generateDate(2),
      indoor: false,
      price: 10
    },
    {
      id: 6,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(3),
      indoor: true,
      price: 13
    },
    {
      id: 7,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(3),
      indoor: true,
      price: 13
    },
    {
      id: 8,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(3),
      indoor: true,
      price: 13
    },
    {
      id: 9,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(3),
      indoor: true,
      price: 13
    },
    {
      id: 10,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(4),
      indoor: true,
      price: 13
    },
    {
      id: 11,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(4),
      indoor: true,
      price: 13
    },
    {
      id: 12,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 13,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 14,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 15,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 16,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 17,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 18,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 19,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(6),
      indoor: true,
      price: 13
    },
    {
      id: 20,
      level: 4.5,
      clubId: 10,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(6),
      indoor: true,
      price: 13
    }
]