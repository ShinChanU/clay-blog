---
title: "AI Agent 플랫폼 프론트엔드"
category: "career"
date: "2025-09-01"
description: "AI Agent 관리, MCP 서버, RAG 채팅을 통합하는 플랫폼의 프론트엔드를 처음부터 설계"
highlight: "단일 코드베이스로 2개 플랫폼 지원"
tags: ["TypeScript", "React", "Module Federation", "FSD", "Playwright"]
role: "Frontend Architect"
duration: "2025.09 ~ 현재"
links:
  live: "https://thakicloud.com/ai/agentops"
featured: true
---

## 배경

AI Agent, MCP 서버 관리, RAG 기반 대화를 수행하는 AI 플랫폼의 프론트엔드를 처음부터 설계하는 프로젝트였습니다. 브라우저와 Desktop UI 두 환경을 동시에 지원해야 하는 요구사항이 있었습니다.

## 접근

처음부터 완벽한 추상화를 시도하기보다 **최소 버전을 먼저 만들고 점진적으로 통합하는 방식**으로 접근했습니다.

- **어댑터 라우팅 시스템 설계**: 브라우저(URL 기반)와 Desktop UI(가상 탭) 환경을 단일 코드베이스로 지원하는 라우팅 추상화 레이어 구축 (51개 파일 마이그레이션)
- **MCP Server 관리 시스템 전체 구현**: 서버 리스트/상세/생성/편집/카탈로그, Tools/Template 관리, Agent-MCP 연결 UI
- **FSD 아키텍처 도입**: Feature-Sliced Design 기반으로 전체 도메인 마이그레이션
- **E2E 테스트 인프라**: Playwright + POM 패턴, 2계정 인증, 세션 만료 감지 및 자동 복구

## 해결

분산 레포를 **pnpm 모노레포로 통합**하고 tag 기반 릴리즈 배포 파이프라인을 구축했습니다. Module Federation 기반 마이크로 프론트엔드 아키텍처로 각 앱이 독립 배포되면서도 공통 디자인 시스템을 공유합니다.

## 결과

- 단일 코드베이스로 **브라우저/Desktop 2개 플랫폼** 동시 지원
- 8개월간 **947+ 커밋, 438 PR, 363 이슈** 처리
- Token Studio 기반 디자인 시스템 npm 패키지화
