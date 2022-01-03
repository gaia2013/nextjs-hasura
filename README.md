
<img width="1051" alt="スクリーンショット 2022-01-02 17 31 03" src="https://user-images.githubusercontent.com/3797539/147871683-36640d1a-5cc0-4642-baea-e238782cfe86.png">
<img width="1051" alt="スクリーンショット 2022-01-02 18 21 25" src="https://user-images.githubusercontent.com/3797539/147871686-79bdecb2-1d23-4653-a5a9-d6e2426c7133.png">
<img width="1051" alt="スクリーンショット 2022-01-02 18 21 51" src="https://user-images.githubusercontent.com/3797539/147871687-da919f27-e399-43e0-b43c-2c0ee8e6973c.png">
<img width="1051" alt="スクリーンショット 2022-01-02 18 22 11" src="https://user-images.githubusercontent.com/3797539/147871689-ec0ab346-1130-4371-8243-7de198472f15.png">
<img width="1051" alt="スクリーンショット 2022-01-02 18 22 12" src="https://user-images.githubusercontent.com/3797539/147871690-43f43317-d177-4f5f-97d3-4b0c54540a7a.png">
<img width="1051" alt="スクリーンショット 2022-01-02 18 22 19" src="https://user-images.githubusercontent.com/3797539/147871691-5f29dcf4-57ca-49aa-8d1a-4f1535c3fd1d.png">
<img width="1051" alt="スクリーンショット 2022-01-02 18 22 22" src="https://user-images.githubusercontent.com/3797539/147871693-54bdc162-6608-4901-92dd-02fc278fd0e3.png">
<img width="1051" alt="スクリーンショット 2022-01-02 18 22 53" src="https://user-images.githubusercontent.com/3797539/147871694-b56f9712-d230-4f5e-aabf-f649afcd1d20.png">
<img width="1051" alt="スクリーンショット 2022-01-03 10 55 39" src="https://user-images.githubusercontent.com/3797539/147895303-d1889040-58a5-4602-9ec0-b3fc99cf54e0.png">
<img width="1422" alt="スクリーンショット 2022-01-03 10 58 47" src="https://user-images.githubusercontent.com/3797539/147895306-03e94903-582e-435f-8c52-017f1396cd21.png">
<img width="1552" alt="スクリーンショット 2022-01-03 11 28 05" src="https://user-images.githubusercontent.com/3797539/147896086-6e313a2e-5d59-4436-9109-1f28c9ed5c7f.png">
↓Nextリンクの遷移先　Cache利用
<img width="1552" alt="スクリーンショット 2022-01-03 11 28 05" src="https://user-images.githubusercontent.com/3797539/147896086-6e313a2e-5d59-4436-9109-1f28c9ed5c7f.png">



## Project setup : 
#### ・Nextjs
#### ・TypeScript
#### ・Apollo Client
#### ・React-testing-library
#### ・Next-page-tester
#### ・Tailwind CSS
#### ・Mock Service Worker(MSW)

## 1. Nextjs Project 新規作成
### 1-1. yarn install *インストールしていない場合
    npm install --global yarn
    yarn --version
### 1-2.  create-next-app
    npx create-next-app .
#### Node.js version 10.13以降が必要です。 -> ターミナル `node -v`でver確認出来ます。
### 1-3.  Apollo Client + heroicons + cross-fetch のインストール
    yarn add @apollo/client graphql @apollo/react-hooks cross-fetch @heroicons/react
### 1-4.  React-Testing-Library + MSW + next-page-tester のインストール
    yarn add -D msw next-page-tester jest @testing-library/react @types/jest @testing-library/jest-dom @testing-library/dom babel-jest @babel/core @testing-library/user-event jest-css-modules
### 1-5.  Project folder 直下に".babelrc"ファイルを作成して下記設定を追加
    touch .babelrc
~~~
    {
        "presets": ["next/babel"]
    }
~~~
### 1-6.  package.json に jest の設定を追記
~~~
    "jest": {
        "testPathIgnorePatterns": [
            "<rootDir>/.next/",
            "<rootDir>/node_modules/"
        ],
        "moduleNameMapper": {
            "\\.(css)$": "<rootDir>/node_modules/jest-css-modules"
        }
    }
~~~
### 1-7.  package.jsonに test scriptを追記
~~~
    "scripts": {
        ...
        "test": "jest --env=jsdom --verbose"
    },
~~~
### 1-8.  prettierの設定 : settingsでRequire Config + Format On Saveにチェック
    touch .prettierrc
~~~
    {
        "singleQuote": true,
        "semi": false
    }
~~~  
## 2. TypeScript の導入
https://nextjs.org/learn/excel/typescript/create-tsconfig
### 2-1. 空のtsconfig.json作成
    touch tsconfig.json
### 2-2. 必要moduleのインストール
    yarn add -D typescript @types/react @types/node
### 2-3. 開発server起動
    yarn dev
### 2-4. _app.js, index.js -> tsx へ拡張子変更
### 2-5. AppProps型追記
~~~
    import { AppProps } from 'next/app'

    function MyApp({ Component, pageProps }: AppProps) {
        return <Component {...pageProps} />
    }

    export default MyApp
~~~

## 3. Tailwind CSS の導入
https://tailwindcss.com/docs/guides/nextjs
### 3-1. 必要moduleのインストール
    yarn add tailwindcss@latest postcss@latest autoprefixer@latest
### 3-2. tailwind.config.js, postcss.config.jsの生成
    npx tailwindcss init -p
### 3-3. tailwind.config.jsのpurge設定追加
~~~
module.exports = {
    purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
~~~
### 3-4. globals.cssの編集
~~~
@tailwind base;
@tailwind components;
@tailwind utilities;
~~~
## 4. Test動作確認
### 4-1. `__tests__`フォルダと`Home.test.tsx`ファイルの作成
~~~
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '../pages/index'

it('Should render title text', () => {
  render(<Home />)
  expect(screen.getByText('Next.js!')).toBeInTheDocument()
})
~~~
### 4-2. yarn test -> テストがPASSするか確認
~~~
 PASS  __tests__/Home.test.tsx
  ✓ Should render hello text (20 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.728 s, estimated 2 s
~~~
## 5. GraphQL codegen
### 5-1.  install modules + init
    yarn add -D @graphql-codegen/cli
    yarn graphql-codegen init
    yarn
    yarn add -D @graphql-codegen/typescript
### 5-2.  add queries in queries/queries.ts file
### 5-3.  generate types automatically
    yarn gen-types


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.





