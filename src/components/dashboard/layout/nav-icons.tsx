import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { ChartPie as ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { Book as BookIcon } from '@phosphor-icons/react/dist/ssr/Book';
import { Clipboard as ClipboardIcon } from '@phosphor-icons/react/dist/ssr/Clipboard';
import { FileText as FileTextIcon } from '@phosphor-icons/react/dist/ssr/FileText';
import { PaperPlane as PaperPlaneIcon } from '@phosphor-icons/react/dist/ssr/PaperPlane';
import { PaperPlaneTilt as PaperPlaneTiltIcon } from '@phosphor-icons/react/dist/ssr/PaperPlaneTilt';
import { CheckCircle as CheckCircleIcon } from '@phosphor-icons/react/dist/ssr/CheckCircle';
import { GearSix as GearSixIcon } from '@phosphor-icons/react/dist/ssr/GearSix';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { Archive as ArchiveIcon } from '@phosphor-icons/react/dist/ssr/Archive';
import { XSquare as XSquareIcon } from '@phosphor-icons/react/dist/ssr/XSquare';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import BuildIcon from '@mui/icons-material/Build';

export const navIcons: Record<string, Icon | any> = {
  'chart-pie': ChartPieIcon,
  'book': BookIcon,
  'clipboard': ClipboardIcon,
  'file-text': FileTextIcon,
  'paper-plane': PaperPlaneIcon,
  'paper-plane-tilt': PaperPlaneTiltIcon,
  'check-circle': CheckCircleIcon,
  'gear-six': GearSixIcon,
  'user': UserIcon,
  'users': UsersIcon,
  'archive': ArchiveIcon,
  'x-square': XSquareIcon,
  'manuscript': BookIcon,
  'BuildIcon': BuildIcon, 
  'credit-card': CreditCardIcon,
};
