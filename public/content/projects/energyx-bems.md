---
title: "BEMS 커스터마이징 대시보드"
category: "career"
date: "2023-01-01"
description: "50여 개 카드 타입의 커스터마이징 대시보드 설계로 제품 핵심 차별화 포인트를 만든 프로젝트"
highlight: "영업 데모 핵심 화면, 3건 납품"
tags: ["TypeScript", "React", "Vite", "Jest", "Tailwind CSS"]
role: "Frontend Developer"
duration: "2023.01 ~ 2025.09"
links: {}
featured: true
---

## 배경

건물 에너지 관리 시스템(BEMS)의 대시보드에 고정된 카드 UI만 제공하여 사용자별 요구사항이 생길 때마다 FE/BE 개발자가 별도 페이지를 만들어야 했습니다. 차트를 페이지별로 개별 구현하다 보니 날짜 불연속, 차트 깨짐 등 반복적인 이슈도 발생했습니다.

## 접근

기획, 백엔드와 카드 타입을 **50여 개로 정의**한 후 Enum 기반으로 카드 관리 구조를 공동 설계했습니다.

- 공통화된 카드 컴포넌트 + Enum별 브랜치 컴포넌트 + 비즈니스 로직 훅 + Drag&Drop으로 **단일 책임 원칙에 따라 코드 분리**
- 70개 이상의 차트를 표준화: 타입만 지정하면 바로 렌더링되는 공통 훅 설계
- 차트 렌더링 로직을 **O(n²) → O(n)** 개선

## 해결

Webpack → Vite 전환으로 개발 서버 15초 → 0.1초, 빌드 50MB → 23MB로 감소시켰고, React.lazy + Rollup manualChunks로 코드 스플리팅, lodash-es + knip으로 트리셰이킹을 적용했습니다. 중첩 Context Provider의 워터폴 API 호출을 React Query 병렬 구조로 전환하여 페이지 로딩을 개선했습니다.

## 결과

- 커스터마이징 대시보드가 **제품 핵심 차별점**으로 정착 → 3건 건물 납품
- 쇼룸, 롯데 AI 컨퍼런스, ESG 대전 등 **전시 3회 데모 화면** 사용
- Lighthouse LCP/FCP **30% 이상 향상**, 디자인 토큰 업데이트 **800초 → 33초 (96% 단축)**
