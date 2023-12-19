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
  creationDate: string;
  lastUpdateDate: string;
  timeSpent: number;
}

export interface LoginOrRegisterProps {
  loginOrRegister: 'login' | 'register';
  setLoginOrRegister: React.Dispatch<React.SetStateAction<'login' | 'register'>>;
}
