import PaymentSuccess from "~/assets/icons/payment-success.svg";

import { FormContainer } from "./form-container";

export function PaymentStep() {
  return (
    <FormContainer
      image={PaymentSuccess}
      title="Thanks for your order"
      subheading="The booking confirmation has been sent to magdalene@gmail.com"
      className="min-h-full w-full gap-4 rounded-t-[16px] border border-[#2222221A] px-4 pt-6 sm:px-6 md:w-[702px] md:gap-8 md:px-0 md:pt-[32px] lg:max-w-[702px]"
      titleClassName="text-[28px] leading-[32px] 
        md:text-[36px] md:leading-[40px]
        lg:text-[40px] lg:leading-[43.2px] 
        font-bold text-[#363840] mb-3 md:mb-[16px]"
      subheadingClassName="text-[16px] leading-[24px] 
        md:text-[18px] md:leading-[27px] 
        font-normal text-[#363840] font-inter"
      containerClassName="border-t border-t-[#2222221A] px-0"
    >
      <div className="flex w-full items-center justify-between gap-4 px-4 pb-3 pt-4 sm:px-6 md:px-[32px] md:pb-[16px] md:pt-[20px]">
        <p className="font-inter text-[16px] font-medium leading-[20px] text-[#363840] md:text-[18px] md:leading-[23.4px]">
          Transaction date
        </p>
        <p className="font-inter text-[16px] font-normal leading-[24px] text-[#7F8493] md:text-[18px] md:leading-[27px]">
          2025-02-18
        </p>
      </div>
      <div className="flex w-full items-center justify-between gap-4 px-[32px] pb-[16px] pt-[20px]">
        <p className="font-inter text-[18px] font-medium leading-[23.4px] text-[#363840]">
          Payment method
        </p>
        <p className="font-inter text-[18px] font-normal leading-[27px] text-[#7F8493]">
          Visa ending with 8789
        </p>
      </div>
      <div className="flex w-full items-center justify-between gap-4 px-[32px] pb-[16px] pt-[20px]">
        <p className="font-inter text-[18px] font-medium leading-[23.4px] text-[#363840]">
          Service
        </p>
        <p className="font-inter text-[18px] font-normal leading-[27px] text-[#7F8493]">
          Weight Loss Program Consultation
        </p>
      </div>
      <div className="flex w-full items-center justify-between gap-4 px-[32px] pb-[16px] pt-[20px]">
        <p className="font-inter text-[18px] font-medium leading-[23.4px] text-[#363840]">
          Amount
        </p>
        <p className="font-inter text-[18px] font-normal leading-[27px] text-[#7F8493]">
          $100
        </p>
      </div>
    </FormContainer>
  );
}
