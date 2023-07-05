import * as Yup from 'yup';
export const forgetPasswordSchema = Yup.object({
    email: Yup.string().required('email is requird ').email(),
})
