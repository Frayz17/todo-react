import generate from 'nanoid/generate';

export const createTask = (data) => {
  return {
    id: generate('1234567890abcdefg', 4),
    name: '',
    done: false,
    date: new Date(),
    ...data
  }
}

export const tasksLib = [
  createTask({name: 'Do First', date: new Date(2019, 2, 3), done: true}),
  createTask({name: 'Do Second', date: new Date(2019, 2, 4)}),
  createTask({name: 'Do Third', date: new Date(2019, 2, 5)}),
]

