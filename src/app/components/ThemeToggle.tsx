'use client';

import { Button } from '@/components/ui/button';
import { RootState } from '@/lib/reduxStore/store';
import { cn } from '@/lib/utils';
import { CloudSunny, Sun } from 'iconsax-react';
import { Moon, SunMoon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

type themesTypes = 'light' | 'dark' | 'system'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<themesTypes | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const isOpen = useSelector((state: RootState) => state.userSidebar.isOpen);

  useEffect(() => {
    setIsMounted(true);
    const storedTheme = localStorage.getItem('theme') as themesTypes || 'system';
    setTheme(storedTheme);
    applyTheme(storedTheme);
  }, []);

  interface iIconsProps {
    // size: number,
    color: string,
    variant: "Bulk" | "Linear" | "Outline" | "Broken" | "Bold" | "TwoTone"
  }

  const iconsProps: iIconsProps = {
    // size: 50,
    color: "var(--icon-color)",
    variant: "Bulk"
  }

  const applyTheme = (theme: themesTypes) => {
    const root = document.documentElement;

    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.dataset.theme = systemDark ? 'dark' : 'light';
    } else {
      root.dataset.theme = theme;
    }
  };

  const handleThemeChange = () => {
    switch (theme) {
      case "light":
        setTheme("dark");
        localStorage.setItem('theme', "dark");
        applyTheme("dark");
        break;
      case "dark":
        setTheme("system");
        localStorage.setItem('theme', "system");
        applyTheme("system");
        break;
      case "system":
        setTheme("light");
        localStorage.setItem('theme', "light");
        applyTheme("light");
        break;
      default:
        break;
    }
  };

  if (!isMounted) {
    return (
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-lg animate-pulse w-16" />
        <div className="p-2 rounded-lg animate-pulse w-16" />
        <div className="p-2 rounded-lg animate-pulse w-16" />
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        onClick={handleThemeChange}
        variant="ghost"
        className="w-full justify-start gap-3 font-normal"
      >{
          theme === "light" ? <Sun {...iconsProps} style={{ height: 24, width: 24 }} /> :
            theme === "dark" ? <Moon  {...iconsProps} style={{ height: 24, width: 24 }} /> :
              <CloudSunny  {...iconsProps} style={{ height: 24, width: 24 }} />
        }
        <p className={cn('sm:text-base text-lg', { "opacity-100": isOpen, "opacity-100 md:opacity-0": !isOpen })}>
          Change Theme
        </p>
      </Button>

    </div>
  );
}
