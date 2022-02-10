import { SendIcon } from "../constants";

const Newsletter = () => {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center bg-[#fcf5f5]">
      <h1 className="text-6xl">Newsletter</h1>
      <h2 className="text-2xl font-light text-center  ">
        Get timely updates from your favorites products.
      </h2>
      <div className="w-3/4 md:w-1/2 h-10 flex border mt-3">
        <input
          className="px-5 grow outline-1 focus:outline-teal-700 "
          placeholder="Your email"
        />
        <button className="bg-teal-700 text-white px-5">
          <SendIcon className="!text-2xl m-auto" />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
