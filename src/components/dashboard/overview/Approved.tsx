// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Stack from '@mui/material/Stack';
// import type { SxProps } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import { FileText as FileTextIcon } from '@phosphor-icons/react/dist/ssr/FileText';

// export interface ApprovedProps {
//   sx?: SxProps;
//   value: string;
// }

// export function approved({ sx, value }: ApprovedProps): React.JSX.Element {
//   return (
//     <Card sx={sx}>
//       <CardContent>
//         <Stack spacing={2}>
//           <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
//             <Stack spacing={1}>
//               <Typography color="text.secondary" variant="overline">
//                 Approved
//               </Typography>
//               <Typography variant="h4">{value}</Typography>
//             </Stack>
//             <Avatar sx={{ backgroundColor: 'var(--mui-palette-success-main)', height: '56px', width: '56px' }}>
//               <FileTextIcon fontSize="var(--icon-fontSize-lg)" />
//             </Avatar>
//           </Stack>
//         </Stack>
//       </CardContent>
//     </Card>
//   );
// }
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Notebook as BookIcon } from '@phosphor-icons/react/dist/ssr/Notebook';

export interface BudgetProps {
  sx?: SxProps;
  value: string;
}

export function approved({ sx, value }: BudgetProps): React.JSX.Element {
  return (
    <Card sx={{ ...sx, border: '1px solid rgba(0, 0, 0, 0.12)', borderRadius: '8px' }}>
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
            <Stack spacing={1}>
              <Typography color="text.secondary" variant="overline">
                Approved
              </Typography>
              <Typography variant="h4">{value}</Typography>
            </Stack>
            <Avatar sx={{ backgroundColor: 'var(--mui-palette-primary-main)', height: '56px', width: '56px' }}>
              <BookIcon fontSize="var(--icon-fontSize-lg)" />
            </Avatar>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
