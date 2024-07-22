'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import type { NavItemConfig } from '@/types/nav';
import { isNavItemActive } from '@/lib/is-nav-item-active';
import { navItems } from './config';
import { navIcons } from './nav-icons';

export function SideNav(): React.JSX.Element {
  const pathname = usePathname();
  const [isMinimized, setIsMinimized] = React.useState(false);

  const handleToggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <Box
      sx={{
        '--SideNav-background': '#2c3e50',
        '--SideNav-color': '#ecf0f1',
        '--NavItem-color': '#bdc3c7',
        '--NavItem-hover-background': 'rgba(236, 240, 241, 0.2)',
        '--NavItem-active-background': '#3498db',
        '--NavItem-active-color': '#ecf0f1',
        '--NavItem-disabled-color': '#7f8c8d',
        '--NavItem-icon-color': '#95a5a6',
        '--NavItem-icon-active-color': '#ecf0f1',
        '--NavItem-icon-disabled-color': '#7f8c8d',
        bgcolor: 'var(--SideNav-background)',
        color: 'var(--SideNav-color)',
        display: { xs: 'none', lg: 'flex' },
        flexDirection: 'column',
        height: '100%',
        left: 0,
        maxWidth: '100%',
        position: 'fixed',
        top: 0,
        width: isMinimized ? '80px' : '250px',
        zIndex: 1200,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        transition: 'width 0.3s',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      <Stack spacing={2} sx={{ p: 3, alignItems: 'center' }}>
        <IconButton onClick={handleToggleSidebar} sx={{ position: 'absolute', top: 8, right: -40 }}>
          {isMinimized ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
        {!isMinimized && (
          <Box
            component="img"
            src='/indexing/logo.png'
            alt="Logo"
            sx={{ height: 40, width: 130 }}
          />
        )}
      </Stack>
      <Divider sx={{ borderColor: 'var(--NavItem-disabled-color)' }} />
      <Box component="nav" sx={{ flex: '1 1 auto', p: '12px' }}>
        {renderNavItems({ pathname, items: navItems, isMinimized })}
      </Box>
      <Divider sx={{ borderColor: 'var(--NavItem-disabled-color)' }} />
    </Box>
  );
}

function renderNavItems({ items = [], pathname, isMinimized }: { items?: NavItemConfig[]; pathname: string; isMinimized: boolean }): React.JSX.Element {
  const children = items.reduce((acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
    const { key, ...item } = curr;
    acc.push(<NavItem key={key} pathname={pathname} {...item} isMinimized={isMinimized} />);
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
}

function NavItem({ disabled, external, href, icon, matcher, pathname, title, isMinimized }: NavItemProps): React.JSX.Element {
  const active = isNavItemActive({ disabled, external, href, matcher, pathname });
  const Icon = icon ? navIcons[icon] : null;

  return (
    <li>
      <Box
        {...(href
          ? {
              component: external ? 'a' : Link,
              href,
              target: external ? '_blank' : undefined,
              rel: external ? 'noreferrer' : undefined,
            }
          : { role: 'button' })}
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
