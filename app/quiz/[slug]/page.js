import QuizPage from "../components/quizLayout";
export default async function DynamicQuizPage({ params }) {
  const { slug } = await params;
  return <QuizPage slug={slug} />;
}
