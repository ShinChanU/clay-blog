# UX Design Brief — claychanwoo.com 전체 페이지

> Discovery Phase 0-1~0-5 결과물을 종합한 구현 청사진
> 이 문서가 Phase 1~6 구현의 입력값

---

## 전역 디자인 방향

### 브랜드 톤
- **Premium-Minimal**: 깔끔하고 여백이 넉넉한 디자인. "개발자가 직접 만든 세련된 사이트"
- **Confident, Not Flashy**: 과한 애니메이션이나 장식 없이, 콘텐츠와 수치가 말하게 하는 자신감
- **Dark-Mode First**: 개발자 타겟이므로 다크모드를 기본으로, 라이트도 완벽 지원

### 타이포그래피
- 기존 Inter 유지. 한글 본문 가독성이 핵심 (16px+ 본문, 1.6~1.8 line-height)
- 제목 계층: 페이지 타이틀 → 섹션 헤딩 → 카드 타이틀 → 본문

### 컬러
- 기존 shadcn-style CSS 변수 토큰 시스템 유지
- Primary accent: 현재 토큰 그대로 (일관성 > 변경)
- 수치/성과 강조: accent color로 하이라이트

### 레이아웃 원칙
- Container max-width: 64rem (기존 유지)
- 넉넉한 섹션 간 여백 (80px+)
- 모바일: 단일 컬럼, 터치 타겟 44px+

---

## Page 1: Home 랜딩 (`/`)

### Feature Summary
프론트엔드 개발자 신찬우의 포트폴리오 랜딩 페이지. 채용담당자가 이력서 링크를 클릭해서 처음 도착하는 곳. 3초 안에 "이 사람이 누구인지"를 전달하고, 프로젝트 또는 블로그로의 탐색을 유도한다.

### Primary User Action
Featured Projects 카드 또는 Blog 링크를 **클릭**하여 더 깊은 콘텐츠로 이동

### Design Direction
- **Hero**: 미니멀하고 자신감 있는 첫인상. 과한 애니메이션 없이, 이름 + 태그라인 + CTA로 승부
- **Feel**: "이 사람 꽤 괜찮은데?" — 깔끔함에서 오는 은근한 신뢰감
- **Anti-pattern**: 스킬 뱃지 나열, 긴 자기소개 텍스트, 히어로 영역에 너무 많은 정보

### Layout Strategy

```
[Navbar] — 고정 상단. Home | Projects | Blog | About

[Hero Section]
  - 이름 (대형 타이포)
  - 태그라인: "비효율을 시스템으로 바꾸는 프론트엔드 개발자"
  - 서브 카피 (1줄): "자동화, 아키텍처 설계, 그리고 실제 유저가 쓰는 서비스를 만듭니다"
  - CTA 2개: [프로젝트 보기] [기술 블로그]
  - 여백 충분. 화면의 80%+ 차지

[Featured Projects] — 섹션 헤딩: "Projects"
  - 3~4개 카드 그리드 (2열 데스크톱, 1열 모바일)
  - 각 카드: 썸네일 + 제목 + 수치 성과 한 줄 + 기술 태그 2~3개
  - "전체 보기 →" 링크

[Recent Posts] — 섹션 헤딩: "Blog"
  - 3~4개 글 미리보기 (제목 + 날짜 + 설명 1줄)
  - "전체 보기 →" 링크

[Footer]
  - GitHub, Blog, Email 링크
  - © 연도
```

### Key States
- **Default**: 위 레이아웃 그대로
- **Empty (프로젝트 0개)**: 발생하지 않음 (하드코딩 또는 최소 콘텐츠 보장)
- **Loading**: SSG이므로 로딩 없음. 이미지만 lazy load + skeleton
- **모바일**: 단일 컬럼, Hero 텍스트 크기 축소, 카드 풀 와이드

### Interaction Model
- Hero CTA: smooth scroll to Featured Projects 또는 /projects 이동
- 프로젝트 카드: 호버 시 미세한 리프트 + 그림자 → 클릭 → /projects/[slug]
- 블로그 항목: 호버 시 텍스트 색상 변경 → 클릭 → /blog/[slug]
- Navbar: 현재 페이지 활성 표시

### Content Requirements
- Hero 메인 카피: "비효율을 시스템으로 바꾸는 프론트엔드 개발자"
- Hero 서브 카피: "자동화, 아키텍처 설계, 그리고 실제 유저가 쓰는 서비스를 만듭니다"
- Featured Projects: 마크다운 frontmatter에서 title, description, tags, featured 읽기
- Recent Posts: 기존 getSortedPostsData() 재사용

---

## Page 2: Projects (`/projects`)

