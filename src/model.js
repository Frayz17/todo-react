import generate from 'nanoid/generate';

export const createTask = (data) => {
  return {
    id: generate('1234567890abcdefg', 4),
    name: '',
    done: false,
    ...data
  }
}