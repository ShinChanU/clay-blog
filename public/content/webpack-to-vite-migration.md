---
title: 'Webpack을 버리고, Vite를 선택한 진짜 이유'
date: '2025-01-21 20:56'
description: 'webpack이라는 좋은 번들러를 두고, vite라는 더 좋은 번들러로 환승했습니다. 그 이야기를 들려드릴게요.'
tags: ['frontend', 'bundler', 'webpack', 'vite']
topic: '성능 개선'
---

## 번들러란 ?

웹, 앱을 개발하다보면 많은 자바스크립트 파일을 만들고, 분리하고, 가져오기를 반복합니다.
그렇게 할 수 있는 이유는 **번들러 (`bundler`)** 라는 불리는 친구 덕분입니다. **번들러란,** **여러 파일의 종속성을 하나의 파일로 정리하고 결합하는 도구**입니다.

쉽게 말해, 여러 개의 자바스크립트 파일을 하나의 자바스크립트 파일로 합쳐주는 도구라는 것입니다.

<br />
번들러의 종류는 많지만, 몇개만 간단하게 소개해드리겠습니다.

![npm-trend-bundler-comparison](image.png)

1. **Webpack** [2012 ~ ] <br />
   2012년도에 등장한 번들링 도구입니다. **강력한 생태계를 보유**하고 있고, 확장성이 좋아서 대규모 프로젝트에 적합하고 `js`, `css`, `이미지` 등도 처리할 수 있습니다. 그 외에도 `Tree-shaking`, `Code Splitting`, `Loader` 등 다양한 플러그인을 지원합니다.
   
   **장점** : 많은 자료와, 큰 커뮤니티로 자료 및 예시가 풍부
   
   **단점** : 설정이 복잡하여 러닝커브가 높은 편, 프로젝트 사이즈가 클 수록 빌드 시간이 길어질 수 있음(물론 캐시와 병렬 처리로 개선 가능)

2. **Rollup** [2015 ~ ] <br />
    함수로 래핑하여 평가하는 `Webpack`과 달리, `Rollup`은 모든 코드를 호이스팅하여 한번에 번들링을 진행합니다. 그렇기 때문에 번들링이 빠르며 또한 내부적으로 ES6 타입스크립트를 사용하고 있기에 **라이브러리 구축과 확장**에 특화된 모듈 번들러입니다.

   **장점** : `Webpack`보다 빠른 속도. 확장에 용이하여 라이브러리 개발에 적합한 도구

   **단점** : 설정이 복잡한 편

3. **EsBuild**  [2018 ~ ] <br />
   `Go` 언어로 작성되어 **번들링 및 트랜스파일링 속도가 매우 빠른 편**입니다. (`Webpack` 대비 10 ~ 100배 빠름)

   **장점** : 매우 빠른 빌드 및 번들링 속도, 트랜스파일러로서도 활용 가능

   **단점** : 개발 생태계가 아직 성장 단계

4. **Vite**  [2020 ~ ] <br />
   4개 중 가장 최신 번들러이며, `Esbuild` 와 `Rollup` 의 장점들을 모았습니다. 개발모드에서는 `Esbuild` 를 사용하여 **빠른 사전 번들링과 HMR** 를 적용시키고, 프로덕션 모드에서는 **유연하고 확장**이 쉬운 `Rollup` 을 사용하여 번틀링을 최적화합니다. 특히 HMR 시, 브라우저에게 `Native ESM` 코드제공으로 빠른 갱신 속도를 보여줍니다.

   **장점** : 설정이 쉬우며, 빌드와 HMR이 매우 빠름

   **단점** : 개발 생태계가 아직 성장 단계, 브라우저용 번들링으로는 안정성이 떨어진다는 평가.

---

## `Vite` 를 선택한 진짜 이유
`Vite` 를 선택한 이유는 단순합니다. 바로 **개발자 경험(DX)** 때문이였습니다.

