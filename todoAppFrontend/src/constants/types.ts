export interface User {
  isAuthenticated: boolean;
  userInformation: {
    username: string;
    todoIds: string[];
    userId: string;
  } | null;
}

export interface StoreState {
  user: User;
}

export interface Todo {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  thumbnailUrl: string;
  attachmentFileUrl: string;
  isActive: boolean;
  creationDate: string;
  lastUpdatedDate: string;
  timeSpent: number;
}

export interface LoginOrRegisterProps {
  loginOrRegister: 'login' | 'register';
  setLoginOrRegister: React.Dispatch<React.SetStateAction<'login' | 'register'>>;
}
