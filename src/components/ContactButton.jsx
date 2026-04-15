"use client";
const ContactButton = ({ icon, children }) => {
  return (
    <button className="px-10 py-4 bg-[#F8FAFC] shadow flex flex-col items-center cursor-pointer">
      {icon} {children}
    </button>
  );
};

export default ContactButton;
