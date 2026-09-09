export class User{
    constructor({uid,displayName,email,emailVerified,phoneNumber,photoUrl,disabled,password,created,updated}){
        this.uid = uid
        this.displayName = displayName || ''
        this.email = email
        this.emailVerified = emailVerified || false
        this.phoneNumber = phoneNumber || ''
        this.photoUrl = photoUrl || ''
        this.disabled = disabled || false
        this.password = password
        this.created = created || new Date()
        this.updated = updated || new Date()
    }
}
    