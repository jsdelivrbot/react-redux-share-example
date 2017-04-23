export const NEW_MESSAGE = 'NEW_MESSAGE';

export function sendMessage(text) {
  const payload = { text, timestamp: Date.now() };
  return { type: NEW_MESSAGE, payload };
}
