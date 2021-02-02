export interface User {
  id: number
  name: string
  username: string
  email: string
  address: any
  phone: string
  website: string
  company: any
  posts: any[]
}

export interface UsersData {
  users: {
    count: number
    currentPage: number
    totalPages: number
    data: User[]
  }
}

export interface UsersVars {
  pagination: {
    limit: number
    page: number
  }
}
