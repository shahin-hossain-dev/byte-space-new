import Link from "next/link";
import { ChartNoAxesColumnIcon, StarIcon, UsersIcon } from "lucide-react";
import { COURSE_DETAILS_COPY } from "@/constants";
import type { Course, CourseDetail } from "@/types";
import { cn } from "@/lib/utils";
import { ShareButton } from "./share-button";

interface CourseHeaderProps {
  course: Course;
  detail: CourseDetail;
  className?: string;
}

/** Title, byline and quick facts at the top of the blue band. */
export function CourseHeader({ course, detail, className }: CourseHeaderProps) {
  const title = detail.headline ?? course.title;
  const facts = [
    { icon: ChartNoAxesColumnIcon, label: course.level },
    {
      icon: StarIcon,
      label: `${course.rating} (${COURSE_DETAILS_COPY.reviews(detail.reviewCount)})`,
      iconClassName: "fill-primary",
    },
    { icon: UsersIcon, label: COURSE_DETAILS_COPY.students(detail.students) },
  ];

  return (
    <div className={cn("flex flex-col gap-6 md:flex-row md:items-start md:justify-between", className)}>
      <div className="min-w-0">
        <h1 className="text-3xl leading-tight font-semibold tracking-tight text-balance md:text-4xl lg:text-[40px] lg:leading-[1.25]">
          {title}
        </h1>
        <p className="mt-2 font-heading text-lg font-semibold text-balance md:text-xl">
          {detail.subtitle}
        </p>
        <p className="mt-4 text-base md:mt-6 md:text-lg">
          {COURSE_DETAILS_COPY.by}{" "}
          <Link
            href={course.author.href}
            className="rounded-sm text-highlight hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-highlight"
          >
            {course.author.label}
          </Link>
        </p>
        <ul className="mt-4 flex flex-wrap gap-3 md:gap-4">
          {facts.map(({ icon: Icon, label, iconClassName }) => (
            <li
              key={label}
              className="inline-flex h-10 items-center gap-2 rounded-full bg-background px-5 text-sm text-foreground md:text-base"
            >
              <Icon aria-hidden="true" className={cn("size-4.5 text-primary", iconClassName)} />
              {label}
            </li>
          ))}
        </ul>
      </div>
      <div className="shrink-0">
        <ShareButton title={title} />
      </div>
    </div>
  );
}
