'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import { Bell as BellIcon } from '@phosphor-icons/react/dist/ssr/Bell';
import { List as ListIcon } from '@phosphor-icons/react/dist/ssr/List';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react/dist/ssr/MagnifyingGlass';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import Link from 'next/link';

import { usePopover } from '@/hooks/use-popover';
import { MobileNav } from './mobile-nav';
import { UserPopover } from './user-popover';

export function MainNav(): React.JSX.Element {
  const [openNav, setOpenNav] = React.useState<boolean>(false);
  const [showSearch, setShowSearch] = React.useState<boolean>(false);
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [filter, setFilter] = React.useState<string>('all'); // Add filter state

  const userPopover = usePopover<HTMLDivElement>();

  const handleSearchClick = () => {
    setShowSearch(prev => !prev);
    if (!showSearch) {
      setSearchTerm(''); 
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilter(event.target.value as string);
  };

  return (
    <React.Fragment>
      <Box
        component="header"
        sx={{
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 1200,
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'space-between', minHeight: '64px', px: 3 }}
        >
          {/* Navigation Links */}
          <Stack
            direction="row"
            spacing={4}
            sx={{
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: 'center',
              display: { xs: 'none', sm: 'flex' }, 
              color: 'text.primary',
              '& > *': {
                fontSize: '0.875rem',
                fontWeight: 500,
              },
            }}
          >
            {/* Add navigation links here if needed */}
          </Stack>

          {/* Search and User Actions */}
          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
            <IconButton
              onClick={(): void => {
                setOpenNav(true);
              }}
              sx={{ display: { lg: 'none' }, color: 'text.primary' }}
            >
              <ListIcon />
            </IconButton>
            <Tooltip title="Search">
              <IconButton onClick={handleSearchClick} sx={{ color: 'text.primary' }}>
                <MagnifyingGlassIcon />
              </IconButton>
            </Tooltip>
            {showSearch && (
              <Stack direction="row" spacing={2} alignItems="center">
                <TextField
                  variant="outlined"
                  placeholder="Search..."
                  size="small"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  sx={{
                    ml: 2,
                    width: { xs: '150px', sm: '200px', md: '300px' },
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    '& .MuiInputBase-root': {
                      height: 40,
                    },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 1,
                    },
                    '& .MuiInputBase-input': {
                      padding: '0 12px',
                    },
                  }}
                />
                <Select
                  value={filter}
                  // onChange={handleFilterChange}
                  displayEmpty
                  size="small"
                  sx={{ bgcolor: 'background.paper', borderRadius: 1 }}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="articles">Articles</MenuItem>
                  <MenuItem value="issues">Issues</MenuItem>
                  <MenuItem value="authors">Authors</MenuItem>
                </Select>
              </Stack>
            )}
          </Stack>

          <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
            <Tooltip title="Contacts">
              <IconButton sx={{ color: 'text.primary' }}>
                <UsersIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <Badge badgeContent={4} color="success" variant="dot">
                <IconButton sx={{ color: 'text.primary' }}>
                  <BellIcon />
                </IconButton>
              </Badge>
            </Tooltip>
            <Avatar
              onClick={userPopover.handleOpen}
              ref={userPopover.anchorRef}
              src="/assets/avatar.png"
              sx={{ cursor: 'pointer' }}
            />
          </Stack>
        </Stack>
      </Box>
      <UserPopover anchorEl={userPopover.anchorRef.current} onClose={userPopover.handleClose} open={userPopover.open} />
      <MobileNav
        onClose={() => {
          setOpenNav(false);
        }}
        open={openNav}
      />
    </React.Fragment>
  );
}
