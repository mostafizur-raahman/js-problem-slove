const generateRandomPassword = (length) => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const number = '0123456789';
    const special = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    const allChars = uppercase + lowercase + number + special;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    return password;
}

const passwordLength = 10;
const randomPassword = generateRandomPassword(passwordLength);
console.log(randomPassword);
