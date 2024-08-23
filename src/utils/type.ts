export type ItemBase = {
  count: number;
  productId: string;
  remainder?: number;
};

export type IOrderItem = IProductBase & ItemBase;

export type IOrderItemResponse = IOrderItem & {
  productName: string;
  productImgUrl: string;
};

export type ICartItem = IOrderItem & {
  productImgUrl?: string;
  name: string;
};

export type AddressFormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  province: string;
  district: string;
  street: string;
  details: string;
  registerNumber: string;
  companyName: string;
  marker: {
    lat: number;
    lng: number;
  };
  address?: {
    others: string;
    street: string;
    city_district: string;
    city: string;
    additional: string;
  };
};

export type IOrder = {
  items: IOrderItemResponse[];
  registerNumber: string | null;
  billType: string | null;
  deliveryInfo: (AddressFormData & {description: string}) | null;
  _id: string;
};

export interface IAttachment {
  name: string;
  type: string;
  url: string;
  size?: number;
  duration?: number;
}
export interface ICustomerLinks {
  website?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedIn?: string;
  youtube?: string;
  github?: string;
}

export interface IVisitorContact {
  email?: string;
  phone?: string;
}

export interface ICustomerDoc {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  phones?: string[];
  sex?: number;
  primaryPhone?: string;
  primaryEmail?: string;
  emails?: string[];
  avatar?: string;
  state?: string;
  ownerId?: string;
  position?: string;
  location?: {
    userAgent?: string;
    country?: string;
    countryCode?: string;
    remoteAddress?: string;
    hostname?: string;
    language?: string;
  };
  department?: string;
  leadStatus?: string;
  hasAuthority?: string;
  description?: string;
  isSubscribed?: string;
  links?: ICustomerLinks;
  customFieldsData?: {[key: string]: any};
  visitorContactInfo?: IVisitorContact;
  code?: string;
  birthDate?: string;
  emailValidationStatus?: string;
  phoneValidationStatus?: string;

  isOnline?: boolean;
  lastSeenAt?: number;
  sessionCount?: number;
  score?: number;
}

export interface ICustomField {
  field: string;
  value: any;
  stringValue?: string;
  numberValue?: number;
  dateValue?: Date;
}

export interface ICarDoc {
  createdAt?: Date;
  modifiedAt?: Date;

  scopeBrandIds?: string[];
  ownerId?: string;
  mergedIds?: string[];
  status?: string;
  description?: string;

  plateNumber?: string;
  vinNumber?: string;
  colorCode?: string;
  categoryId?: string;

  bodyType?: string;
  fuelType?: string;
  gearBox?: string;

  vintageYear?: number;
  importYear?: number;

  attachment?: IAttachment;
}

export interface ICarCategory {
  object: IAttachment;
  _id: string;
  name: string;
  order: string;
  code: string;
  description?: string;
  parentId?: string;
  createdAt: Date;
  carCount: number;
  isRoot: boolean;
  image?: IAttachment;
  secondaryImages?: IAttachment[];
  productCategoryId?: string;
}

export interface IUserDetails {
  avatar?: string;
  fullName?: string;
  shortName?: string;
  description?: string;
  birthDate?: Date;
  position?: string;
  workStartedDate?: Date;
  location?: string;
  operatorPhone?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
}

export interface IUserLinks {
  facebook?: string;
  twitter?: string;
  linkedIn?: string;
  youtube?: string;
  github?: string;
  website?: string;
}

export interface IUserDoc {
  createdAt?: Date;
  username: string;
  email: string;
  isActive?: boolean;
  details?: IUserDetails;
  isOwner?: boolean;
  status?: string;
  links?: IUserLinks;
  getNotificationByEmail?: boolean;
  permissionActions?: string[];
  configs?: any;
  configsConstants?: any;
  score?: number;
  branchIds: string[];
  departmentIds: string[];
  positionIds: string[];
  employeeId?: string;
}

export interface IUser extends IUserDoc {
  _id: string;
  branchIds: string[];
  departmentIds: string[];
  positionIds: string[];
  customFieldsData?: {
    [key: string]: any;
  };
  isShowNotification?: boolean;
  isSubscribed?: boolean;
}

export interface ICar extends ICarDoc {
  _id: string;
  owner: IUser;
  category?: ICarCategory;
  customFieldsData: JSON;
}

export type IProductBase = {
  _id: string;
  unitPrice: number;
};

export type IProduct = IProductBase & {
  name: string;
  code?: string;
  productCount?: number;
  attachment: {
    url: string;
  };
  remainder?: number;
};

export type IPicker = {
  value: string | undefined;
  label: string | undefined;
};

export type ILocation = {
  latitude: number;
  longitude: number;
};

export type IHandleOrderBase = {
  onCompleted?: any;
};

export type IAddItem = IHandleOrderBase & {
  cart: ICartItem[] | IOrderItem[];
  product: (IProduct & ItemBase) | ICartItem;
};

export type IChangeCount = IHandleOrderBase & {
  cart: IOrderItem[];
  product: ItemBase;
};
