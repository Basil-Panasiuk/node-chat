export const catchSocketError = (action, socket) => {
  return async (payload) => {
    try {
      await action(payload, socket);
    } catch (error) {
      console.log(error);
      socket.emit('error', 'Socket handler error');
    }
  };
};
