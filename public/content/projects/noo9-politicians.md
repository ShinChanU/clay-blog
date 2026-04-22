---
title: "누구뽑지 — 정치인 정보 제공 사이트"
category: "side"
date: "2025-05-01"
description: "정치인 사건/이력 조회 사이트. Next.js App Router 병렬 라우트와 SEO 최적화로 검색 1위 달성"
highlight: "네이버/구글 검색 1위"
tags: ["Next.js", "TypeScript", "TanStack Query", "Tailwind CSS"]
role: "FE Team Lead"
duration: "2025.05 ~ 현재"
links:
  live: "https://www.noo9.kr/"
featured: true
---

## 배경

선거철 유권자들이 정치인의 이력과 사건 정보를 쉽게 찾을 수 있는 웹 서비스가 필요했습니다. 팀원 3명의 FE 팀 리드로 참여했습니다.

## 접근

Next.js App Router의 **병렬 라우트 아키텍처**를 활용해 메인 페이지를 5개 슬롯으로 분리하고, 각 슬롯이 독립적으로 서버 prefetch 하도록 설계했습니다.

- **렌더링 전략 분기 설계**: ISR(30분)/SSG/SSR/Server Component를 페이지 특성에 맞게 적용
- **React Query SSR Prefetch + Hydration** 체계 구축으로 API 중복 호출 제거
- **SEO 최적화**: generateMetadata 동적 OG, JSON-LD Schema, 동적 sitemap

## 해결

검색 엔진 최적화에 집중하여 페이지별 메타데이터를 동적으로 생성하고, 정치인 상세 페이지에 JSON-LD 구조화 데이터를 추가했습니다. sitemap도 정치인 데이터 변경 시 자동으로 업데이트되도록 구성했습니다.

## 결과

- 네이버/구글 "누구뽑지" 검색 시 **1위 노출**
- 최근 30일 **1,300+ 클릭 / 2,000+ 노출**
- 병렬 라우트로 각 섹션이 독립 로딩되어 체감 속도 향상
