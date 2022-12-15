import axios from 'axios';

const BASE_URL = 'http://localhost:3048/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTc4OTM0ODgyMDQyZjU3OGE5MDQ5YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTEyMjM1MSwiZXhwIjoxNjcxMzgxNTUxfQ.G4TlE4gQc-ORgX0smEeKUsrI5nifvRrOOwu-cv2zw04'

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token: `Bearer ${TOKEN}`}
});
