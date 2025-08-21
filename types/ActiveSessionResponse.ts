export type Session = {
  userName: string;
  userId: string;
  email: string;
  ipAddress: string;
  city: string;
  country: string;
  region: string;
  status: "Active" | "Inactive";
  deviceOs: string;
  deviceType: string;
  loginTime: {
    seconds: number;
    nanos: number;
  };
  lac: string;
  sessionid: string;
};

export type TopUser = {
  userId: string;
  userName: string;
  userEmail: string;
  session: number;
  action: number;
};

export type ActiveSessionResponse = {
  sessions: Session[];
  topUsers: TopUser[];
};
