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
