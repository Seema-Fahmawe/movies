import * as Yup from 'yup';
export const regSchema = Yup.object({
    userName: Yup.string().required('name is required'),
    email: Yup.string().email().required('email is required and valid'),
    password: Yup.string().matches(/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{3,8}$/,{message:'password is incorrect' }).required('password is required '),
    cPassword: Yup.string().required('confirm password is required and valid').oneOf([Yup.ref('password')])
})