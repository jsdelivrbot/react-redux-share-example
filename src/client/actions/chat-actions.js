export const NEW_MESSAGE = 'NEW_MESSAGE';

export function sendMessage(userId, message) {
  const payload = { userId, message, timestamp: Date.now() };
  return { type: NEW_MESSAGE, payload };
}
