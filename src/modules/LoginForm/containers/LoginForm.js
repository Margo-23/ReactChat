import LoginForm from '../../LoginForm/components/LoginForm';
import { withFormik,useFormik } from 'formik';
import validateForm from '../../../utils/validate';

export default withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      email: '',
      password: '',
    }),
  validate: values => {
    let errors = {};
    validateForm({ isAuth: true, values, errors });
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
      console.log(123654);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },


  displayName: 'LoginForm',
})(LoginForm);



