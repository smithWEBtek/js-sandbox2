import { rest } from 'msw'

export const handlers = [
  rest.get('/find-friends', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { username: 'thor' },
        { username: 'gabor' },
        { username: 'deuce' }
      ])
    )
  }),
  rest.post('/VanHalen/add-friend', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ added: 'friend added!' })
    )
  })
]
