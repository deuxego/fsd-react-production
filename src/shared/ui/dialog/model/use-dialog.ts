import { useContext } from 'react';
import { dialogContext } from './dialog-context';

export const useDialog = () => useContext(dialogContext);
