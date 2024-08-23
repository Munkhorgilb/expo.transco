import { gql } from "@apollo/client/core";

const userFragment = gql`
  fragment userField on User {
    _id
    username
    email
    score
    employeeId
    links
    leaderBoardPosition
    customFieldsData
    details {
      avatar
      description
      fullName
      location
      position
      shortName
      operatorPhone
      workStartedDate
      birthDate
      firstName
      middleName
      lastName
    }
    status
  }
`;

const currentUser = gql`
  ${userFragment}
  query {
    currentUser {
      ...userField
      isOwner
      customFieldsData
      permissionActions
      leaderBoardPosition
      emailSignatures
      configs
      departments {
        _id
        title
        description
      }
      branchIds
      branches {
        _id
        title
        coordinate {
          latitude
          longitude
        }
        radius
      }
    }
  }
`;
const fieldsGroupsQuery = gql`
  query fieldsGroups(
    $contentType: String!
    $isDefinedByErxes: Boolean
    $config: JSON
  ) {
    fieldsGroups(
      contentType: $contentType
      isDefinedByErxes: $isDefinedByErxes
      config: $config
    ) {
      name
      _id
      description
      code
      order
      isVisible
      isVisibleInDetail
      contentType
      isDefinedByErxes
      config
      lastUpdatedUser {
        details {
          fullName
          __typename
        }
        __typename
      }
      fields {
        type
        text
        canHide
        validation
        options
        locationOptions {
          lat
          lng
          description
          __typename
        }
        groupId
        searchable
        showInCard
        _id
        description
        code
        order
        isVisible
        isVisibleInDetail
        contentType
        isDefinedByErxes
        lastUpdatedUser {
          details {
            fullName
            __typename
          }
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;

const login = gql`
  mutation login($password: String!, $email: String!, $deviceToken: String) {
    login(password: $password, email: $email, deviceToken: $deviceToken)
  }
`;

const users = gql`
  query users(
    $page: Int
    $perPage: Int
    $status: String
    $excludeIds: Boolean
    $searchValue: String
    $isActive: Boolean
    $ids: [String]
    $brandIds: [String]
    $departmentId: String
    $unitId: String
    $branchId: String
    $branchIds: [String]
    $segment: String
    $segmentData: String
  ) {
    users(
      page: $page
      perPage: $perPage
      status: $status
      excludeIds: $excludeIds
      searchValue: $searchValue
      isActive: $isActive
      ids: $ids
      brandIds: $brandIds
      departmentId: $departmentId
      unitId: $unitId
      branchId: $branchId
      branchIds: $branchIds
      segment: $segment
      segmentData: $segmentData
    ) {
      _id
      username
      email
      status
      isActive
      groupIds
      brandIds
      score
      details {
        avatar
        fullName
        shortName
        birthDate
        position
        workStartedDate
        location
        description
        operatorPhone
        firstName
        middleName
        lastName
        __typename
      }
      links
      employeeId
      __typename
    }
  }
`;

const usersTotalCount = gql`
  query usersTotalCount(
    $searchValue: String
    $isActive: Boolean
    $ids: [String]
    $brandIds: [String]
    $departmentId: String
    $unitId: String
    $branchId: String
  ) {
    usersTotalCount(
      searchValue: $searchValue
      isActive: $isActive
      ids: $ids
      brandIds: $brandIds
      departmentId: $departmentId
      unitId: $unitId
      branchId: $branchId
    )
  }
`;

const branches = gql`
  query branches(
    $ids: [String]
    $excludeIds: Boolean
    $perPage: Int
    $page: Int
    $searchValue: String
    $status: String
    $withoutUserFilter: Boolean
  ) {
    branches(
      ids: $ids
      excludeIds: $excludeIds
      perPage: $perPage
      page: $page
      searchValue: $searchValue
      status: $status
      withoutUserFilter: $withoutUserFilter
    ) {
      _id
      title
      address
      code
      order
      userIds
      userCount
      radius
      phoneNumber
      email
      links
      __typename
    }
  }
`;

const departments = gql`
  query departments(
    $ids: [String]
    $excludeIds: Boolean
    $perPage: Int
    $page: Int
    $searchValue: String
    $status: String
    $withoutUserFilter: Boolean
  ) {
    departments(
      ids: $ids
      excludeIds: $excludeIds
      perPage: $perPage
      page: $page
      searchValue: $searchValue
      status: $status
      withoutUserFilter: $withoutUserFilter
    ) {
      _id
      title
      description
      parentId
      code
      order
      userIds
      userCount
      __typename
    }
  }
`;

const units = gql`
  query units($searchValue: String) {
    units(searchValue: $searchValue) {
      _id
      title
      description
      code
      userIds
      userCount
      __typename
    }
  }
`;

const segments = gql`
  query segments($contentTypes: [String]!, $config: JSON) {
    segments(contentTypes: $contentTypes, config: $config) {
      _id
      contentType
      name
      description
      subOf
      color
      config
      __typename
    }
  }
`;

const userDetail = gql`
  query userDetail($id: String) {
    userDetail(_id: $id) {
      _id
      username
      email
      isActive
      status
      groupIds
      branchIds
      departmentIds
      details {
        avatar
        description
        fullName
        location
        position
        shortName
        operatorPhone
        workStartedDate
        birthDate
        firstName
        middleName
        lastName
      }
      links
      emailSignatures
      getNotificationByEmail
      customFieldsData
      score
      employeeId
      brandIds
    }
  }
`;

const usersChangePassword = gql`
  mutation usersChangePassword(
    $currentPassword: String!
    $newPassword: String!
  ) {
    usersChangePassword(
      currentPassword: $currentPassword
      newPassword: $newPassword
    ) {
      _id
    }
  }
`;

const usersEdit = gql`
  mutation usersEdit(
    $id: String!
    $details: UserDetails
    $username: String
    $email: String
    $links: JSON
    $employeeId: String
  ) {
    usersEdit(
      _id: $id
      details: $details
      username: $username
      email: $email
      links: $links
      employeeId: $employeeId
    ) {
      _id
    }
  }
`;

export default {
  currentUser,
  fieldsGroupsQuery,
  login,
  users,
  usersTotalCount,
  branches,
  departments,
  units,
  segments,
  userDetail,
  usersChangePassword,
  usersEdit,
};
