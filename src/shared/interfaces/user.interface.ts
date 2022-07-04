export interface User {
  _id: string;
  email: string;
  avatar: string;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}
