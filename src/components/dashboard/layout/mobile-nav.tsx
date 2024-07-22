'use client';

import * as React from 'react';
import RouterLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ArrowSquareUpRight as ArrowSquareUpRightIcon } from '@phosphor-icons/react/dist/ssr/ArrowSquareUpRight';
import { CaretUpDown as CaretUpDownIcon } from '@phosphor-icons/react/dist/ssr/CaretUpDown';

import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';
import { isNavItemActive } from '@/lib/is-nav-item-active';
import { Logo } from '@/components/core/logo';

import { navItems } from './config';
import { navIcons } from './nav-icons';

export interface MobileNavProps {
  onClose?: () => void;
  open?: boolean;
  items?: NavItemConfig[];
}

export function MobileNav({ open, onClose }: MobileNavProps): React.JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const [isMinimized, setIsMinimized] = React.useState(false);

  const handleToggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  const handleNavItemClick = (href?: string) => {
    if (href) {
      router.push(href);
      handleToggleSidebar();
    }
  };

  return (
    <Drawer
      PaperProps={{
        sx: {
          '--MobileNav-background': '#2c3e50',
          '--MobileNav-color': '#ecf0f1',
          '--NavItem-color': '#bdc3c7',
          '--NavItem-hover-background': 'rgba(236, 240, 241, 0.2)',
          '--NavItem-active-background': '#3498db',
          '--NavItem-active-color': '#ecf0f1',
          '--NavItem-disabled-color': '#7f8c8d',
          '--NavItem-icon-color': '#95a5a6',
          '--NavItem-icon-active-color': '#ecf0f1',
          '--NavItem-icon-disabled-color': '#7f8c8d',
          bgcolor: 'var(--MobileNav-background)',
          color: 'var(--MobileNav-color)',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          scrollbarWidth: 'none',
          width: isMinimized ? '80px' : '250px',
          zIndex: 'var(--MobileNav-zIndex)',
          transition: 'width 0.3s',
          '&::-webkit-scrollbar': { display: 'none' },
        },
      }}
      onClose={onClose}
      open={open}
    >
      <Stack spacing={2} sx={{ p: 3, alignItems: 'center' }}>
        <IconButton onClick={handleToggleSidebar} sx={{ position: 'absolute', top: 8, right: -40 }}>
          {isMinimized ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
        {!isMinimized && (
          <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-flex' }}>
            <Logo color="light" height={32} width={122} />
          </Box>
        )}
      </Stack>
      <Divider sx={{ borderColor: 'var(--NavItem-disabled-color)' }} />
      <Box component="nav" sx={{ flex: '1 1 auto', p: '12px' }}>
        {renderNavItems({ pathname, items: navItems, isMinimized, onNavItemClick: handleNavItemClick })}
      </Box>
    </Drawer>
  );
}

function renderNavItems({ items = [], pathname, isMinimized, onNavItemClick }: { items?: NavItemConfig[]; pathname: string; isMinimized: boolean; onNavItemClick: (href?: string) => void }): React.JSX.Element {
  const children = items.reduce((acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
    const { key, ...item } = curr;

    acc.push(<NavItem key={key} pathname={pathname} {...item} isMinimized={isMinimized} onClick={() => onNavItemClick(item.href)} />);

    return acc;
  }, []);

  return (
    <Stack component="ul" spacing={1} sx={{ listStyle: 'none', m: 0, p: 0 }}>
      {children}
    </Stack>
  );
}

interface NavItemProps extends Omit<NavItemConfig, 'items'> {
  pathname: string;
  isMinimized: boolean;
  onClick?: () => void;
}

function NavItem({ disabled, external, href, icon, matcher, pathname, title, isMinimized, onClick }: NavItemProps): React.JSX.Element {
  const active = isNavItemActive({ disabled, external, href, matcher, pathname });
  const Icon = icon ? navIcons[icon] : null;

  return (
    <li>
      <Box
        {...(href
          ? {
              component: external ? 'a' : RouterLink,
              href,
              target: external ? '_blank' : undefined,
              rel: external ? 'noreferrer' : undefined,
              onClick: onClick,
            }
          : { role: 'button', onClick })}
        sx={{
          alignItems: 'center',
          borderRadius: 1,
          color: 'var(--NavItem-color)',
          cursor: 'pointer',
          display: 'flex',
          flex: '0 0 auto',
          gap: 1,
          p: '8px 16px',
          position: 'relative',
          textDecoration: 'none',
          transition: 'background-color 0.3s, color 0.3s',
          whiteSpace: 'nowrap',
          border: '1px solid var(--NavItem-color)', // Add border for better visual separation
          ...(disabled && {
            bgcolor: 'var(--NavItem-disabled-background)',
            color: 'var(--NavItem-disabled-color)',
            cursor: 'not-allowed',
          }),
          ...(active && { bgcolor: 'var(--NavItem-active-background)', color: 'var(--NavItem-active-color)' }),
          '&:hover': {
            bgcolor: 'var(--NavItem-hover-background)',
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 auto' }}>
          {Icon ? (
            <Icon
              fill={active ? 'var(--NavItem-icon-active-color)' : 'var(--NavItem-icon-color)'}
              fontSize="var(--icon-fontSize-md)"
              weight={active ? 'fill' : undefined}
            />
          ) : null}
        </Box>
        {!isMinimized && (
          <Box sx={{ flex: '1 1 auto' }}>
            <Typography
              component="span"
              sx={{ color: 'inherit', fontSize: '0.875rem', fontWeight: 500, lineHeight: '28px' }}
            >
              {title}
            </Typography>
          </Box>
        )}
      </Box>
    </li>
  );
}
