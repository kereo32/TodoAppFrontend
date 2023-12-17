export interface User {
  isAuthenticated: boolean;
  userInformation: {
    name: string;
    todoIds: string[];
  } | null;
}

export interface StoreState {
  user: User;
  todos: Todo[];
}

export interface Todo {
  title: string;
  description: string;
  tags: string[];
  thumbnailUrl: string;
  attachmentFileUrl: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  timeSpent: number;
}
