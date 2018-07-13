export class User {
	constructor(
		public name: string,
		public email: string,
		public username: string,
		public password: string
	) { }
}
export class UserSignUpValidation {
	constructor(
		public username: string,
		public email: string
	) { }
}
export class getUser {
	constructor(
		public email: string,
		public username: string,
		public password: string
	) { }
}
// {"name":"","email":"","username":"","password":""}
//{"name":"","email":"akimran3@gmail.com","username":"","password":"abcde"}
