const Contact = () => {
  return (
    <>
      <h1>Contact Us</h1>
      <div className="my-2">
        <form>
          <input
            type="text"
            className="border border-black p-2 rounded-lg bg-white"
            placeholder="name"
          />
          <input
            type="text"
            className="border border-black p-2 ml-2 rounded-lg bg-white"
            placeholder="message"
          />
          <button className="border border-black p-2 ml-2 bg-gray-400 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
