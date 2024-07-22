import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';
// import { navIcons } from './path/to/your/icons'; // Update this import path as needed

export const navItems: NavItemConfig[] = [
  // Author Dashboard
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'Author Guidelines', title: 'Author Guidelines', href: paths.dashboard.authorguidelines, icon: 'book' },
  { key: 'Online Submission', title: 'Online Submission', href: paths.dashboard.submission, icon: 'clipboard' },
  { key: 'Submitted Papers', title: 'Submitted Papers', href: paths.dashboard.manuscripts, icon: 'file-text' },
  { key: 'Send a message', title: 'Send a message', icon: 'paper-plane' },
  { key: 'Reply Message', title: 'Reply Message', href: paths.dashboard.replyreview, icon: 'paper-plane-tilt' },
  { key: 'Payment', title: 'Payment', icon: 'credit-card' },
   
  // Reviewer Dashboard
  { key: 'Start Review', title: 'Start Review', href: paths.dashboard.review, icon: 'check-circle' },
  { key: 'Tasks', title: 'Task', href: paths.dashboard.manuscripts, icon: 'file-text' },

  // Editor Dashboard
  
  { key: 'Submitted Papers', title: 'Submitted Papers', href: paths.dashboard.manuscripts, icon: 'file-text' },
  { key: 'Review History', title: 'Review History', icon: 'archive' },
  { key: 'Production', title: 'Production', icon: 'BuildIcon' },
  { key: 'Publication Management', title: 'Publication Management', icon: 'book' },
  { key: 'Settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'Production', title: 'Production', icon: 'BuildIcon' },
  { key: 'Payments Audit', title: 'Audit', icon: 'credit-card' },
  { key: 'User Management', title: 'User Management', icon: 'users' },
  
  // Editorial Board Dashboard
  { key: 'editorial-dashboard', title: 'Editorial Dashboard', icon: 'dashboard' },
  { key: 'board-activities', title: 'Board Activities',  icon: 'calendar' },
  { key: 'task-assignment', title: 'Task Assignment', icon: 'tasks' },
  { key: 'board-correspondence', title: 'Board Correspondence' ,icon: 'message-square' },
  { key: 'template-emails', title: 'Template Emails', icon: 'email' },
  { key: 'journal-metrics', title: 'Journal Metrics',icon: 'chart-bar' },
  { key: 'board-metrics', title: 'Board Metrics',icon: 'stats' },
  { key: 'board-member-info', title: 'Board Member Info', icon: 'user' },
  { key: 'bio-photo', title: 'Bio and Photo' ,icon: 'user-circle' },
  { key: 'orcid-integration', title: 'ORCID Integration', icon: 'link' },

  // All Dashboard
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
];
