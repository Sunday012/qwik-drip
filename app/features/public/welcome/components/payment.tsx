import PaymentSuccess from "~/assets/icons/payment-success.svg";

import { FormWrapper } from "./form-wrapper";

export function PaymentStep() {
  return (
    <FormWrapper
      image={PaymentSuccess}
      title="Thanks for your order"
      subheading="The booking confirmation has been sent to magdalene@gmail.com"
      className="min-h-full max-w-[702px] px-0 md:px-0 gap-8 rounded-t-[16px] border border-[#2222221A] pt-[32px] md:w-[702px]"
      titleClassName="text-[40px] leading-[43.2px] font-bold text-[#363840] mb-[16px]"
      subheadingClassName="text-[18px] leading-[27px] font-normal text-[#363840] font-inter "
      containerClassName="border-t border-t-[#2222221A] px-0"
    >
      <div className="flex w-full items-center justify-between gap-4 px-[32px] pb-[16px] pt-[20px]">
        <p className="font-inter text-[18px] font-medium leading-[23.4px] text-[#363840]">
          Transaction date
        </p>
        <p className="font-inter text-[18px] font-normal leading-[27px] text-[#7F8493]">
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
    </FormWrapper>
  );
}
