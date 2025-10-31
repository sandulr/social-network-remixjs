import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import excuteQuery from './db';
import moment from 'moment';

export async function createUser({ email, password, name, username, birthday, gender }) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto
        .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
        .toString('hex');
    const user = {
        id: uuidv4(),
        createdAt: moment().format( 'YYYY-MM-DD HH:mm:ss'),
        email,
        hash,
        salt,
        name,
        username,
        birthday,
        gender,
    };

    try {
        const result = await excuteQuery({
            query: 'INSERT INTO users (id, createdAt, email, hash, salt, name, Username_Id, b_day, gender) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)',
            values: [user.id, user.createdAt.toString(), user.email, user.hash, user.salt, user.name, user.username, user.birthday, user.gender],
        });
    } catch ( error ) {
        console.log(JSON.stringify(error, null, 2));
    }

    return user;
}

// Here you should lookup for the user in your DB
export async function findUser({ email }) {
    try {
        const result = await excuteQuery({
            query: 'SELECT Int_Id, User_Profile, status, bio, Username_Id as username, b_day as birthday, name, email, id, salt, hash, gender FROM users WHERE email = ? OR Username_Id= ?',
            values: [ email, email ],
        });
        return result[0];
    } catch (error) {
        console.log(JSON.stringify(error, null, 2));
    }
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export async function validatePassword(user, inputPassword) {
    const inputHash = crypto
        .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
        .toString('hex');
    const passwordsMatch = user.hash === inputHash;
    return passwordsMatch;
}