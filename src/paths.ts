export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    manuscripts: '/dashboard/manuscripts',
    authorguidelines: '/dashboard/author',
    submission: '/dashboard/submission',
    review:'/dashboard/reviewManuscript',
    replyreview:'/dashboard/reply-review',
    settings: '/dashboard/settings',

  },
  errors: { notFound: '/errors/not-found' },
} as const;
