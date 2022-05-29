import RegisterForm from '../../RegisterForm/components/RegisterForm';
import { withFormik,useFormik } from 'formik';

export default withFormik({
  mapPropsToValues: () => ({ email: 'eee' }),


  validate: values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Введите корректный емейл';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (!/^.*[a-zA-Z]+.*$/i.test(values.password)) {
      errors.password = 'Только латиница!';
    }

    return errors;
  },


  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },


  displayName: 'RegisterForm',
})(RegisterForm);


