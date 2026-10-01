import Image from "next/image";
import Link from "next/link";
import {
  COURSE_CREATOR,
  COURSE_DETAILS_COPY,
  COURSE_INCLUDES,
  COURSE_PREVIEW_LESSONS,
  ROUTES,
} from "@/constants";
import type { Course, CourseDetail } from "@/types";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";
import { LessonList } from "./lesson-list";

interface CourseSidebarProps {
  course: Course;
  detail: CourseDetail;
  className?: string;
}

/** Enrol card: lesson preview, price, what's included and the creator. */
export function CourseSidebar({ course, detail, className }: CourseSidebarProps) {
  const preview = detail.curriculum.slice(0, COURSE_PREVIEW_LESSONS);
  const remaining = course.lessons - preview.length;

  return (
    <aside
      aria-labelledby="course-enroll-title"
      className={cn(
        "rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-xl shadow-foreground/5 md:p-8 xl:p-10",
        className,
      )}
    >
      <h2 id="course-enroll-title" className="text-xl font-semibold tracking-tight md:text-[22px]">
        {COURSE_DETAILS_COPY.lessonsSummary(course.lessons, course.duration)}
      </h2>
      <LessonList lessons={preview} className="mt-5" itemClassName="text-base leading-snug" />
      {remaining > 0 && (
        <p className="mt-3 text-sm text-secondary-foreground">
          {COURSE_DETAILS_COPY.moreVideos(remaining)}
        </p>
      )}

      <p className="mt-8 text-sm leading-[1.7] text-secondary-foreground md:text-base">
        {COURSE_DETAILS_COPY.cta}
      </p>
      <p className="mt-5">
        <span className="text-4xl font-bold text-primary">{formatPrice(course.price)}</span>
        <span className="text-sm text-muted-foreground">/{course.priceUnit}</span>
      </p>
      <Button asChild variant="highlight" size="pill" className="mt-5 w-full">
        <Link href={ROUTES.signup}>{COURSE_DETAILS_COPY.enroll}</Link>
      </Button>

      <h3 className="mt-8 text-lg font-semibold tracking-tight md:text-xl">
        {COURSE_DETAILS_COPY.includesTitle}
      </h3>
      <ul className="mt-5 flex flex-col gap-4 text-sm text-secondary-foreground md:text-base">
        {COURSE_INCLUDES.map(({ label, icon: Icon }) => (
          <li key={label} className="flex items-center gap-3">
            <Icon aria-hidden="true" className="size-5 shrink-0 text-primary" />
            {label}
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-border pt-6">
        <div className="flex items-center gap-3">
          <Image
            src={COURSE_CREATOR.avatar.src}
            alt={COURSE_CREATOR.avatar.alt}
            width={56}
            height={56}
            className="size-12 shrink-0 rounded-full object-cover md:size-14"
          />
          <div className="min-w-0">
            <p className="font-heading text-lg font-medium">{COURSE_CREATOR.name}</p>
            <p className="text-sm text-secondary-foreground md:text-base">{COURSE_CREATOR.role}</p>
          </div>
        </div>
        <p className="mt-5 text-sm leading-[1.7] text-secondary-foreground md:text-base">
          {COURSE_CREATOR.bio}
        </p>
        <Button asChild variant="outline" className="mt-5 h-9 rounded-full px-4 text-sm md:text-base">
          <Link href={COURSE_CREATOR.href}>{COURSE_DETAILS_COPY.seeProfile}</Link>
        </Button>
      </div>
    </aside>
  );
}
