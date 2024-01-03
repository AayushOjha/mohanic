"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

type Props = {};

const Page = (props: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handelSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          formRef.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
        )
        .then(
          (result) => {
            alert("meail sent successfully");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="flex flex-wrap">
            <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <h2 className="mb-6 text-3xl font-bold">Contact us</h2>
              <p className="mb-6  text-slate-800">
                Thank you for your interest in Mohannic. We value your feedback,
                inquiries, and suggestions. Feel free to reach out to us using
                the following contact information:
              </p>
            </div>
            <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
              <form ref={formRef} onSubmit={handelSubmit}>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border border-slate-700 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    name="email"
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border border-slate-700 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="email"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    name="message"
                    placeholder="Type your message here..."
                    className="block min-h-[auto] w-full rounded border-0 bg-transparent outline-double py-[0.32rem] px-3 leading-[1.6] transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                    id="message"
                    rows={5}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="mb-6 inline-block w-full rounded bg-gray-500 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
