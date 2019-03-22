import generate from 'nanoid/generate';

export const createTask = (data) => {
  return {
    id: generate('1234567890abcdefg', 4),
    name: '',
    done: false,
    ...data
  }
}

export const tasksLib = [
  createTask({name: 'Do First', done: true}),
  createTask({name: 'Do Second'}),
  createTask({name: 'Do Third'}),
]