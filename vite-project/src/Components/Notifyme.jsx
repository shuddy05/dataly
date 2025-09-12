import Button from "./Button";
import { useState } from "react";
export const Notifyme = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // hadnle input
    if (!email) {
      setError("Please enter a valid email");
      return;
    }

    setEmail("");
    setError("");
  };

  return (
    <section className="bg-black text-white ">
      <div className="layout ">
        <div className=" flex flex-col lg:flex-row justify-between gap-10  py-15  ">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold mb-1">
              Want tips & tricks to{" "}
              <span className="text-green-500">optimize</span> your flow?
            </h1>
            <p className="text-md">
              Sign up to our newsletter and stay up to date..
            </p>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              className=" flex flex-col md:flex-row items-start gap-3"
            >
              <div>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="bg-white rounded-md w-[200px] p-3 mb-3  text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className="text-sm text-red-600 ">{error}</p>
              </div>

              <Button
                content={"Notify Me"}
                className={"bg-green-400 text-black"}
                type={"submit"}
              />
            </form>
            <p className="mt-4">
              We care bout the protection of your data. Read our
              <span className="text-green-500"> Privacy Policy.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notifyme;
