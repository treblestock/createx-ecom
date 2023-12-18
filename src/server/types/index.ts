export type * from "./endpoints.js"

export type Role = 'user' | 'admin'

export type UserData = {
  email: string,
  passHashed: string,
  fullname: string,
  roles: Role[]
}


export type AccessTokenPayload = {
  email: string,
  passHashed: string,
  roles: Role[]
}

export interface DB {
  findUser(email: string): Promise<UserData | undefined>
  saveUser(userData: UserData): Promise<UserData | undefined>
  deleteUser(email: string): Promise<boolean>
  getUsers(): Promise<UserData[]>
}

