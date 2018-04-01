const loggingMiddleware = (store) => (next) => (action) => {
  console.log(`redux log:`, action);
  return next(action);
}

export default loggingMiddleware;