import { NextResponse } from "next/server";
import { quizzes } from "../../../quiz/quizzes";

function normalizeQuestion(question, index) {
  const options = Array.isArray(question?.options)
    ? question.options
        .filter((option) => typeof option === "string")
        .map((option) => option.trim())
        .filter(Boolean)
    : [];

  while (options.length < 4) {
    options.push(`Option ${String.fromCharCode(65 + options.length)}`);
  }

  const safeOptions = options.slice(0, 4);
  const safeAnswer =
    Number.isInteger(question?.answer) &&
    question.answer >= 0 &&
    question.answer < safeOptions.length
      ? question.answer
      : 0;

  return {
    question:
      typeof question?.question === "string" && question.question.trim()
        ? question.question
        : `Question ${index + 1}`,
    options: safeOptions,
    answer: safeAnswer,
    image:
      typeof question?.image === "string" && question.image.trim()
        ? question.image
        : null,
  };
}

export async function GET(_request, { params }) {
  const { slug } = await params;
  const quiz = quizzes[slug];

  if (!quiz) {
    return NextResponse.json({ error: "Quiz not found" }, { status: 404 });
  }

  const questions = Array.isArray(quiz.questions)
    ? quiz.questions.map((question, index) =>
        normalizeQuestion(question, index),
      )
    : [];

  return NextResponse.json(
    {
      slug,
      title:
        typeof quiz.title === "string" && quiz.title.trim()
          ? quiz.title
          : "Quiz",
      questions,
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
