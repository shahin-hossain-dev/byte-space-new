import Image from "next/image";
import { CircleCheckIcon } from "lucide-react";
import { COURSE_DETAILS_COPY, COURSE_REVIEWS } from "@/constants";
import type { Course, CourseDetail } from "@/types";
import { RatingStars } from "@/components/shared/rating-stars";
import { LessonList } from "./lesson-list";

interface PanelProps {
  course: Course;
  detail: CourseDetail;
}

const headingClass = "text-xl font-semibold tracking-tight md:text-[22px]";

export function CourseAboutPanel({ detail }: PanelProps) {
  return (
    <>
      <h2 className={headingClass}>{COURSE_DETAILS_COPY.descriptionTitle}</h2>
      <div className="mt-5 flex flex-col gap-6 text-base leading-[1.8] text-secondary-foreground md:mt-6">
        {detail.description.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>

      <h2 className={`${headingClass} mt-8 md:mt-10`}>{COURSE_DETAILS_COPY.sneakPeekTitle}</h2>
      <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 md:mt-6 md:gap-5">
        {detail.sneakPeek.map((image) => (
          <li key={image.src} className="relative aspect-4/3 overflow-hidden rounded-xl bg-muted">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1280px) 168px, (min-width: 640px) 22vw, 45vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>

      <h2 className={`${headingClass} mt-8 md:mt-10`}>{COURSE_DETAILS_COPY.keyPointsTitle}</h2>
      <ul className="mt-5 flex flex-col gap-4 text-base text-secondary-foreground md:mt-6">
        {detail.keyPoints.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <CircleCheckIcon
              aria-hidden="true"
              className="mt-0.5 size-5 shrink-0 fill-primary text-primary-foreground"
            />
            {point}
          </li>
        ))}
      </ul>
    </>
  );
}

export function CourseLessonsPanel({ course, detail }: PanelProps) {
  const remaining = course.lessons - detail.curriculum.length;

  return (
    <>
      <h2 className={headingClass}>{COURSE_DETAILS_COPY.lessonsTitle}</h2>
      <p className="mt-2 text-base text-secondary-foreground">
        {COURSE_DETAILS_COPY.lessonsSummary(course.lessons, course.duration)}
      </p>
      <LessonList
        lessons={detail.curriculum}
        className="mt-5 gap-0 rounded-2xl border border-border md:mt-6"
        itemClassName="border-b border-border px-4 py-4 text-base last:border-b-0 md:px-6"
      />
      {remaining > 0 && (
        <p className="mt-4 text-sm text-secondary-foreground">
          {COURSE_DETAILS_COPY.moreLessons(remaining)}
        </p>
      )}
    </>
  );
}

export function CourseReviewsPanel({ course, detail }: PanelProps) {
  return (
    <>
      <h2 className={headingClass}>{COURSE_DETAILS_COPY.reviewsTitle}</h2>
      <div className="mt-5 flex items-center gap-4 md:mt-6">
        <span aria-hidden="true" className="font-heading text-4xl font-semibold text-primary">
          {course.rating}
        </span>
        <div>
          <RatingStars rating={course.rating} />
          <p className="mt-1 text-sm text-secondary-foreground">
            {COURSE_DETAILS_COPY.reviewsSummary(course.rating, detail.reviewCount)}
          </p>
        </div>
      </div>

      <ul className="mt-6 flex flex-col gap-4 md:mt-8">
        {COURSE_REVIEWS.map((review) => (
          <li key={review.id}>
            <article className="rounded-2xl border border-border p-5 md:p-6">
              <header className="flex items-center gap-3">
                <Image
                  src={review.avatar.src}
                  alt={review.avatar.alt}
                  width={48}
                  height={48}
                  className="size-10 shrink-0 rounded-full object-cover md:size-12"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-base font-medium">{review.name}</h3>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
                <RatingStars rating={review.rating} />
              </header>
              <p className="mt-4 text-base leading-[1.7] text-secondary-foreground">{review.comment}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