### Feature Summary
경력 프로젝트와 사이드 프로젝트를 카드 그리드로 보여주는 목록 페이지. 채용담당자가 "이 사람이 뭘 만들어봤는지" 한눈에 스캔할 수 있어야 함.

### Primary User Action
케이스 스터디를 보고 싶은 프로젝트 카드를 **클릭**

### Design Direction
- **Scannable**: 카드 정보 위계가 명확해야 함 (수치 > 제목 > 설명 > 태그)
- **Feel**: "프로젝트가 꽤 다양하고, 성과가 구체적이네"
- **Anti-pattern**: 모든 카드가 같은 디자인 → 차별화 안 됨. Featured는 조금 더 강조

### Layout Strategy

```
[페이지 헤딩] "Projects"
[서브 카피] "만들고, 측정하고, 개선한 프로젝트들"

[프로젝트 카드 그리드] — 2열 데스크톱, 1열 모바일
  각 카드:
    [썸네일 이미지 (16:9)]
    [카테고리 뱃지] "career" 또는 "side"
    [제목]
    [수치 성과 한 줄] — accent color로 강조
    [설명 1~2줄]
    [기술 태그 2~4개]
    [역할 + 기간]
```

### Key States
- **Default**: 전체 프로젝트 그리드
- **프로젝트 3~4개**: 2열로 충분. 빈 공간 없이 자연스럽게
- **프로젝트 7~10개**: 스크롤. 카테고리 필터는 Should-Have

### Content Requirements (프로젝트 마크다운 frontmatter)

```yaml
---
title: "업브렐라 — 공유 우산 서비스"
category: "side"         # "career" | "side"
date: "2024-03-01"
description: "5개월 MVP 출시, 누적 가입자 1,100명"
highlight: "누적 1,100명 가입"   # 카드에 강조 표시할 수치
tags: ["React", "Next.js", "FSD", "i18n"]
thumbnail: "upbrella-thumb.webp"
role: "Frontend Lead"
duration: "2023.10 - 2024.03"
links:
  github: "https://github.com/..."
  live: "https://..."
featured: true
---
```

---

## Page 3: Project Detail (`/projects/[slug]`)

### Feature Summary
개별 프로젝트의 케이스 스터디 페이지. 채용담당자/테크리드가 "이 사람이 실제로 어떤 문제를 어떻게 풀었는지" 깊이 확인하는 곳. 면접 결정의 직접 근거.

### Primary User Action
케이스 스터디를 끝까지 **읽고**, "면접에서 이 부분을 물어봐야겠다"고 판단

### Design Direction
- **Story-driven**: 문제→접근→해결→결과 서사가 자연스럽게 흘러야 함
- **Feel**: "이 사람의 사고 과정이 논리적이고, 결과가 구체적이네"
- **Anti-pattern**: 스크린샷만 나열, 기술 스택 목록만 반복, "했다" 중심 서술

### Layout Strategy

```
[프로젝트 헤더]
  - 제목
  - 카테고리 뱃지 + 기간 + 역할
  - 핵심 수치 1~3개 (큰 타이포 + accent)
  - 기술 태그
  - GitHub / Live 링크 버튼

[본문 — 마크다운 렌더링]
  문제→접근→해결→결과 구조의 마크다운 콘텐츠
  (기존 블로그 글과 동일한 렌더링 파이프라인)

[하단]
  - "다른 프로젝트 보기" → 이전/다음 프로젝트 링크
```

### Key States
- **Default**: 헤더 + 마크다운 본문
- **이미지 로딩**: skeleton placeholder → lazy load
- **본문 길이**: 짧은 것(500자)~긴 것(3000자) 모두 자연스러워야 함

### Interaction Model
- 스크린샷/GIF: 클릭 시 확대 (lightbox 또는 modal)
- 목차: 긴 케이스 스터디의 경우 사이드바 TOC (Optional, Should-Have)
- 하단 네비게이션: 이전/다음 프로젝트

---

## Page 4: Blog (`/blog`)

### Feature Summary
기존 블로그 포스트 목록을 /blog로 이동. 테크리드가 글 제목만 보고 "기술 깊이"를 가늠할 수 있어야 하고, 동료 개발자가 SEO로 유입되어 연쇄 탐색할 수 있어야 함.

### Primary User Action
관심 있는 글을 **클릭**하여 읽기

### Design Direction
- **Clean & Readable**: 글 제목 + 날짜 + 설명이 명확하게 보이는 리스트
- **관점 선언**: 페이지 상단에 한 줄 — "기술 선택의 '왜'를 기록합니다"
- **Feel**: "체계적으로 글을 쓰는 사람이네"

### Layout Strategy

