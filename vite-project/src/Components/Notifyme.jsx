import Button from "./Button";
export const Notifyme = () => {
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
            <form action="">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-white rounded-md w-[200px] p-3 mb-3 mr-3 text-black"
              />
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
