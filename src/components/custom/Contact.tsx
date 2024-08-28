"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
// import { sendEmail } from '@/utils/send-email';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit,reset  } = useForm<FormData>();
  const { toast } = useToast();
  function sendEmail(data: FormData) {
    const apiEndpoint = "/api/email";
   console.log('data` = ' + JSON.stringify(data));
    fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if(response.error) {
          toast({
            variant: "destructive",
            title: "Something went wrong",
            description: "There was an error, please try again",
            // action: (
            //   <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            // ),
          });
          reset();
          return;
        }
        toast({
          variant: "successful",
          title: "Email Sent",
          description: "Thanks for the headsup, will contact you soon",
          // action: (
          //   <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          // ),
        });
        reset();
        // alert(response.message);
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "There was an error, please try again",
          // action: (
          //   <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
          // ),
        })      });
  }

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form id="contactForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <div className="mx-0 mb-1 sm:mb-4">
          <div className="mx-0 mb-1 sm:mb-4">
            <label
              htmlFor="name"
              className="pb-1 text-xs uppercase tracking-wider"
            ></label>
            <input
              type="text"
              placeholder="Full Name"
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mx-0 mb-1 sm:mb-4">
            <label
              htmlFor="email"
              className="pb-1 text-xs uppercase tracking-wider"
            ></label>
            <input
              type="email"
              autoComplete="email"
              placeholder="Your email address"
              className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
              {...register("email", { required: true })}
            />
          </div>
        </div>
        <div className="mx-0 mb-1 sm:mb-4">
          <label
            htmlFor="textarea"
            className="pb-1 text-xs uppercase tracking-wider"
          ></label>
          <textarea
            id="textarea"
            cols={30}
            rows={5}
            placeholder="Write your message..."
            {...register("message", { required: true })}
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
          ></textarea>
        </div>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="w-full bg-earth-500 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
        >
          Send Message
        </button>
      </div>
    </form>

  );
};

export default Contact;