import { WithBackHeader } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import QuestionsPage from "~/pages/questions";

export default function QuestionsLayout() {
  return (
    <PageLayout header={<WithBackHeader title="자주 묻는 질문" />}>
      <QuestionsPage />
    </PageLayout>
  );
}
