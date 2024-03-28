
const ContactUs = () => {
    return (
      <div>
        <h2 className="text-center mb-5 font-bold text-3xl">Complete this form</h2>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label name="username" className="text-sm font-medium">
                Topic:*
              </label>
              <input
                id="username"
                type="text"
                placeholder="Username"
                className="w-full rounded-md p-2 bg-slate-100 focus:ring focus:ring-opacity-75 "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label name="website" className="text-sm  font-medium">
                Your Name:*
              </label>
              <input
                id="website"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md bg-slate-100 p-2 focus:ring focus:ring-opacity-75 "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label name="website" className="text-sm  font-medium">
                Your Email Address:*
              </label>
              <input
                id="website"
                type="text"
                placeholder="Your Email Address"
                className="w-full rounded-md bg-slate-100 p-2 focus:ring focus:ring-opacity-75 "
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label name="website" className="text-sm font-medium">
                Your Country:*
              </label>
              <input
                id="website"
                type="text"
                placeholder="Your Country"
                className="w-full rounded-md bg-slate-100 p-2"
              />
            </div>
            <div className="col-span-full">
              <label name="bio" className="text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="bio"
                placeholder=""
                rows={10}
                className="w-full rounded-md bg-slate-100 "
              ></textarea>
            </div>
            <button className="btn bg-[#23BE0A] text-white">Submit</button>
          </div>
        </fieldset>
      </div>
    );
};

export default ContactUs;