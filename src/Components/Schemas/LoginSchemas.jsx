import * as Yup from 'yup';
export const logSchema = Yup.object({
    email: Yup.string().required('email is requird ').email(),
    password: Yup.string().matches(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{3,8}$/,{message:'password is incorrect' }).required('password is required'),
})