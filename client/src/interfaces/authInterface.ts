export interface IRegister {
    name: string,
    status: string,
    password: string,
    email: string
}

export interface ILogin {
    name: string,
    password: string,
    email: string
}

export interface IToken {
    token: string
}