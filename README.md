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
After now deploy, can access app as https url: https://hello-next.mayvelous.now.sh/ 

Export Static Html, setup exportPathMap in next.config.js and run below cmd
https://nextjs.org/learn/excel/static-html-export
Comment out target: 'serverless' line if exporting static files

```bash
npm run build
npm run export
```

Out folder will be created with all the static files inside. To deploy, cd in to out folder and run 'now'