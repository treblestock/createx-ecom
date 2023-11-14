import type { DB, UserData } from "../types/index.js"


class Database implements DB {
  users = [] as UserData[]
  async findUser(email: string): Promise<UserData | undefined> {
    return this.users.find(user => user.email === email)
  }
  async saveUser(userData: UserData): Promise<UserData | undefined> {
    this.users.push(userData)
    return userData
  }
  async deleteUser(email: string): Promise<boolean> {
    const usersCountBefore = this.users.length
    this.users = this.users.filter(user => user.email !== email)
    const usersCountAfter = this.users.length
    return !(usersCountBefore === usersCountAfter)
  }
  async getUsers(): Promise<UserData[]> {
    return this.users
  }
}
export default new Database()