export interface UserData {
    user_id: string;
    name: string;
    age: number;
    status: string;
    amountAvailable: number;
    subscriptionType: string;
    subscriptions: number[];
    notifications: string[];
  }

  export interface SocialNetwork {
    id: number;
    platform: string;
    type: string;
    platformType: string;
  }
  