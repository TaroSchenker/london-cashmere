import jwt from 'jsonwebtoken';

export const generateToken = (userId: string, role: string) => {
    const secret = process.env.JWT_SECRET || 'default_secret'; // Always have a backup in case the env variable is not set.
    return jwt.sign({ _id: userId, role }, secret, { expiresIn: '1h' });
}
