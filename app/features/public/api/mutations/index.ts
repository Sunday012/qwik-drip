import { type AxiosError } from "axios";
import { createMutation } from "react-query-kit";

import type { ErrorResponse } from "~/lib/client";
import { httpClient } from "~/lib/client";

import { Response } from "../type";

type CreatePatientVariables = {
  user_details: {
    email: string;
    first_name: string;
    last_name: string;
    phone?: string;
    date_of_birth: string;
    gender: string;
    city: string;
    state: string;
  };
};

type CreatePatientResponse = Response & {
  user_id: string;
};

export const useCreatePatientMutation = createMutation<
  CreatePatientResponse,
  CreatePatientVariables,
  AxiosError<ErrorResponse>
>({
  mutationFn: async (variables) => {
    return httpClient
      .post("/create-patient", variables)
      .then((res) => res.data as CreatePatientResponse);
  },
});

type OTPVariables = {
  email: string;
};

export const useSendRegisterOTPMutation = createMutation<
  Response,
  OTPVariables,
  AxiosError<ErrorResponse>
>({
  mutationFn: async (variables) => {
    return httpClient
      .post("/send-registration-otp", variables)
      .then((res) => res.data as Response);
  },
});

export const useSendLoginOTPMutation = createMutation<
  Response,
  OTPVariables,
  AxiosError<ErrorResponse>
>({
  mutationFn: async (variables) => {
    return httpClient
      .post("/send-login-otp", variables)
      .then((res) => res.data as Response);
  },
});

type VerifyOTPVariables = {
  email: string;
  otp_code: string;
};

export const useVerifyOTPMutation = createMutation<
  Response,
  VerifyOTPVariables,
  AxiosError<ErrorResponse>
>({
  mutationFn: async (variables) => {
    return httpClient
      .post("/verify-otp", variables)
      .then((res) => res.data as Response);
  },
});
