import color from "color";
import { Dimensions, PermissionsAndroid, Platform } from "react-native";

const apiUrl = "https://gomongolia.erxes.io/gateway";

export const CLIENT_PORTAL_ID = "MSPuOMhUNezQwQIuNhgTE";

export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;
export const isIOS = Platform.OS === "ios";

export const strip_html = (string: any, withoutCut?: boolean) => {
  if (typeof string === "undefined" || string === null) {
    return;
  } else {
    const regex = /(&nbsp;|<([^>]+)>)/gi;
    let result = string.replace(regex, "");
    result = result.replace(/&#[0-9][0-9][0-9][0-9];/gi, " ");
    if (withoutCut) {
      return result;
    }
    const cut = result.slice(0, 70);
    return cut;
  }
};

export const getAttachmentUrl = (value: string, width?: number) => {
  if (value?.includes && value.includes("localhost:")) {
    return value;
  }
  if (value?.includes && value.includes("file:///")) {
    return value;
  }
  if (value && !value.includes("https")) {
    if (width) {
      return apiUrl + "/read-file?key=" + value + "&width=" + width;
    }
    return apiUrl + "/read-file?key=" + value;
  }
  return value;
};

export const readFile = (url: string = "") => {
  const READ_FILE = "/read-file?key=";

  const parts = url?.split("key=") || [];
  if (parts.length > 1) {
    return apiUrl + READ_FILE + parts[parts?.length - 1];
  }
  return url;
};

export const getName = (item: {
  customer: {
    firstName: string;
    lastName: string;
    primaryEmail: string;
    primaryPhone: string;
    visitorContactInfo: { email: string; phone: string };
  };
}) => {
  let name = "";
  if (item?.customer?.firstName) {
    name += item?.customer?.firstName;
  }
  if (item?.customer?.lastName) {
    name += " " + item?.customer?.lastName;
  }
  if (!name && item?.customer?.primaryEmail) {
    name += item?.customer?.primaryEmail;
  }
  if (!name && item?.customer?.primaryPhone) {
    name += item?.customer?.primaryPhone;
  }
  if (!name && item?.customer?.visitorContactInfo) {
    if (item?.customer?.visitorContactInfo.email) {
      name += item?.customer?.visitorContactInfo.email;
    }
    if (item?.customer?.visitorContactInfo.phone) {
      name += item?.customer?.visitorContactInfo.phone;
    }
  }
  if (!name) {
    name = "Unknown";
  }
  return name;
};

export const renderContactName = (item: {
  firstName: any;
  lastName: any;
  primaryEmail: boolean;
  primaryPhone: boolean;
  item: any;
}) => {
  let name = "";
  if (item?.firstName) {
    name += item?.firstName;
  }
  if (item?.lastName) {
    name += " " + item?.lastName;
  }
  if (!name && item?.primaryEmail) {
    name += item?.primaryEmail;
  }
  if (!name && item?.primaryPhone) {
    name += item?.primaryPhone;
  }
  if (!name) {
    name = "Unknown";
  }
  return name;
};

export const renderUserFullName = (data: {
  email?: any;
  username?: any;
  details?: any;
}) => {
  if (data && data.details && data.details.fullName) {
    return data.details.fullName;
  }

  if (data && (data.email || data.username)) {
    return data.email || data.username;
  }

  return "Unknown";
};

export const renderFullName = (data: any) => {
  if (data.firstName || data.lastName || data.middleName || data.primaryPhone) {
    return (
      (data.firstName || "") +
      " " +
      (data.middleName || "") +
      " " +
      (data.lastName || "") +
      " " +
      (data.primaryPhone || "")
    );
  }

  if (data.primaryEmail || data.primaryPhone) {
    return data.primaryEmail || data.primaryPhone;
  }

  if (data.emails && data.emails.length > 0) {
    return data.emails[0] || "Unknown";
  }

  const { visitorContactInfo } = data;

  if (visitorContactInfo) {
    return visitorContactInfo.phone || visitorContactInfo.email || "Unknown";
  }

  return "Unknown";
};

export const cleanIntegrationKind = (name: string) => {
  if (name.includes("nylas")) {
    name = name.replace("nylas-", "");
  }
  if (name.includes("smooch")) {
    name = name.replace("smooch-", "");
  }
  if (name === "lead") {
    name = "forms";
  }
  return name;
};

export function rgba(hex: any, opacity: number) {
  return color(hex).alpha(opacity).toString();
} // Sass's darken function

export function darken(hex: any, amount: number) {
  return color(hex)
    .darken(amount / 100)
    .toString();
} // Sass's lighten function

export function lighten(hex: any, amount: number) {
  return color(hex)
    .lighten(amount / 100)
    .toString();
}

export const getUserAvatar = (user: any) => {
  if (!user) {
    return null;
  }

  const { details = {} } = user;

  if (!details?.avatar) {
    return null;
  }

  return readFile(details?.avatar);
};

export const numberWithCommas = (number: number) => {
  if (!number) {
    return 0;
  }
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
};

export const isIphoneWithNotch = () => {
  const dimen = Dimensions.get("window");
  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTV &&
    (dimen.height === 780 ||
      dimen.width === 780 ||
      dimen.height === 812 ||
      dimen.width === 812 ||
      dimen.height === 844 ||
      dimen.width === 844 ||
      dimen.height === 896 ||
      dimen.width === 896 ||
      dimen.height === 926 ||
      dimen.width === 926 ||
      dimen.height === 932)
  );
};

export const isDarkColor = (hex: any) => {
  "worklet";
  // https://stackoverflow.com/a/69353003/9999202
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  // https://stackoverflow.com/a/58270890/9999202
  const hsp = Math.sqrt(0.299 * r ** 2 + 0.587 * g ** 2 + 0.114 * b ** 2);
  return hsp < 170;
};
