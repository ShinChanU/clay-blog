---
title: 'Next.js에서 동적 라우팅 시 404 에러 해결 방법'
date: '2025-01-19'
description: 'Next.js의 동적 라우팅에서 발생하는 404 에러의 원인과 해결 방법을 코드와 함께 설명합니다.'
tags: ['Next.js', 'Dynamic Routing', '404 Error', 'React']
---

# Next.js에서 동적 라우팅 시 404 에러 해결 방법

Next.js의 동적 라우팅을 구현하다가 예상치 못한 404 에러가 발생했나요?  
이 글에서는 동적 라우팅의 기본 동작과 404 에러의 원인을 분석하고, 이를 해결하는 과정을 자세히 설명합니다.

---

## 문제 정의: 404 에러 발생

Next.js의 App Router에서 동적 라우팅을 구현하던 중, 특정 URL로 접근하면 404 에러가 발생했습니다.

### 상황 설명

다음과 같이 동적 라우트를 설정했습니다:

**폴더 구조:** /src/app/posts/[id]/page.tsx

**코드 (page.tsx):**

```tsx
export default function PostPage({ params }: { params: { id: string } }) {
  return <h1>Post ID: {params.id}</h1>;
}
```

그러나 브라우저에서 `http://localhost:3000/posts/123`에 접근하면 다음과 같은 404 에러가 발생했습니다.

#### 에러 메시지:

```js
Error: Cannot find module for page: /posts/123
```

---

## 해결 방법: 동적 라우팅 설정 검토 및 수정

### 1. 파일명 확인

동적 라우트는 반드시 `[id]`와 같은 대괄호 문법을 사용해야 합니다. 파일명과 경로가 정확한지 다시 확인했습니다.

### 2. `generateStaticParams`함수 추가

Next.js App Router에서 동적 라우팅을 사용할 때, 빌드 시 동적 경로를 정적으로 생성해야 합니다. 이를 위해 `generateStaticParams`를 구현했습니다.

```tsx
export async function generateStaticParams() {
  return [
    { id: "123" },
    { id: "456" },
  ];
}

export default function PostPage({ params }: { params: { id: string } }) {
  return <h1>Post ID: {params.id}</h1>;
}
```

### 3. 빌드 후 동작 확인

코드를 수정한 후 프로젝트를 다시 빌드(`npm run build`)하고 실행(`npm start`)하여 문제가 해결되었는지 확인했습니다.

---

## 결과: 동적 라우팅 정상 작동

이제 브라우저에서 `http://localhost:3000/posts/123`에 접근하면 다음과 같이 동작합니다:

```yml
Post ID: 123
```

---

## 깨달은 점

1. **Next.js의 App Router 동작 이해**
   Next.js에서 동적 라우팅은 정적 경로 생성을 통해 예측 가능한 동작을 보장합니다. `generateStaticParams` 를 사용하지 않을 경우, 동적 경로가 제대로 빌드되지 않아 404 에러가 발생할 수 있습니다.
2. **디버깅의 중요성**
   에러 메시지를 바탕으로 정확한 문제를 분석하고, 공식 문서를 통해 적절한 해결책을 찾는 것이 중요합니다.

3. **파일 구조의 일관성 유지**
   파일명과 폴더 구조를 명확히 유지하는 것이 예상치 못한 문제를 방지합니다.

---

## 추가 자료

[Next.js Dynamic Routing 공식 문서](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes)
