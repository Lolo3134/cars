import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import s from './auth-form.module.scss';
import { AUTH_FORM_SCHEME } from 'modules/user/auth-form/auth-form.constant';

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isSubmitting, errors }
  } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(AUTH_FORM_SCHEME)
  });

  // const onSubmit = (data: QueryProps) => {
  //   const { email, password } = data;

  //   authUser({
  //     email,
  //     password,
  //   }).then(( res ) => {
  //     if (res && 'data' in res) {
  //       console.log(res);
  //       setIsFormSubmitted(true);
  //       setEmail(res.data.email);
  //     }
  //   });
  // };

  const onSubmitHandler: SubmitHandler<FieldValues> = (data) => {
    // onSubmit(data as QueryProps);
  };

  return (
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
      <button disabled={!isDirty || isSubmitting} type={'submit'} className={s.create}>Create Account</button>
    </form>
  )
  ;
};