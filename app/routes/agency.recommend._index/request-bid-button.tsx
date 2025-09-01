import { useState } from "react";

import { useNavigate } from "react-router";

import complete from "~/assets/complete.png";
import Modal from "~/components/modal";
import { Button } from "~/components/ui/button";
import { useOutsideClick } from "~/hooks/use-outside-click";

export default function RequestBidButton() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const [modalRef] = useOutsideClick<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const onRouteToRecommendList = () => {
    navigate("/agency/recommend");
  };

  return (
    <>
      <Button className="mt-5 w-full" onClick={() => setIsOpen(true)}>
        입찰 요청하기
      </Button>
      {isOpen && (
        <Modal ref={modalRef}>
          <Modal.Header>
            <img src={complete} alt="complete" className="mx-auto mb-1 size-[52px]" />
            <p>
              <span className="text-primary-normal">이정훈 상담사</span>에게 입찰 요청을
              <br />
              완료했습니다.
            </p>
          </Modal.Header>
          <Modal.Content>
            <p>
              잠시만 기다려주세요.
              <br />곧 맞춤 매물을 추천해드릴게요.
            </p>
          </Modal.Content>
          <Modal.Footer>
            <Button className="w-full" onClick={onRouteToRecommendList}>
              추천 매물로 이동
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
