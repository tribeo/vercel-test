# owned_media
A statically generated Site Project using Next.js and WordPress.
We will replace the existing wordpress site we have with a static site using Next.js.
- Curren tSite：https://www.koov.io/column/

## Points to note
- The base of this repository has been set up using the official Wordpress example from Next.js. So I'd like to optimize file and directory for this project as appropriate.
    - https://nextjs.org/docs/basic-features/pages
- Infrastructure and deployment environment is under consideration here.

## Directories
```
- app Next.js Application
- ops Infra Code（comming soon..）
```

## Configuration
### Step. Set up environment variables

```bash
cp .env.local.example .env.local
```

Then open `.env.local` and set `WORDPRESS_API_URL` to be the URL to your GraphQL endpoint in WordPress. 

We already have a GraphQL environment for Wordpress. You can use this endpoint from your local environment for now.

Your `.env.local` file should look like this:

```bash
WORDPRESS_API_URL=https://www-stg.koov.io/column/index.php?graphql

# Only required if you want to enable preview mode
# WORDPRESS_AUTH_REFRESH_TOKEN=
# WORDPRESS_PREVIEW_SECRET=
```

### Step. Run Next.js in development mode
```bash
cd app
yarn install
yarn dev
```
Running on [http://localhost:3000](http://localhost:3000)
