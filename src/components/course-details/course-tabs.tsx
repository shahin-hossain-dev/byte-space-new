"use client";

import { Tabs } from "radix-ui";
import { cn } from "@/lib/utils";

export interface CourseTab {
  value: string;
  label: string;
  /** Server-rendered panel. */
  content: React.ReactNode;
}

interface CourseTabsProps {
  label: string;
  tabs: readonly CourseTab[];
  className?: string;
}

/**
 * Pill tabs. Every panel stays in the HTML (hidden when inactive) so all course
 * content is crawlable and switching tabs needs no extra render.
 */
export function CourseTabs({ label, tabs, className }: CourseTabsProps) {
  return (
    <Tabs.Root defaultValue={tabs[0]?.value} className={className}>
      <Tabs.List aria-label={label} className="flex flex-wrap gap-3 md:gap-4">
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "h-9 rounded-full px-4 text-sm transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:h-10.5 md:text-base",
              "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground",
              "data-[state=active]:bg-highlight data-[state=active]:text-highlight-foreground",
            )}
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabs.map((tab) => (
        <Tabs.Content
          key={tab.value}
          value={tab.value}
          forceMount
          className="mt-8 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-[state=inactive]:hidden md:mt-10"
        >
          {tab.content}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}
