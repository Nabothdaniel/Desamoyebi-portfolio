import React from 'react';


const MailchimpForm = () => {
  return (
  <div className='form_section px-4 pt-10' >
      <div id="mc_embed_signup" className="bg-white p-6 rounded-lg shadow-lg max-w-[500px] max-lg:max-w-md mx-auto">
      <form
        action="https://gmail.us3.list-manage.com/subscribe/post?u=1c65c1ae0401313148f2e660d&amp;id=fb0388a5ea&amp;f_id=00e2c2e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <h2 className="text-2xl font-bold text-secondary mb-4 text-center">Make An Inquiry</h2>

          <div className="mb-4">
            <label htmlFor="mce-EMAIL" className="block text-sm font-medium text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-[#FFF3F7] shadow-sm text-secondary focus:outline-none"
              id="mce-EMAIL"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mce-FNAME" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="FNAME"
              id="mce-FNAME"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-[#FFF3F7] shadow-sm text-secondary focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mce-PHONE" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="PHONE"
              id="mce-PHONE"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-[#FFF3F7] shadow-sm text-secondary focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mce-COMPANY" className="block text-sm font-medium text-gray-700">
              Company
            </label>
            <input
              type="text"
              name="COMPANY"
              id="mce-COMPANY"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-[#FFF3F7] shadow-sm text-secondary focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mce-MMERGE7" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              type="text"
              name="MMERGE7"
              id="mce-MMERGE7"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md bg-[#FFF3F7] shadow-sm text-secondary focus:outline-none"
            />
          </div>

          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input
              type="text"
              name="b_1c65c1ae0401313148f2e660d_fb0388a5ea"
              tabIndex="-1"
              value=""
            />
          </div>

          <div className="flex justify-center mt-6">
            <input
              type="submit"
              value="send"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="bg-[#EA002D] text-white px-6 py-2 rounded-md shadow-sm hover:bg-border2 focus:outline-none focus:ring-offset-2 cursor-pointer"
            />
            
          </div>
        </div>
      </form>
    </div>
  </div>
  );
};

export default MailchimpForm;
