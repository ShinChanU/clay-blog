---
name: add-content-page
description: clay-next-blog에 새 콘텐츠 페이지(블로그 포스트, 프로젝트, 정적 페이지)를 추가하는 워크플로우. 마크다운 작성, 라우트 생성, 메타데이터 설정, sitemap 갱신까지 일관된 절차를 수행. Use when 블로그 글 추가, 프로젝트 추가, 새 페이지 만들기, 콘텐츠 작성, add blog post, add project, new page를 요청할 때.
---

# 콘텐츠 페이지 추가 워크플로우

## 1. 콘텐츠 타입 결정

| 타입 | 마크다운 위치 | 라우트 |
|------|-------------|--------|
| 블로그 포스트 | `public/content/{slug}.md` | `/blog/[slug]` |
| 프로젝트 | `public/content/projects/{slug}.md` | `/projects/[slug]` |
| 정적 페이지 | 없음 (JSX 직접) | `/about`, `/contact` 등 |

## 2. 블로그 포스트 추가

1. `public/content/{slug}.md` 생성 (frontmatter 포함)
2. 이미지는 `public/content/images/` 하위에 배치
3. **추가 코드 변경 불필요** — `getSortedPostsData()`가 자동 수집

## 3. 프로젝트 추가

1. `public/content/projects/{slug}.md` 생성 (frontmatter 포함)
2. `featured: true`이면 홈 랜딩에 자동 노출
3. **추가 코드 변경 불필요** — `getSortedProjectsData()`가 자동 수집

## 4. 정적 페이지 추가

1. `src/app/{route}/page.tsx` 생성 (Server Component)
2. `generateMetadata` export 추가
3. `src/app/sitemap.ts`에 URL 추가
4. `src/shared/ui/Navbar.tsx`에 네비게이션 링크 추가

## 5. SEO 체크리스트

- [ ] `generateMetadata`에 title, description, openGraph 포함
- [ ] `sitemap.ts`에 새 라우트 반영
- [ ] OG 이미지 경로 유효성 확인

## 6. 렌더링 전략 확인

- 마크다운 기반 → SSG (`generateStaticParams`)
- 정적 페이지 → SSG (기본값)
- 인터랙티브 부분만 `'use client'` 분리
