import { AuthFC } from '@/types/types';

const AuthPatternFC: AuthFC = (email, favcity)=> {
    const pattern = new RegExp(/[0-9]/)

    if (pattern.test(email) || pattern.test(favcity)) {
        throw new Error("Invalid Input")
    }
} 

 export default AuthPatternFC;
  