```
[페이지 헤딩] "Blog"
[서브 카피] "기술 선택의 '왜'를 기록합니다"

[태그 필터] (Should-Have) — 전체 | 아키텍처 | 성능 | DX | ...

[글 목록] — 단일 컬럼, 시간순 정렬
  각 항목:
    [날짜] YYYY.MM.DD
    [제목] — 클릭 가능
    [설명] 1~2줄
    [태그] 2~3개
```

### Key States
- **Default**: 전체 글 목록 (최신순)
- **글 2~3개**: 적어도 자연스럽게 보여야 함 (빈 느낌 방지)
- **글 20개+**: 페이지네이션 또는 무한 스크롤 (나중에 결정)

---

## Page 5: Blog Detail (`/blog/[slug]`)

### Feature Summary
기존 /posts/[id] 페이지를 /blog/[slug]로 이동. 기존 마크다운 렌더링 + Giscus 댓글 유지. 글 하단에 관련 글 추천 추가 (Should-Have).

### Primary User Action
글을 **끝까지 읽고**, 다른 글로 이동하거나 댓글 남기기

### Design Direction
- 기존 블로그 글 디자인 기반 유지
- 코드 하이라이팅 (highlight.js github-dark) 유지
- 이미지는 lazy load + 클릭 확대

### Layout Strategy
- 기존 PostDetail 위젯 구조 유지
- 하단에 "관련 글" 섹션 추가 (태그 기반, Should-Have)
- Giscus 댓글 유지

---

## Page 6: About (`/about`)

### Feature Summary
상세 프로필 페이지. 채용담당자가 최종 확인용으로, 테크리드가 면접 전 배경 파악용으로 사용. "이력서에 안 담기는 스토리"를 보여주는 곳.

### Primary User Action
프로필을 읽고 **"이 사람을 면접에서 만나고 싶다"**고 확신

### Design Direction
- **서사 중심**: 단순 스킬 나열이 아닌, "어떤 궤적으로 여기까지 왔는지" 스토리
- **수치 시각화**: 핵심 성과 수치를 시각적으로 인상 깊게
- **Feel**: "이 사람은 자기 커리어에 대해 명확한 방향이 있구나"

### Layout Strategy

```
[프로필 헤더]
  - 이름 + 한줄 소개
  - 현재 직장/역할
  - GitHub / Blog / Email 링크

[수치 하이라이트] — 그리드 또는 가로 나열
  "3년 4개월" | "947+ 커밋" | "30+ Cursor Skills" | "검색 1위" | "96% 자동화"

[경력 타임라인]
  2023.01 — B사 입사 (BEMS, 에너지 관리)
  2025.09 — A사 이동 (AI 플랫폼, 모노레포)
  각 구간에 핵심 성과 1~2줄

[기술 스택] — 간결하게
  강점 영역만 (React, TypeScript, Next.js, Tailwind, Vite...)
  뱃지나 아이콘보다 텍스트 중심

[가치관 / 일하는 방식]
  커리어 전략 문서의 4가지 강점을 자연스러운 문장으로:
  "반복을 시스템으로", "0→1 실행력", "사이드→본업 루프", "왜를 설명"

[Footer CTA]
  "함께 일하고 싶으시다면" — 이메일 링크
```

### Key States
- **Default**: 위 레이아웃 그대로 (정적 콘텐츠)
- **모바일**: 수치 하이라이트 2x3 그리드로 변환, 타임라인 세로 축소

---

## 구현 순서 요약

| Phase | 페이지 | 핵심 |
|-------|-------|------|
| 1 | 공통 레이아웃 | Navbar + Footer + 다크모드 + 라우트 구조 |
| 2 | Home (`/`) | Hero + Featured Projects + Recent Posts |
| 3 | Projects (`/projects`, `/projects/[slug]`) | 카드 그리드 + 케이스 스터디 |
| 4 | Blog (`/blog`, `/blog/[slug]`) | 기존 이동 + 301 리다이렉트 |
| 5 | About (`/about`) | 프로필 + 수치 + 타임라인 |
| 6 | 전체 Polish | 반응형 + 성능 + 접근성 + SEO |

---

## Open Questions (구현 시 결정)

1. Hero에 프로필 사진을 넣을 것인가? (넣으면 친밀감↑, 안 넣으면 미니멀↑)
2. Featured Projects 카드에 실제 스크린샷을 넣을 것인가, 일러스트를 넣을 것인가?
3. About의 수치 하이라이트에 카운팅 애니메이션을 넣을 것인가?
4. 블로그 글 목록에서 태그 필터를 MVP에 포함할 것인가?
5. 다크모드를 시스템 설정 따라갈 것인가, 토글로만 할 것인가?
