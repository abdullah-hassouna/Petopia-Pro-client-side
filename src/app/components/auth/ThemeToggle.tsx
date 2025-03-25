'use client'

import { Button } from '@/components/ui/button'
import { RootState } from '@/lib/reduxStore/store'
import { CloudSunny, Sun as IconsaxSun } from 'iconsax-react'
import { Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

type themesTypes = 'light' | 'dark' | 'system'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<themesTypes | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const isOpen = useSelector((state: RootState) => state.userSidebar.isOpen)

  useEffect(() => {
    setIsMounted(true)
    const storedTheme = (localStorage.getItem('theme') as themesTypes) || 'system'
    setTheme(storedTheme)
    applyTheme(storedTheme)
  }, [])

  // Props for iconsax icons
  const iconsaxProps = {
    color: 'var(--icon-color)',
    variant: 'Bulk' as const,
    size: 24,
  }

  const applyTheme = (theme: themesTypes) => {
    const root = document.documentElement

    if (theme === 'system') {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      root.dataset.theme = systemDark ? 'dark' : 'light'
    } else {
      root.dataset.theme = theme
    }
  }

  const handleThemeChange = () => {
    switch (theme) {
      case 'light':
        setTheme('dark')
        localStorage.setItem('theme', 'dark')
        applyTheme('dark')
        break
      case 'dark':
        setTheme('system')
        localStorage.setItem('theme', 'system')
        applyTheme('system')
        break
      case 'system':
        setTheme('light')
        localStorage.setItem('theme', 'light')
        applyTheme('light')
        break
      default:
        break
    }
  }

  if (!isMounted) {
    return (
      <div className="flex items-center">
        <div className="p-2 rounded-lg animate-pulse w-8 h-8" />
      </div>
    )
  }

  return (
    <div
      onClick={handleThemeChange}
      variant="ghost"
      size="icon"
      className="rounded-full hover:bg-background hover:cursor-pointer transition-all p-2"
    >
      {theme === 'light' ? (
        <IconsaxSun {...iconsaxProps} />
      ) : theme === 'dark' ? (
        <Moon size={24} color="var(--icon-color)" />
      ) : (
        <CloudSunny {...iconsaxProps} />
      )}
    </div>
  )
}
