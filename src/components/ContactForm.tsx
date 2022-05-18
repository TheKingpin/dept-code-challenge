import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactFormSubmit } from "../types/Contact";
import * as yup from "yup";

const ContactForm: React.FC<any | null> = () => {
  const validation = yup.object().shape({
    name: yup.string().required("Fullname is required"),
    email: yup.string().required("Email is required").email("Email is invalid"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSubmit>({ resolver: yupResolver(validation) });

  const onSubmit = (data: ContactFormSubmit) => {
    console.log(JSON.stringify(data, null, 2));
  };
  return (
    <div className="w-full p-6">
      <h3 className="text-3xl text-center my-8">
        QUESTION? WE ARE HERE TO HELP!
      </h3>
      <form className="w-3/5 mx-auto p-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group my-6">
          <label className="block font-body font-bold text-base">Name</label>
          <input
            type="text"
            {...register("name")}
            className={`focus:outline-none h-12 border-b-2 w-full text-base font-body form-control ${
              errors.name ? "is-invalid border-red-800" : "border-gray-200"
            }`}
          />
        </div>
        <div className="form-group my-6">
          <label className="block font-body font-bold text-base">Email</label>
          <input
            type="text"
            {...register("email")}
            className={`focus:outline-none h-12 border-b-2 w-full text-base font-body form-control ${
              errors.email ? "is-invalid border-red-800" : "border-gray-200"
            }`}
          />
        </div>
        <div className="form-group my-6">
          <label className="block font-body font-bold text-base">Message</label>
          <textarea
            rows={4}
            {...register("message")}
            className={`focus:outline-none border-b-2 w-full font-body text-base form-control ${
              errors.message ? "is-invalid border-red-800" : "border-gray-200"
            }`}
          />
        </div>
        <button
          type="submit"
          className="py-4 px-16 bg-[#1A18F7] text-base font-body font-bold text-white uppercase"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
