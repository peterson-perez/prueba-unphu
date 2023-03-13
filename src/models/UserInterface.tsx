export interface UserInterface {
    name: string;
    firstLastName: string;
    secondLastName: string;
    id: string;
    age: string;
    gender: string;
    address: string;
    telephone: string;
    email: string;
    civilStatus: string;
    children: string;
    birthday: string;
}

export interface UsersState {
    listUsers: UserInterface[];
}