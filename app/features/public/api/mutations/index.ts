import { type AxiosError } from "axios";
import { createMutation } from "react-query-kit";

import type { ErrorResponse } from "~/lib/client";
import { httpClient } from "~/lib/client";

type OauthValues = {
  firebase_authentication_token: string;
  email: string;
  name: string;
  profile_photo_url: string;
};

export type OauthResponse = {
  message: string;
  parent_id: string;
  is_new_user: boolean;
};

export const useOauthMutation = createMutation<
  OauthResponse,
  OauthValues,
  AxiosError<ErrorResponse>
>({
  mutationFn: async (variables) => {
    return httpClient
      .post("/auth/oauth", variables)
      .then((res) => res.data as OauthResponse);
  },
});

type OTPVariables = {
  email: string;
};

type OTPResponse = {
  message: string;
};

export const useSendOTPMutation = createMutation<
  OTPResponse,
  OTPVariables,
  AxiosError<ErrorResponse>
>({
  mutationFn: async (variables) => {
    return httpClient
      .post("/auth/send-otp", variables)
      .then((res) => res.data as OTPResponse);
  },
});

type VerifyOTPVariables = {
  email: string;
  otp: string;
};

type VerifyEmailOtpVariables = {
  email: string;
  otp: string;
  user_id: string;
};

type VerifyOTPResponse = {
  message: string;
  session: string;
  user_id: string;
  is_new_user: boolean;
  security?: {
    last_updated: number;
    security_answer: string;
    security_question: string;
  };
};

export const useVerifyOTPMutation = createMutation<
  VerifyOTPResponse,
  VerifyOTPVariables,
  AxiosError<ErrorResponse>
>({
  mutationFn: async (variables) => {
    return httpClient
      .post("/auth/verify-otp", variables)
      .then((res) => res.data as VerifyOTPResponse);
  },
});

export const useVerifyEmailOTPMutation = createMutation<
  VerifyOTPResponse,
  VerifyEmailOtpVariables,
  AxiosError<ErrorResponse>
>({
  mutationFn: async (variables) => {
    return httpClient
      .post("/parents/change-email", variables)
      .then((res) => res.data as VerifyOTPResponse);
  },
});
