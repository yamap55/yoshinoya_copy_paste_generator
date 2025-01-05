# yoshinoya_copy_paste_generator

https://yamap55.github.io/yoshinoya_copy_paste_generator/

## 概要

[吉野家コピペ](https://dic.nicovideo.jp/a/%E5%90%89%E9%87%8E%E5%AE%B6%E3%82%B3%E3%83%94%E3%83%9A)を改変するためのジェネレーターです。

[2003年頃にあったもの](https://web.archive.org/web/20031204210402/http://8931.com/yosinoya.php3)を再現しています。

## 内容

- [devcontainer](https://code.visualstudio.com/docs/remote/containers)
- [typescript](https://www.typescriptlang.org/)
- [node.js](https://nodejs.org/ja/)
- [jest](https://jestjs.io/ja/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)

## 環境詳細

- Node.js: v22
- Next.js: v15

### 事前準備

- Docker インストール
- VS Code インストール
- VS Code の拡張機能「Remote - Containers」インストール
  - https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers
- 本リポジトリの clone
- `.env` ファイルを空ファイルでプロジェクト直下に作成
- ssh-agent の設定
  - https://code.visualstudio.com/docs/devcontainers/containers#_using-a-credential-helper

### 開発手順

1. VS Code 起動
2. 左下のアイコンクリック
3. 「Dev Containers: Reopen in Container」クリック
4. しばらく待つ
   - 初回の場合コンテナー image の取得や作成が行われる
5. 起動したら開発可能
   - 初回起動時は `npm install` を実行してください

## NOTE

- 開発
  - `npm run dev`
- ビルド
  - `npm run build`
- ビルドされたファイルをローカルで確認
  - `npx serve out`
- 実行
  - `npm start`
- テスト
  - `npm test`
