# NAGANO Logo Boot Animation (Remotion)

NAGANOロゴの起動アニメーション。縦型スマホサイズ(1080x1920, 60fps, 1.2秒/72フレーム)。

## フェーズ構成

- `0.0s - 0.3s` Wireframe Dawn: 薄緑のガイド円・十字線・斜め補助線が描画される
- `0.3s - 0.7s` Structural Growth: 緑のS字リングロゴと3本の斜めストライプが形成される
- `0.7s - 1.0s` Logotype Bloom: 中央プレートに「NAGANO」の文字とグレアが浮かぶ
- `1.0s - 1.2s` Final Activation & Transition: ロゴが縮小・上方へ移動し、背景が白へフェード、アプリUIのヒントが現れる

## 開発

```bash
cd remotion
npm install
npm start          # Remotion Studio を起動してプレビュー
npm run build       # out/nagano-boot.mp4 を書き出す
npm run still       # out/nagano-boot.png (静止画) を書き出す
```

## 補足: `remotion.config.ts` のブラウザ実行ファイルパスについて

`Config.setBrowserExecutable(...)` は、外部ネットワークからのChromeヘッドレスシェルのダウンロードが許可されていないサンドボックス環境向けに、あらかじめ用意されていたChromiumバイナリのパスを指定したものです。通常のローカル/CI環境ではこの行は不要、またはご自身の環境のパスに書き換えてください。パスが存在しない環境では該当行を削除すれば、Remotionが自動でヘッドレスシェルをダウンロードします。
