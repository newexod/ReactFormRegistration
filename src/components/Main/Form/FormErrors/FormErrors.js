import React from 'react';

import styles from './FormErrors.scss';

export const FormErrors = ({formErrors}) =>
  <p>
    {Object.keys(formErrors).map((fieldName, i) => {
      if (formErrors[fieldName].length > 0) {
        return (
          <span key={i}>{fieldName} {formErrors[fieldName]}</span>
        );
      } else {
        return '';
      }
    })}
  </p>