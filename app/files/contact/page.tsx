"use client";

import { useGlobalContext } from "@/app/Context/appcontext";
import { sendEmail } from "@/app/actions/sendEmail";
import Window from "@/app/components/Window";
import { FormEvent, useState } from "react";
export default function Contact() {
  const [to, setTo] = useState("cagatay.ersoy1@gmail.com");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const { windows } = useGlobalContext();
  const handleSubmit = () => {


    setFrom("");
    setSubject("");
    setMessage("");
  };

  return (
    <Window
      windowWidth="50vw"
      windowHeight="60vh"
      id={windows.contactWindow.id}
      title="Mail"
      defLeft="25vw"
    >
      <section className=" bg-main  flex flex-col justify-center text-main h-full">
        <form
         action={async(formData)=>{
          await sendEmail(formData)
          handleSubmit()
         }}
         
          className="flex flex-col gap-2 bg-main  p-8"
        >
          <input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-third "
            placeholder="To"
            readOnly
            name="receiver"
          />
          <input
            type="email"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-third"
            placeholder="From"
            required
            name="sender"
          />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-third"
            placeholder="Subject"
            required
            name="subject"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-2 border border-gray-300 rounded bg-third"
            placeholder="Message"
            rows={4}
            required
            name="message"
          />
          <div className="flex justify-end">
            {" "}
            <button
              type="submit"
              
              className="p-2 bg-forth text-third rounded hover:bg-blue-600 w-[10rem] shadow-md "
            >
              Send Email
            </button>
          </div>
        </form>
      </section>
    </Window>
  );
}
// 785CA6
