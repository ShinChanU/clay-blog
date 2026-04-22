'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>('system');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    }
  }, []);

  const isDark =
    theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  const cycle = () => {
    const next: Theme = theme === 'system' ? 'light' : theme === 'light' ? 'dark' : 'system';
    setTheme(next);

    if (next === 'system') {
      localStorage.removeItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    } else {
      localStorage.setItem('theme', next);
      document.documentElement.classList.toggle('dark', next === 'dark');
    }
  };

  return (
    <button
      aria-label="테마 전환"
      className="ml-2 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-foreground"
      onClick={cycle}
      title={theme === 'system' ? '시스템 설정' : theme === 'dark' ? '다크 모드' : '라이트 모드'}
      type="button"
    >
      {theme === 'system' ? (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <rect height="14" rx="2" width="20" x="2" y="3" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ) : isDark ? (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
};
