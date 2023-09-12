//  Async Routes
export const SERVICE_ROUTES = {
  POSTS: 'post?limit=10',
  GETUSER: 'user/:id',
  getUserProfile:"user/:id/post?limit=10",
  getFriends:"user?limit=30"
};

// Thunk Status
export const THUNK_STATUS = {
  LOADING: 'loading',
  SUCCESS: 'success',
  FAILED: 'failed',
};
