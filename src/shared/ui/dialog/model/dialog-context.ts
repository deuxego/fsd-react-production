import { createContext, Dispatch, SetStateAction } from "react";

type DialogContext = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>
}

export const  dialogContext = createContext({} as DialogContext)