저는 이제 3년차에 접어든 프론트엔드 개발자입니다. 현재 회사에서는 제가 구축한 프로젝트를 2년 넘게 개발 및 유지 보수를 하고 있습니다. 
2년 전 쌩신입이였던 저는 신규 프로젝트를 구축해야했고, 기존에 안정적으로 동작하던 사내 타 프로젝트 세팅을 그대로 가져왔었습니다. 그 세팅이 `Webpack` 번들러 기반 `React` 프로젝트였습니다. 

저는 2년 동안은 실무에 적응하며 주어진 기능 개발에 온전히 시간을 쏟을 수 밖에 없었고, 이제 시간이 어느 정도 흐르고 다니 저 스스로 주도적으로 기술을 찾고 불편함을 개선하려는 시도를 하게 되는 것 같습니다. 그 중 하나가 번들러 교체였습니다. 교체를 해야겠다고 생각한 **가장 주된 이유**는 `Webpack` 으로 **개발 서버를 띄우는 시간이 너무 오래걸렸기 때문**입니다. 개발을 하려면 항상 로컬 개발 서버를 띄워야했고 심지어 config 파일 수정이나, node 모듈이 엉키는 경우 서버를 내렸다 다시 올리는 작업도 많이 해야합니다. 제 프로젝트 기준 서버를 올리는데 평균 `15초` 의 시간이 소요가 되니 그 시간동안 작업이 멈추곤 했습니다. DX가 안 좋을 수 밖에 없었습니다.  
![alt text](image-4.png)
![alt text](image-5.png)
테스트를 해보니, `14.5초`가 걸렸습니다.

 물론 `Webpack` 은 아주 훌륭한 번들러지만, **개발 서버를 띄울 때, 모든 모듈과 종속성을 한번에 번들링** 하는 과정때문에 콜드 스타트가 길어서 개발자 경험을 떨어뜨리는다는점이 아쉬운 점이었습니다. 
 
 그렇게 저는 여러 번들러 찾아보았고, 결국 **`Vite`로 마이그레이션** 을 결정하게 되었습니다. 
 ![alt text](image-6.png)
결과를 먼저 보여드리면 `0.7초` 네요. `Webpack` 과 비교하면 **`95%`** 감소한 수치입니다. 놀랍습니다.

`Vite`가 이렇게 빠른 이유는,  **개발 서버를 띄울 때 번들링을 건너 뛰고, 필요한 모듈의 ESM 소스 코드를 직접 제공하는 방식**으로 콜드 스타트를 매우 짧게 가져가기 때문입니다. 아래 이미지를 참고하면 좋겠습니다.

![alt text](image-1.png)
![alt text](image-2.png)

개발 서버가 빠르게 열리 때문에, DX 가 훌륭할 수 밖에 없습니다. `run dev` 스크립트를 치고 바로 개발에 돌입할 수 있으니까요 ! 


