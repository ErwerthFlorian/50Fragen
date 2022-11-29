import {WithChildren} from "../../../types";
import {ReactComponent as Close} from "../../../media/svgs/close.svg";
import styles from "./styles";
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Button} from "../Button/button";
import {useTheme, useThemeWithCss} from "../../../themes/useTheme";
import {getClasses} from "../types";
import {css, cx} from "@emotion/css";

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

   return (
      <>
         <Button onClick={() => setShowModal(true)}>{buttonContent}</Button>
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
   const {theme} = useTheme();
   const dialogClasses = useMemo(() => cx(css({backgroundColor: theme.backgroundColor}, modalClassNames.dialog)), [theme]);

   useEffect(() => {
      if(open) {
         modalRef.current?.showModal();
      }
   }, [open]);

   const close = useCallback(() => {
      modalRef.current?.close();
      onClose();
   }, [onClose, modalRef])

   return <dialog className={dialogClasses} ref={modalRef}><button className={modalClassNames.modalClose} onClick={close}><Close className={modalClassNames.modalCloseIcon}/></button>{children}</dialog>
}

export const ModalTitle = ({children}: WithChildren) => {
   const {theme} = useThemeWithCss();
   return <h3 className={theme}>{children}</h3>
}
export const ModalText = ({children}: WithChildren) => {
   const {theme} = useThemeWithCss();
   return <p className={theme}>{children}</p>
}