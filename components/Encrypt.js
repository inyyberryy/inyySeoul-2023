import bcrypt from 'bcrypt';

export default function encryptPassword(password) {
  try {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error('An error occurred while encrypting the password:', error);
    throw error;
  }
}