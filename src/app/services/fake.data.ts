let generateDate = function(days: number){
  let today = new Date()
  return today.setDate(today.getDate() + days)
}
export let fakeData = [
    {
      id: 1,
      level: 3.1,
      clubId: 8,
      court: 1,
      players: [{id:1}],
      date: generateDate(1),
      indoor: true,
      price: 14
    },
    {
      id: 2,
      level: 2.1,
      clubId: 8,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(2),
      indoor: true,
      price: 11.2
    },
    {
      id: 3,
      level: 4.3,
      clubId: 8,
      court: 1,
      players: [{id:1},{id:2}],
      date: generateDate(2),
      indoor: false,
      price: 9
    },
    {
      id: 4,
      level: 1.5,
      clubId: 8,
      court: 1,
      players: [{id:1}],
      date: generateDate(2),
      indoor: false,
      price: 11
    },
    {
      id: 5,
      level: 3.1,
      clubId: 8,
      court: 1,
      players: [{id:1}],
      date: generateDate(2),
      indoor: false,
      price: 10
    },
    {
      id: 6,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(3),
      indoor: true,
      price: 13
    },
    {
      id: 7,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(3),
      indoor: true,
      price: 13
    },
    {
      id: 8,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(3),
      indoor: true,
      price: 13
    },
    {
      id: 9,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(3),
      indoor: true,
      price: 13
    },
    {
      id: 10,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(4),
      indoor: true,
      price: 13
    },
    {
      id: 11,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(4),
      indoor: true,
      price: 13
    },
    {
      id: 12,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 13,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 14,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 15,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 16,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 17,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 18,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(5),
      indoor: true,
      price: 13
    },
    {
      id: 19,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(6),
      indoor: true,
      price: 13
    },
    {
      id: 20,
      level: 4.5,
      clubId: 10,
      court: 1,
      players: [{id:1},{id:2},{id:3}],
      date: generateDate(6),
      indoor: true,
      price: 13
    }
]

export let fakeUsers = [
  {
      id: 1,
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      matches: {
          total: 30,
          winned: 28,
          organized: 3
      },
      level: 3.2
  },
  {
      id: 2,
      name: "Morty Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      matches: {
          total: 40,
          winned: 23,
          organized: 17
      },
      level: 3.5
  },
  {
      id: 3,
      name: "Beth Smith",
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      matches: {
          total: 23,
          winned: 9,
          organized: 20
      },
      level: 2.9        
  },
  {
      id: 4,
      name: "Amish Cyborg",
      image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
      matches: {
          total:9,
          winned: 8,
          organized: 2
      },
      level: 3.8
  }
]