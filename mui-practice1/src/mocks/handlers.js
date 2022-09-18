import { rest } from 'msw';

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    sessionStorage.setItem('is-authenticated', 'true')
    console.log('-------------------------- ');
    console.log('req: ', req);
    console.log('res: ', res);
    console.log('ctx: ', ctx);

    return res(
      ctx.status(200)
    )
  }),
  rest.get('/user', null)
];
