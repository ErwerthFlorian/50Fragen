import {WithChildren} from "../../../types";
import {ReactComponent as Close} from "../../../media/svgs/close.svg";
import styles from "./styles";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Button} from "../Button/button";
import {useThemeWithCss} from "../../../themes/useCurrentTheme";
import {getClasses} from "../types";
import {css} from "@emotion/css";

interface ModalProps extends WithChildren {
   open: boolean,
   onClose: () => void
}

interface InlineModalProps {
   buttonContent: string;
   modalTitel: string;
   modalText: string;
}

export const InlineModal = ({buttonContent, modalTitel, modalText}: InlineModalProps) => {
   const [showModal, setShowModal] = useState(false);
   const InlineButtonClasses = useMemo(() =>
      css({textDecoration: "underline", outline: "none"})
   , []);
   return (
      <>
         <Button className={InlineButtonClasses} onClick={() => setShowModal(true)}>{buttonContent}</Button>
         {<>
            <Modal open={showModal} onClose={() => setShowModal(false)}>
               <ModalTitle>{modalTitel}</ModalTitle>
               <ModalText>{modalText}</ModalText>
            </Modal></>}
      </>)
}

const modalClassNames = getClasses(styles);

export const Modal = ({open, children, onClose}: ModalProps) => {
   const modalRef = useRef<HTMLDialogElement>(null)

   useEffect(() => {
      if(open) {
         modalRef.current?.showModal();
      }
   }, [open]);

   const close = useCallback(() => {
      modalRef.current?.close();
      onClose();
   }, [onClose, modalRef])

   return <dialog className={modalClassNames.dialog} ref={modalRef}><button className={modalClassNames.modalClose} onClick={close}><Close className={modalClassNames.modalCloseIcon}/></button>{children}</dialog>
}

export const ModalTitle = ({children}: WithChildren) => {
   const {themeClasses} = useThemeWithCss();
   return <h3 className={themeClasses}>{children}</h3>
}
export const ModalText = ({children}: WithChildren) => {
   const {themeClasses} = useThemeWithCss();
   return <p className={themeClasses}>{children}</p>
}