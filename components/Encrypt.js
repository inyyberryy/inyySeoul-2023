'use client';
import bcrypt from 'bcryptjs';

export default function EncryptPassword(password) {
  const Encrypt = async () => {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      return hashedPassword;
    } catch (error) {
      console.error('An error occurred while encrypting the password:', error);
      throw error;
    }
  };
  return Encrypt();
}