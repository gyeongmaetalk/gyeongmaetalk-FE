import { Close } from "~/components/icons";
import Modal from "~/components/modal";
import { Button } from "~/components/ui/button";
import { useOutsideClick } from "~/hooks/use-outside-click";
import { resetUserQueries } from "~/lib/tanstack";
import { useAccessTokenStore, useRefreshTokenStore } from "~/lib/zustand/user";

interface LogoutModalProps {
  isOpen: boolean;
  onCancel: () => void;
}

export default function LogoutModal({ isOpen, onCancel }: LogoutModalProps) {
  const setRefreshToken = useRefreshTokenStore((state) => state.setRefreshToken);
  const setAccessToken = useAccessTokenStore((state) => state.setAccessToken);

  const [modalRef] = useOutsideClick<HTMLDivElement>(() => {
    onCancel();
  });

  const onConfirm = () => {
    setRefreshToken(null);
    setAccessToken(null);
    localStorage.clear();
    resetUserQueries();
    onCancel();
  };

  return (
    isOpen && (
      <Modal ref={modalRef}>
        <Modal.Header className="flex items-center">
          <div className="flex-1" />
          <p className="flex-1">로그아웃</p>
          <div className="flex flex-1 justify-end" onClick={onCancel}>
            <Close />
          </div>
        </Modal.Header>
        <Modal.Content>정말 로그아웃 하시겠습니까?</Modal.Content>
        <Modal.Footer className="flex flex-col gap-2">
          <Button onClick={onConfirm}>확인</Button>
        </Modal.Footer>
      </Modal>
    )
  );
}
