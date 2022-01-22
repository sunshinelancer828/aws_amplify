/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSpaceAdmin = /* GraphQL */ `
  query GetSpaceAdmin($id: ID!) {
    getSpaceAdmin(id: $id) {
      id
      organization
      firstname
      lastname
      email
      createdAt
      updatedAt
    }
  }
`;
export const listSpaceAdmins = /* GraphQL */ `
  query ListSpaceAdmins(
    $filter: ModelSpaceAdminFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpaceAdmins(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        organization
        firstname
        lastname
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      firstname
      lastname
      avatar
      organization
      email
      phonenumber
      address
      bio
      role
      term
      isadmin
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        firstname
        lastname
        avatar
        organization
        email
        phonenumber
        address
        bio
        role
        term
        isadmin
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCandidate = /* GraphQL */ `
  query GetCandidate($id: ID!) {
    getCandidate(id: $id) {
      id
      sourceid
      fromemail
      toemail
      organization
      firstname
      lastname
      createdAt
      updatedAt
    }
  }
`;
export const listCandidates = /* GraphQL */ `
  query ListCandidates(
    $filter: ModelCandidateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCandidates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sourceid
        fromemail
        toemail
        organization
        firstname
        lastname
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserGroup = /* GraphQL */ `
  query GetUserGroup($id: ID!) {
    getUserGroup(id: $id) {
      id
      groupname
      groupadminid
      userid
      userdata {
        id
        name
        firstname
        lastname
        avatar
        organization
        email
        phonenumber
        address
        bio
        role
        term
        isadmin
        createdAt
        updatedAt
      }
      organization
      createdAt
      updatedAt
    }
  }
`;
export const listUserGroups = /* GraphQL */ `
  query ListUserGroups(
    $filter: ModelUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupname
        groupadminid
        userid
        userdata {
          id
          name
          firstname
          lastname
          avatar
          organization
          email
          phonenumber
          address
          bio
          role
          term
          isadmin
          createdAt
          updatedAt
        }
        organization
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFolder = /* GraphQL */ `
  query GetFolder($id: ID!) {
    getFolder(id: $id) {
      id
      name
      ownerid
      ownername
      comments
      description
      organization
      files {
        items {
          id
          name
          ownerid
          ownername
          folderID
          comments
          description
          src
          createdAt
          updatedAt
        }
        nextToken
      }
      restrictions {
        items {
          id
          groupname
          role
          folderID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFolders = /* GraphQL */ `
  query ListFolders(
    $filter: ModelFolderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFolders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ownerid
        ownername
        comments
        description
        organization
        files {
          nextToken
        }
        restrictions {
          items {
          id
          groupname
          role
          folderID
          createdAt
          updatedAt
          }
         nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFile = /* GraphQL */ `
  query GetFile($id: ID!) {
    getFile(id: $id) {
      id
      name
      ownerid
      ownername
      folderID
      comments
      description
      src
      restrictions {
        items {
          id
          groupname
          role
          fileID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFiles = /* GraphQL */ `
  query ListFiles(
    $filter: ModelFileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        ownerid
        ownername
        folderID
        comments
        description
        src
        restrictions {
          items {
          id
          groupname
          role
          fileID
          createdAt
          updatedAt
        }
        nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFolderRestriction = /* GraphQL */ `
  query GetFolderRestriction($id: ID!) {
    getFolderRestriction(id: $id) {
      id
      groupname
      role
      folderID
      createdAt
      updatedAt
    }
  }
`;
export const listFolderRestrictions = /* GraphQL */ `
  query ListFolderRestrictions(
    $filter: ModelFolderRestrictionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFolderRestrictions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupname
        role
        folderID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFileRestriction = /* GraphQL */ `
  query GetFileRestriction($id: ID!) {
    getFileRestriction(id: $id) {
      id
      groupname
      role
      fileID
      createdAt
      updatedAt
    }
  }
`;
export const listFileRestrictions = /* GraphQL */ `
  query ListFileRestrictions(
    $filter: ModelFileRestrictionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFileRestrictions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupname
        role
        fileID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usersByOrganization = /* GraphQL */ `
  query UsersByOrganization(
    $organization: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByOrganization(
      organization: $organization
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        firstname
        lastname
        avatar
        organization
        email
        phonenumber
        address
        bio
        role
        term
        isadmin
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usergroupsByOrganization = /* GraphQL */ `
  query UsergroupsByOrganization(
    $organization: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usergroupsByOrganization(
      organization: $organization
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupname
        groupadminid
        userid
        userdata {
          id
          name
          firstname
          lastname
          avatar
          organization
          email
          phonenumber
          address
          bio
          role
          term
          isadmin
          createdAt
          updatedAt
        }
        organization
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const usergroupsByUserID = /* GraphQL */ `
  query UsergroupsByUserID(
    $userid: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usergroupsByUserID(
      userid: $userid
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        groupname
        groupadminid
        userid
        userdata {
          id
          name
          firstname
          lastname
          avatar
          organization
          email
          phonenumber
          address
          bio
          role
          term
          isadmin
          createdAt
          updatedAt
        }
        organization
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchFolders = /* GraphQL */ `
  query SearchFolders(
    $filter: SearchableFolderFilterInput
    $sort: SearchableFolderSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchFolders(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        ownerid
        ownername
        comments
        description
        organization
        files {
          items {
            id
            name
            ownerid
            ownername
            folderID
            comments
            description
            src
            restrictions {
              items {
              id
              groupname
              role
              fileID
              createdAt
              updatedAt
            }
            nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        restrictions {
          items {
          id
          groupname
          role
          folderID
          createdAt
          updatedAt
          }
         nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchFiles = /* GraphQL */ `
  query SearchFiles(
    $filter: SearchableFileFilterInput
    $sort: SearchableFileSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchFiles(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        ownerid
        ownername
        folderID
        comments
        description
        src
        restrictions {
        items {
          id
          groupname
          role
          fileID
          createdAt
          updatedAt
        }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
