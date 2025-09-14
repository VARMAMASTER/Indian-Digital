"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = !mounted ? undefined : theme === "system" ? systemTheme : theme;

  const isDark = activeTheme === "dark";

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={className}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {mounted ? (
        isDark ? (
          <Moon className="size-4" />
        ) : (
          <Sun className="size-4" />
        )
      ) : (
        <Sun className="size-4" />
      )}
    </Button>
  );
}
