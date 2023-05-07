export type AllUserType = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  mail: string;
  password: string;
  profilePicture: string;
  profileImage: string;
  birthDay: {
    year: number;
    month: number;
    day: number;
  };
};
