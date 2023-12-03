import { Form, Field, Formik, ErrorMessage } from 'formik';
import './form-component.scss';

export default function FormikForm() {
  const submitForm = (values) => {};

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Ім'я обов'язкове для заповнення";
    }

    if (!values.email) {
      errors.email = "Електронна пошта обов'язкова для заповнення";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Невірний формат email';
    }

    if (!values.phone) {
      errors.phone = "Телефон обов'язковий для заповнення";
    } else if (!/^\d{12}$/.test(values.phone)) {
      errors.phone = 'Телефон повинен містити тільки цифри та мати довжину 12';
    }

    return errors;
  };

  return (
    <>
      <Formik
        initialValues={{
          name: 'Tata',
          email: '',
          phone: '',
        }}
        validate={validate}
        onSubmit={submitForm}
      >
        <Form className="form">
          <div className="form-field">
            <label htmlFor="name">Ім'я:</label>
            <Field type="text" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Електронна пошта:</label>
            <Field type="text" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Телефон:</label>
            <Field type="text" name="phone" />
            <ErrorMessage
              name="phone"
              component="div"
              className="error-message"
            />
          </div>

          <button type="submit" className="submit-button">
            Відправити
          </button>
        </Form>
      </Formik>
    </>
  );
}
