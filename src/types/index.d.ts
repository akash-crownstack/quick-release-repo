export type FormInputPost = {
  title: string;
  content: string;
  tagId: string;
};
export type FormChangeLogPost = {
  title: string;
  description: string;
  releaseVersion: string;
  releaseCategory: string;
};

export interface User {
  createdAt: String;
  email: String;
  firstName: String;
  id: String;
  lastName: String;
  orgName: String;
  password: String;
  resetToken: String;
  resetTokenExpiry: String;
}
