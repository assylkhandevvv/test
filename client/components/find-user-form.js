import * as React from "react";
import { useForm } from "react-hook-form";
import formStyles from "../styles/form.module.css";

export default function FindUserForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { isLoading },
  } = useForm();

  console.log("isLoading", isLoading);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formStyles.container}>
      <label htmlFor="email" className={formStyles.labels}>
        User email:
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className={formStyles.inputs}
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Email is not valid",
          },
        })}
      />
      <label htmlFor="number" className={formStyles.labels}>
        User number:
      </label>
      <input
        id="number"
        type="number"
        name="number"
        className={`${formStyles.inputs} ${formStyles.textarea}`}
        {...register("number", {
          pattern: {
            value: /^\d+$/,
            message: "Email is not valid",
          },
        })}
      />
      <button
        type="submit"
        className={`${formStyles.inputs} ${formStyles.button}`}
      >
        Search
      </button>
    </form>
  );
}
