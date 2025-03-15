'use client';

import '@/shared/styles/nprogress.css';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import { useEffect } from 'react';

NProgress.configure({
  minimum: 0.2,
  showSpinner: false,
});

const ProgressBar = () => {
  const pathname = usePathname();

  useEffect(() => {
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [pathname]);

  return null;
};

export default ProgressBar;
