import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SemanticInput = ({ field, form: { touched, errors }, ...props }) => (
  <div>
    <Input type="text" {...field} {...props} />
    {touched[field.name] && errors[field.name] && (
      <div className="error">{errors[field.name]}</div>
    )}
  </div>
);

const SearchForm = ({ onSearch }) => (
  <section className="search-form">
    <Formik
      initialValues={{ name: '' }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required')
      })}
      onSubmit={(values, { resetForm }) => {
        onSearch(values.name);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="name" component={SemanticInput} />
          <Button type="submit" disabled={isSubmitting}>
            Search
          </Button>
        </Form>
      )}
    </Formik>
  </section>
);

export default SearchForm;
