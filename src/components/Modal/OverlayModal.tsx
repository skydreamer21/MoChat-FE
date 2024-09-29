import Button from "../Button/Button";

interface OverlayModalProps {
  title: string;
  isOpen: boolean;
  closeBtn?: boolean;
  onClose?: () => void;
  confirmText?: string;
  confirmDisabled?: boolean;
  onConfirm: () => void;
  children: React.ReactNode;
}

const OverlayModal = ({
  title,
  isOpen,
  closeBtn = true,
  onClose,
  confirmText = "확인",
  confirmDisabled = false,
  onConfirm,
  children,
}: OverlayModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 pb-20 flex items-center justify-center z-10">
      {/* Overlay */}
      <div className="fixed inset-0 bg-white opacity-75" onClick={onClose} />

      {/* Modal */}
      <div className="bg-[#ffffff] px-5 py-4 mx-6 space-y-4 rounded-lg shadow-lg z-0 w-full">
        <div className="text-lg font-semibold">{title}</div>

        <div>{children}</div>

        <div className="flex justify-end space-x-4">
          {closeBtn && <Button text="취소" variant="gray" onClick={onClose} />}
          <Button
            text={confirmText}
            variant={confirmDisabled ? "disabled" : "primary"}
            onClick={onConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default OverlayModal;
