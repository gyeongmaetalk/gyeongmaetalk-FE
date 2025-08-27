import { useState } from "react";

import { Verified } from "~/components/icons";
import { Calendar as CalendarIcon, Person } from "~/components/icons";
import { Header } from "~/components/layout/header/header";
import PageLayout from "~/components/layout/page-layout";
import CancelApplyConsult from "~/components/modal/cancel-apply-consult";
import { Button } from "~/components/ui/button";

import Calendar from "./calendar";
import TimeSelect from "./time-select";

const SecondStep = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");

  const reservationDisabled = !selectedDate || !selectedTime;

  return (
    <>
      <PageLayout
        header={
          <Header.Container>
            <Header.Left>
              <Header.Back />
            </Header.Left>
            <Header.Center>
              <Header.Title>상담 신청</Header.Title>
            </Header.Center>
            <Header.Right>
              <Header.Close onClick={() => setIsModalOpen(true)} />
            </Header.Right>
          </Header.Container>
        }
      >
        <section className="space-y-4 px-4 py-6">
          <div className="flex items-center gap-1">
            <Person className="text-primary-normal" />
            <p className="font-headline2-bold text-label-strong">상담사 정보</p>
          </div>
          <div className="bg-cool-neutral-98 flex items-center gap-3 rounded-lg p-3">
            <div className="bg-cool-neutral-30 size-10 rounded-full" />
            <div className="space-y-1">
              <div className="flex items-center gap-0.5">
                <p className="font-label2-bold text-label-strong">이정훈 상담사</p>
                <Verified />
              </div>
              <p className="font-label2-regular text-label-neutral">10년차 경매지도사</p>
            </div>
          </div>
        </section>
        <div className="bg-cool-neutral-99 h-2 w-full" />
        <section className="space-y-4 px-4 py-6">
          <div className="flex items-center gap-1">
            <CalendarIcon className="text-primary-normal" />
            <p className="font-headline2-bold text-label-strong">상담 일정을 선택해 주세요.</p>
          </div>
          <div className="space-y-6">
            <Calendar selectedDate={selectedDate} onDateSelect={setSelectedDate} />
            {selectedDate && (
              <>
                <div className="bg-cool-neutral-97 h-px w-full" />
                <TimeSelect selectedTime={selectedTime} onTimeSelect={setSelectedTime} />
              </>
            )}
          </div>
          <div className="mt-6 pt-2 pb-6">
            <Button className="w-full" disabled={reservationDisabled}>
              예약 하기
            </Button>
          </div>
        </section>
      </PageLayout>
      <CancelApplyConsult isOpen={isModalOpen} onCancel={() => setIsModalOpen(false)} />
    </>
  );
};

export default SecondStep;
