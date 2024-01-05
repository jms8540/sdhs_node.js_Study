// allowSyntheticDefaultImports: true
// import crypto from 'crypto'
import * as crypto from 'crypto' // 많이 쓰이는 문법

export default function encrtptPassword (password: string): string{
    return crypto
        .createHash('sha256')
        .update(password+'#0g830T8Ha)*fdH9312R{}')
        .digest('base64')
}


