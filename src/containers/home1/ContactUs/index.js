import tw, { styled } from "twin.macro";

import contactAnimation from "../../../assets/imgs/contact/ContactAnimations.svg";

const StyledContactUs = styled.div`
  ${tw`flex justify-between items-center gap-x-40px mt-200px laptop:flex-col laptop:gap-y-100px laptop:py-0 laptop:px-40px`}

  .section-content {
    ${tw`flex-1`}

    img {
      ${tw`max-w-full`}
    }
  }

  .section-info {
    ${tw`flex flex-col justify-between gap-y-10px items-start flex-1 laptop:w-full`}

    .section-header {
      ${tw`text-secondary text-base leading-tight tracking-normal`}
    }

    .section-title {
      ${tw`text-primary-m text-4xl leading-tight tracking-normal w-4/5`}
    }

    .section-description {
      ${tw`text-tertiary-m text-base font-normal`}
    }

    #form {
      input[type="text"],
      input[type="email"],
      textarea {
        ${tw`w-full p-20px border border-solid border-[#d9ddfe] rounded-2xl mt-40px placeholder:text-tertiary-l placeholder:text-base placeholder:font-normal placeholder:tracking-widest`}
      }

      textarea {
        ${tw`resize-none`}
      }

      .name {
        ${tw`flex justify-between items-center gap-x-40px mobile:flex-col`}
      }

      input[type="submit"] {
        ${tw`bg-primary text-white text-base tracking-widest py-4 px-40px border-none rounded-full shadow-[0px_17px_22px_#eee] transition-all duration-300 ease-in-out mt-40px hover:cursor-pointer hover:bg-secondary-m hover:shadow-[0px_25px_50px_25px_#e6e9fd]`}
      }
    }
  }
`;

const ContactUs = () => {
  return (
    <StyledContactUs>
      <div className="section-content">
        <img className="" src={contactAnimation} alt="Contact us" />
      </div>
      <div className="section-info">
        <p className="section-header">Contact Us</p>
        <p className="section-title">Send your inquiry to our expert team</p>
        <p className="section-description">
          Lorem ipsum dolor sit amet nulla turapis tellus.
        </p>
        <form action="/" method="POST" id="form">
          <div className="name">
            <input
              className=""
              type="text"
              name="first_name"
              placeholder="First name"
            />
            <input
              className=""
              type="text"
              name="last_name"
              placeholder="Last name"
            />
          </div>
          <input
            className=""
            type="email"
            name="email_address"
            placeholder="Email address"
          />
          <input
            className=""
            type="text"
            name="subject_message"
            placeholder="Subject message"
          />
          <textarea
            className=""
            name="message"
            placeholder="Your inquiry here"
            cols="30"
            rows="10"
          ></textarea>
          <input className="" type="submit" value="Send Message" />
        </form>
      </div>
    </StyledContactUs>
  );
};

export default ContactUs;
