export type EventResponse = {
  collection: {
    cancel_url: string;
    created_at: string;
    email: string;
    event: string;
    first_name: null;
    invitee_scheduled_by: null;
    last_name: null;
    name: string;
    new_invitee: null;
    no_show: null;
    old_invitee: null;
    payment: {
      amount: number;
      currency: string;
      external_id: string;
      provider: string;
      successful: boolean;
      terms: string;
    };
    questions_and_answers: never[];
    reconfirmation: null;
    reschedule_url: string;
    rescheduled: boolean;
    routing_form_submission: null;
    scheduling_method: null;
    status: string;
    text_reminder_number: null;
    timezone: string;
    tracking: {
      utm_campaign: null;
      utm_source: null;
      utm_medium: null;
      utm_content: null;
      utm_term: null;
      salesforce_uuid: null;
    };
    updated_at: string;
    uri: string;
  }[];
  pagination: {
    count: number;
    next_page: null;
    next_page_token: null;
    previous_page: null;
    previous_page_token: null;
  };
};

export type EventResource = {
  resource: {
    cancel_url: string;
    created_at: string;
    email: string;
    event: string;
    first_name: string | null;
    invitee_scheduled_by: string | null;
    last_name: string | null;
    name: string;
    new_invitee: string | null;
    no_show: string | null;
    old_invitee: string | null;
    payment: {
      amount: number;
      currency: string;
      external_id: string;
      provider: string;
      successful: boolean;
      terms: string;
    };
    questions_and_answers: [];
    reconfirmation: string | null;
    reschedule_url: string;
    rescheduled: boolean;
    routing_form_submission: string | null;
    scheduling_method: string | null;
    status: string;
    text_reminder_number: string | null;
    timezone: string;
    tracking: {
      utm_campaign: string | null;
      utm_source: string | null;
      utm_medium: string | null;
      utm_content: string | null;
      utm_term: string | null;
      salesforce_uuid: string | null;
    };
    updated_at: string;
    uri: string;
  };
};

// export type Step = {
//   id: number;
//   title: string;
// };

// export interface InputField {
//   field: string;
//   name: string;
//   label: string;
//   placeholder?: string;
//   type?: string;
// }

// export interface RadioField {
//   field: string;
//   name: string;
//   inputVisible: boolean;
//   label: string;
// }

// export interface CheckboxField {
//   field: string;
//   name: string;
//   inputVisible: boolean;
//   label: string;
// }

// export type StepsData = {
//   id: number;
//   title: string;
//   heading: string;
//   description: string;
//   form?: (InputField | RadioField | CheckboxField)[];
// };

type Step = {
  id: number;
  title: string;
};

type PlanType = "monthly" | "yearly";

type BaseLabel = {
  type: string;
};

type RadioLabel = {
  [K in PlanType]: BaseLabel;
};
type CheckboxLabel = {
  [K in PlanType]: BaseLabel & {
    description: string;
  };
};

interface InputField {
  field: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  type?: string;
}

interface RadioField {
  field: string;
  name: string;
  value: string;
  inputVisible: boolean;
  label: string;
}

interface CheckboxField {
  field: string;
  name: string;
  inputVisible: boolean;
  label: string;
  value: string;
}

type StepsData = {
  id: number;
  title: string;
  heading: string;
  description: string;
  form?: (InputField | RadioField | CheckboxField)[];
};

type WelcomeStepsData = {
  id: number;
  title: string;
  heading: string;
  description: string;
  form?: (InputField | RadioField | CheckboxField)[];
};

export type {
  Step,
  PlanType,
  BaseLabel,
  RadioLabel,
  CheckboxLabel,
  InputField,
  RadioField,
  CheckboxField,
  StepsData,
  WelcomeStepsData
};
