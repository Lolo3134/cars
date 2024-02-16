import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { REGISTRATION_FORM_SCHEME } from 'modules/user/registration-form/registration-form.contants';
import s from './registration-form.module.scss';
import { useRegisterMutation } from 'app/providers/store/api/registration/registration';
import { QueryProps } from 'modules/user/registration-form/registration-form.types';
import { VerificationForm } from 'modules/user';

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isSubmitting, errors }
  } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(REGISTRATION_FORM_SCHEME)
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [registerUser] = useRegisterMutation();

  const onSubmit = (data: QueryProps) => {
    const { email, password } = data;

    registerUser({
      email,
      password,
    }).then(( res ) => {
      if (res && 'data' in res) {
        console.log(res);
        setIsFormSubmitted(true);
        setEmail(res.data.email);
      }
    });
  };

  const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
    onSubmit(data as QueryProps);
  };

  let formContent;

  if (!isFormSubmitted) {
    formContent = (
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <input
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
          className={s.input}
          id="email"
          placeholder="Email"
          type="email"
        />
        {errors.email && (
          <span className={s.valid_error} role="alert">
            {errors.email?.message as string}
          </span>
        )}
        <input
          {...register('password')}
          aria-invalid={errors.password ? 'true' : 'false'}
          className={s.input}
          id="password"
          placeholder="Password"
          type="password"
        />
        {errors.password && (
          <span className={s.valid_error} role="alert">
            {errors.password?.message as string}
          </span>
        )}
        <input
          {...register('repeatPassword')}
          aria-invalid={errors.repeatPassword ? 'true' : 'false'}
          className={s.input}
          id="repeatPass"
          placeholder="Repeat the password"
          type="password"
        />
        {errors.repeatPassword && (
          <span className={s.valid_error} role="alert">
            {errors.repeatPassword?.message as string}
          </span>
        )}
        <button disabled={!isDirty || isSubmitting} type={'submit'} className={s.create}>Create Account</button>
      </form>
    );
  } else {
    formContent = <VerificationForm email={email} />;
  }

  return (
    <>{formContent}</>
  )
  ;
};