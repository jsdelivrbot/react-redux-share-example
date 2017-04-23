export const NEW_MESSAGE = 'NEW_MESSAGE';

export function sendMessage(userId, text) {
  const payload = { userId, text, timestamp: Date.now() };
  return { type: NEW_MESSAGE, payload };
}