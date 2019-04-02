# Learning Next.js

https://nextjs.org/learn

## Local Development

```bash
npm install

npm run dev
```

The application will be loaded on port 3000. http://localhost:3000

Running on multiple instances/ports: https://nextjs.org/learn/basics/deploying-a-nextjs-app/run-two-instances 
Need to install cross-env on Windows to make it work.

```bash
npm i -g cross-env

cross-env PORT=8000 npm start

cross-env PORT=9000 npm start
```

Now Build Deploy: https://nextjs.org/learn/basics/deploying-a-nextjs-app/deploying-to-zeit-now