이와 관련한 더 자세한 내용은 공식 문서를 읽어보시길 추천합니다. 한글로 된 문서도 있으니 읽어보시면 이해가 쉬울 겁니다. ([Vite 문서](https://ko.vite.dev/guide/why))

---

## 마이그레이션 과정
마이그레이션 과정은 그렇게 어렵지 않았습니다. 
그렇지만 각자의 프로젝트 환경은 다르기에 자세한 내용은 Vite 문서도 잘 되어있고, 도움이 되는 블로그 글도 많이 있으니 참고하면 좋을 듯 합니다. 이곳에는 제 프로젝트에 적용했던 내용을 위주로 정리해두려합니다. `Vite` 버전은 6 기준 입니다.

### 1. `Vite` 설치
루트 경로에서 `Vite` 를 설치합니다.
```bash
pnpm add -D vite
```

추가적으로, 프론트엔드 스택에 맞춰서 플러그인을 설치해야할 수 있습니다. React 프로젝트라면 아래 명령어를 사용합니다.
```bash
pnpm add -D @vitejs/plugin-react
```

이 부분은 `@vitejs/plugin-react`를 설치해도되고, `@vitejs/plugin-react-swc`를 설치해도됩니다. 
간단하게 차이점을 설명드리면, `@vitejs/plugin-react`는 풍부한 플러그인을 갖고있는 `Babel` 기반으로 트랜스파일링을 도와주고, `@vitejs/plugin-react-swc`는 매우 빠른 속도를 지원하는 `Rust` 로 작성된 `SWC` 로 트랜스파일을 도와주는 도구입니다.
저는 기존 프로젝트에 `Babel` 설정이 좀 많아서 `@vitejs/plugin-react`를 사용했습니다.

### 2. `config` 파일 설정
`vite.config.(js|ts)` 파일을 만들고, 필요하다면 기존 webpack 설정을 옮겨주면 됩니다.
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    open: true,
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
});
```
예시 코드는 위와 같고, `resolve.alias` 설정을 해주고, 로컬 서버 `port`와 자동 열림(`open`) 상태를 지정해주면 됩니다. 또한 저는 `build` 옵션으로 `outDir` 을 `build`로 바꿔뒀습니다. 기본값은 `dist` 입니다. 그외 내용은 `webpack.config` 파일을 참고하여 반영하면 됩니다. 


### 3. `index.html` 수정, 환경 변수 처리
- `Vite`는 기본적으로 `index.html` 파일을 루트 경로에 두어야합니다. 또한 SPA의 진입점에 해당하는 컴포넌트 `src`를 연결합니다. `script`의 `src` 경로를 수정해야할 수도 있습니다.
   ```ts
   <html>
   <head></head>
   <body>
      <div id="root"></div>
      <!-- 여기! -->
      <script type="module" src="/src/index.tsx"></script>
   </body>
   </html>
   ```

<br />

- 환경 변수도 처리도 해줍니다. 기존에 사용하던 `webpack.config.js`에 있던 환경 변수 코드입니다.
   ```js
   new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("https://api.example.com"),
   }),
   ```

   `Vite`에서는 `.env` 파일에 선언해두면됩니다.
   ```arduino
   VITE_API_URL=https://api.example.com
   ```
   사용할 때는 아래처럼 사용하면 됩니다.
   ```ts
   const apiUrl = import.meta.env.VITE_API_URL;
   ```
   타입추론을 원한다면 `vite-env.d.ts` 를 만들어서 환경 변수 내용을 담아둘 수도 있습니다.
   ```ts
   /// <reference types="vite/client" />

   interface ImportMetaEnv {
      readonly VITE_API_URL: string;
   }

   interface ImportMeta {
      readonly env: ImportMetaEnv;
   }
   ```
   [환경 변수의 모드](https://vite.dev/guide/env-and-mode)도 지원해줍니다. 
   ```ts
   .env                # loaded in all cases
   .env.local          # loaded in all cases, ignored by git
   .env.[mode]         # only loaded in specified mode
   .env.[mode].local   # only loaded in specified mode, ignored by git
   ```
   제 경우에도 `dev`, `stage`, `prod` 브랜치별로 배포를 하기에 모드 옵션을 적극활용했습니다. 
   ![alt text](image-7.png)
   

### 4. `package.json` `script` 업데이트
로컬 서버 실행, 빌드, preview 등 자주 쓰는 명령어들을 등록해둡니다.
```json
// package.json
"scripts": {
   "dev": "vite --mode dev",
   "build:dev": "vite build --mode dev",
   "build:stage": "vite build --mode stage",
   "build:prod": "vite build --mode prod",
   "preview": "vite preview",
},
```

### 5. 테스트 및 Webpack 코드 정리
다 됐습니다 ! 어렵지 않죠 !
이젠 `run dev`를 실행하고, `run build` 등을 테스트해보며 정상 작동하는 지를 확인하면 됩니다 !

`0.7` 초만에 로컬 서버가 열리는 놀라운 일이 일어났습니다! (`Webpack` 은 `14`초 였는데...)
![alt text](image-6.png)

`build` 스크립트도 잘 작동하네요 ! `build` 성능 비교도 아래 결과탭에서 자세히 하겠습니다.
![alt text](image-8.png)

이제 `Webpack` 의존성 및 코드를 모두 삭제해도 되겠습니다.

---

## 마이그레이션 결과

성능 개선 **이야기**

---

## 참고 링크

[웹 개발에서의 다양한 빌드 도구 비교: Webpack, Rollup, Vite](https://f-lab.kr/insight/web-development-build-tools-comparison)