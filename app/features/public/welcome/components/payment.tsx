import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/start";
import { format } from "date-fns";

import PaymentSuccess from "~/assets/icons/payment-success.svg";

import { getEventResource } from "../actions";
import { useEventStore } from "../store/use-event-store";
import { FormContainer } from "./form-container";

export function PaymentStep() {
  const { invitee } = useEventStore();
  const getEventResourceFn = useServerFn(getEventResource);

  const { data, isPending } = useQuery({
    queryKey: ["event-resource"],
    queryFn: () =>
      getEventResourceFn({
        data: {
          url:
            invitee ||
            "https://api.calendly.com/scheduled_events/3f87c74e-7402-4a31-b5a0-e1e8a2e03e30/invitees/30d07fc1-f4b5-46d2-9415-6811b697bcf5",
        },
      }),
    enabled: !!invitee,
  });

  return (
    <FormContainer
      image={PaymentSuccess}
      title="Thanks for your order"
      subheading={
        isPending
          ? ""
          : `The booking confirmation has been sent to ${data?.resource.email}`
      }
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
        {isPending ? (
          <div className="h-6 w-24 animate-pulse rounded bg-gray-200" />
        ) : (
          <p className="font-inter text-[16px] font-normal leading-[24px] text-[#7F8493] md:text-[18px] md:leading-[27px]">
            {format(new Date(data?.resource.created_at || ""), "yyyy-MM-dd")}
          </p>
        )}
      </div>
      <div className="flex w-full items-center justify-between gap-4 px-[32px] pb-[16px] pt-[20px]">
        <p className="font-inter text-[18px] font-medium leading-[23.4px] text-[#363840]">
          Payment method
        </p>
        {isPending ? (
          <div className="h-6 w-20 animate-pulse rounded bg-gray-200" />
        ) : (
          <p className="font-inter text-[18px] font-normal leading-[27px] text-[#7F8493]">
            {data?.resource.payment.provider}
          </p>
        )}
      </div>
      <div className="flex w-full items-center justify-between gap-4 px-[32px] pb-[16px] pt-[20px]">
        <p className="font-inter text-[18px] font-medium leading-[23.4px] text-[#363840]">
          Service
        </p>
        {isPending ? (
          <div className="h-6 w-48 animate-pulse rounded bg-gray-200" />
        ) : (
          <p className="font-inter text-[18px] font-normal leading-[27px] text-[#7F8493]">
            Weight Loss Program Consultation
          </p>
        )}
      </div>
      <div className="flex w-full items-center justify-between gap-4 px-[32px] pb-[16px] pt-[20px]">
        <p className="font-inter text-[18px] font-medium leading-[23.4px] text-[#363840]">
          Amount
        </p>
        {isPending ? (
          <div className="h-6 w-16 animate-pulse rounded bg-gray-200" />
        ) : (
          <p className="font-inter text-[18px] font-normal leading-[27px] text-[#7F8493]">
            ${data?.resource.payment.amount}
          </p>
        )}
      </div>
    </FormContainer>
  );
}
