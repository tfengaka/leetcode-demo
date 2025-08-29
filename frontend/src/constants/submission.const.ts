export const SUBMISSION_STATUS = {
  // Processing States
  [1]: {
    description: 'In Queue',
    color: '#6b7280', // gray
  },
  [2]: {
    description: 'Processing',
    color: '#3b82f6', // blue
  },
  // Success States
  [3]: {
    description: 'Accepted',
    color: '#10b981', // green
  },
  // Error States
  [4]: {
    description: 'Wrong Answer',
    color: '#f59e0b', // amber
  },
  [5]: {
    description: 'Time Limit Exceeded',
    color: '#ef4444', // red
  },
  [6]: {
    description: 'Compilation Error',
    color: '#ef4444', // red
  },
  [7]: {
    description: 'Runtime Error (SIGSEGV)',
    color: '#ef4444', // red
  },
  [8]: {
    description: 'Runtime Error (SIGXFSZ)',
    color: '#ef4444', // red
  },
  [9]: {
    description: 'Runtime Error (SIGFPE)',
    color: '#ef4444', // red
  },
  [10]: {
    description: 'Runtime Error (SIGABRT)',
    color: '#ef4444', // red
  },
  [11]: {
    description: 'Runtime Error (NZEC)',
    color: '#ef4444', // red
  },
  [12]: {
    description: 'Runtime Error (Other)',
    color: '#ef4444', // red
  },
  [13]: {
    description: 'Internal Error',
    color: '#8b5cf6', // purple
  },
  [14]: {
    description: 'Exec Format Error',
    color: '#ef4444', // red
  },
};
