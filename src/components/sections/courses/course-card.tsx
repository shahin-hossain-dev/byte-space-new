import Image from "next/image";
import Link from "next/link";
import { ChartNoAxesColumnIcon, StarIcon } from "lucide-react";
import { COURSES_COPY, courseHref } from "@/constants";
import type { Course } from "@/types";
import { AvatarGroup } from "@/components/shared/avatar-group";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/utils";

interface CourseCardProps {
  course: Course;
  className?: string;
}

export function CourseCard({ course, className }: CourseCardProps) {
  const meta = [
    `${course.lessons} ${COURSES_COPY.lessons}`,
    course.duration,
    `${course.comments} ${COURSES_COPY.comments}`,
  ];

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl border border-border bg-card p-4 text-card-foreground transition-shadow outline-ring/50 hover:shadow-xl hover:shadow-foreground/5 has-[a:focus-visible]:outline-3",
        className,
      )}
    >
      <div className="relative aspect-341/196 overflow-hidden rounded-xl bg-muted">
        <Image
          src={course.image.src}
          alt={course.image.alt}
          fill
          sizes="(min-width: 1024px) 341px, (min-width: 768px) 45vw, 100vw"
          className="object-cover"
        />
        <ul className="absolute inset-x-2 bottom-3 flex flex-wrap gap-1.5 text-[0.6875rem] sm:inset-x-3 sm:gap-2 sm:text-xs">
          {meta.map((item) => (
            <li
              key={item}
              className="rounded-full bg-background/75 px-2.5 py-1.5 text-secondary-foreground backdrop-blur-sm sm:px-3"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex min-w-0 items-start justify-between gap-3">
        <h3 title={course.title} className="truncate text-xl font-semibold tracking-tight">
          {/* Stretched over the whole card so it's one click target with one tab stop. */}
          <Link
            href={courseHref(course.id)}
            className="outline-none after:absolute after:inset-0 after:rounded-2xl"
          >
            {course.title}
          </Link>
        </h3>
        <p className="flex shrink-0 items-center gap-1 text-lg text-muted-foreground">
          <span aria-hidden="true">{course.rating}</span>
          <StarIcon
            aria-hidden="true"
            className="size-4 fill-muted-foreground/40 text-muted-foreground/40"
          />
          <span className="sr-only">{COURSES_COPY.ratingLabel(course.rating)}</span>
        </p>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        {COURSES_COPY.by} <span className="text-primary">{course.author.label}</span>
      </p>

      <div className="mt-4 flex items-center gap-3">
        <span className="inline-flex h-8.5 items-center gap-2 rounded-full bg-secondary px-4 text-sm text-secondary-foreground">
          <ChartNoAxesColumnIcon aria-hidden="true" className="size-4" />
          {course.level}
        </span>
        <AvatarGroup
          avatars={course.enrolledAvatars}
          extra={`${course.enrolledExtra}+`}
          size={32}
          itemClassName="size-8"
        />
        <span className="sr-only">{COURSES_COPY.enrolledLabel(course.enrolledExtra)}</span>
      </div>

      <p className="mt-4">
        <span className="text-xl font-bold text-primary">{formatPrice(course.price)}</span>
        <span className="text-xs text-muted-foreground">/{course.priceUnit}</span>
      </p>
    </article>
  );
}
