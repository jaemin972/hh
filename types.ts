
export interface User {
  name: string;
  email: string;
  picture: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}
