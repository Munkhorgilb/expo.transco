export interface Dimensions {
  width: number;
  height: number;
}

export interface IUserDetails {
  avatar: string;
  firstName?: string;
  lastName?: string;
  fullName: string;
  shortName: string;
  position: string;
  description: string;
  operatorPhone: string;
  birthDate?: string;
  location?: string;
  workStartedDate?: string;
}

export interface IUserLinks {
  discord?: string;
  instagram?: string;
  facebook?: string;
  twitter?: string;
  linkedIn?: string;
  youtube?: string;
  gitHub?: string;
  website?: string;
}

export interface IBranch {
  _id: string;
  title: string;
  address: string;
  radius: number;
  coordinate: {
    latitude: string;
    longitude: string;
  };
}

export interface IUser {
  _id: string;
  firstName: string;
  fullName: string;
  lastName: string;
  email: string;
  details?: IUserDetails;
  type: string;
  companyName: string;
  username?: string;
  erxesCustomerId?: string;
  avatar?: string;
  links?: IUserLinks;
  customFieldsData?: {
    [key: string]: any;
  };
  permissionActions?: string[];
  branches?: IBranch[];
}
export interface IEventData {
  where: string;
  startDate: Date;
  endDate: Date;
  visibility: string;
  goingUserIds: string[];
  interestedUserIds: string[];
}

export interface IFeed {
  _id: string;
  title: string;
  description?: string;
  category?: string;
  images?: IAttachment[];
  attachments?: IAttachment[];
  isPinned?: boolean;
  contentType?: string;
  recipientIds: string[];
  customFieldsData?: string;
  ceremonyData?: string;
  eventData?: IEventData;
  startDate?: Date;
  endDate?: Date;
  createdBy?: string;
  createdAt?: number | string | Date;
  updatedBy?: string;
  updatedAt?: Date;
  department?: string;
  departmentIds?: string[];
  branchIds?: string[];
  unitId?: string;
  createdUser?: IUser;
  commentCount?: number;
  background?: IAttachment;
  heartCount?: number;
  isHearted?: boolean;
}

export interface IAttachment {
  name: string;
  type: string;
  url: string;
  size?: number;
  duration?: number;
  color?: string;
}

export interface IComment {
  _id: string;
  createdUser?: {
    _id?: string;
    username?: string;
    email?: string;
    details: {
      avatar: string;
      fullName: string;
      position: string;
    };
  };
  comment: string;
  replies?: IComment[];
  contentId: string;
  createdAt: Date;
}

export interface ISeenList {
  lastSeenMessageId: string;
  user: IUser;
}

export interface IReaction {
  user: IUser;
  reaction: string;
}
export interface IChatMessage {
  _id: string;
  content: string;
  type: string;
  attachments: IAttachment[];
  createdAt: string;
  createdUser: IUser;
  seenList: ISeenList[];
  relatedMessage: IChatMessage;
  isPinned: boolean;
  reactions: IReaction[];
}

export interface IChat {
  _id: string;
  name: string;
  type: string;
  isSeen: string;
  featuredImage: any[];
  createdAt: string;
  createdUser: IUser;
  participantUsers: IUser[];
  lastMessage: IChatMessage;
}

export type QueryResponse = {
  loading: boolean;
  refetch: (variables?: any) => Promise<any>;
  error?: string;
};

export type AbsenceQueryResponse = {
  requestsMain: { list: IAbsence[]; totalCount: number };
} & QueryResponse;

export interface IAbsence {
  _id: string;
  user: IUser;
  startTime: Date;
  endTime: Date;
  holidayName: string;
  reason: string;
  explanation: string;
  solved: boolean;
  status: string;
  attachment: IAttachment;

  absenceTimeType: string;
  requestDates: string[];
  totalHoursOfAbsence: string;

  note?: string;

  absenceType?: string;
}

export interface ITimeclock {
  _id: string;
  shiftStart: Date;
  shiftActive?: boolean;
  user: IUser;
  shiftEnd?: Date;
  employeeUserName?: string;
  employeeId?: number;
  deviceName?: string;
  deviceType?: string;
  inDevice?: string;
  outDevice?: string;
  inDeviceType?: string;
  outDeviceType?: string;
  branchName?: string;

  shiftNotClosed?: boolean;
}
