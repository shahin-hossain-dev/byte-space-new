import type { CourseLesson } from "@/types";
import { padNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

interface LessonListProps {
  lessons: readonly CourseLesson[];
  className?: string;
  itemClassName?: string;
}

/** Numbered lessons with their duration, e.g. "01  Introduction …  12 mins". */
export function LessonList({ lessons, className, itemClassName }: LessonListProps) {
  return (
    <ol className={cn("flex flex-col gap-3", className)}>
      {lessons.map((lesson, i) => (
        <li key={lesson.title} className={cn("flex items-start gap-3", itemClassName)}>
          <span className="w-6 shrink-0 tabular-nums">{padNumber(i + 1)}</span>
          <span className="min-w-0 flex-1">{lesson.title}</span>
          <span className="shrink-0 text-sm text-primary">{lesson.duration}</span>
        </li>
      ))}
    </ol>
  );
}
