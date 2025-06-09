import React from "react";

const Help = () => {
  return (
    <section
      className="bg-white absolute w-48 flex flex-col 
     gap-4 px-5 py-4 h-[21rem] z-[150] "
    >
      <h1 className="font-bold text-black">Help</h1>
      <p className="hover:text-black hover:cursor-pointer">Order Status</p>
      <p className="hover:text-black hover:cursor-pointer">
        Dispatch and Delivery
      </p>
      <p className="hover:text-black hover:cursor-pointer">Returns</p>
      <p className="hover:text-black hover:cursor-pointer">Contacts Us</p>
      <p className="hover:text-black hover:cursor-pointer">Privacy Policy</p>
      <p className="hover:text-black hover:cursor-pointer">Terms of Sale</p>
      <p className="hover:text-black hover:cursor-pointer">Terms of Use</p>
      <p className="hover:text-black hover:cursor-pointer">Send Us Feedback</p>
    </section>
  );
};

export default Help;
