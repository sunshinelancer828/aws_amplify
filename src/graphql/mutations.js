/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSpaceAdmin = /* GraphQL */ `
  mutation CreateSpaceAdmin(
    $input: CreateSpaceAdminInput!
    $condition: ModelSpaceAdminConditionInput
  ) {
    createSpaceAdmin(input: $input, condition: $condition) {
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
export const updateSpaceAdmin = /* GraphQL */ `
  mutation UpdateSpaceAdmin(
    $input: UpdateSpaceAdminInput!
    $condition: ModelSpaceAdminConditionInput
  ) {
    updateSpaceAdmin(input: $input, condition: $condition) {
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
export const deleteSpaceAdmin = /* GraphQL */ `
  mutation DeleteSpaceAdmin(
    $input: DeleteSpaceAdminInput!
    $condition: ModelSpaceAdminConditionInput
  ) {
    deleteSpaceAdmin(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCandidate = /* GraphQL */ `
  mutation CreateCandidate(
    $input: CreateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    createCandidate(input: $input, condition: $condition) {
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
export const updateCandidate = /* GraphQL */ `
  mutation UpdateCandidate(
    $input: UpdateCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    updateCandidate(input: $input, condition: $condition) {
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
export const deleteCandidate = /* GraphQL */ `
  mutation DeleteCandidate(
    $input: DeleteCandidateInput!
    $condition: ModelCandidateConditionInput
  ) {
    deleteCandidate(input: $input, condition: $condition) {
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
export const createUserGroup = /* GraphQL */ `
  mutation CreateUserGroup(
    $input: CreateUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    createUserGroup(input: $input, condition: $condition) {
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
export const updateUserGroup = /* GraphQL */ `
  mutation UpdateUserGroup(
    $input: UpdateUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    updateUserGroup(input: $input, condition: $condition) {
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
export const deleteUserGroup = /* GraphQL */ `
  mutation DeleteUserGroup(
    $input: DeleteUserGroupInput!
    $condition: ModelUserGroupConditionInput
  ) {
    deleteUserGroup(input: $input, condition: $condition) {
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
export const createFolder = /* GraphQL */ `
  mutation CreateFolder(
    $input: CreateFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    createFolder(input: $input, condition: $condition) {
      id
      name
      ownerid
      ownername
      comments
      description
      organization
      createdAt
      updatedAt
    }
  }
`;
export const updateFolder = /* GraphQL */ `
  mutation UpdateFolder(
    $input: UpdateFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    updateFolder(input: $input, condition: $condition) {
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
export const deleteFolder = /* GraphQL */ `
  mutation DeleteFolder(
    $input: DeleteFolderInput!
    $condition: ModelFolderConditionInput
  ) {
    deleteFolder(input: $input, condition: $condition) {
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
export const createFile = /* GraphQL */ `
  mutation CreateFile(
    $input: CreateFileInput!
    $condition: ModelFileConditionInput
  ) {
    createFile(input: $input, condition: $condition) {
      id
      name
      ownerid
      ownername
      comments
      description
      src
      createdAt
      updatedAt
    }
  }
`;
export const updateFile = /* GraphQL */ `
  mutation UpdateFile(
    $input: UpdateFileInput!
    $condition: ModelFileConditionInput
  ) {
    updateFile(input: $input, condition: $condition) {
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
export const deleteFile = /* GraphQL */ `
  mutation DeleteFile(
    $input: DeleteFileInput!
    $condition: ModelFileConditionInput
  ) {
    deleteFile(input: $input, condition: $condition) {
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
export const createFolderRestriction = /* GraphQL */ `
  mutation CreateFolderRestriction(
    $input: CreateFolderRestrictionInput!
    $condition: ModelFolderRestrictionConditionInput
  ) {
    createFolderRestriction(input: $input, condition: $condition) {
      id
      groupname
      role
      createdAt
      updatedAt
    }
  }
`;
export const updateFolderRestriction = /* GraphQL */ `
  mutation UpdateFolderRestriction(
    $input: UpdateFolderRestrictionInput!
    $condition: ModelFolderRestrictionConditionInput
  ) {
    updateFolderRestriction(input: $input, condition: $condition) {
      id
      groupname
      role
      folderID
      createdAt
      updatedAt
    }
  }
`;
export const deleteFolderRestriction = /* GraphQL */ `
  mutation DeleteFolderRestriction(
    $input: DeleteFolderRestrictionInput!
    $condition: ModelFolderRestrictionConditionInput
  ) {
    deleteFolderRestriction(input: $input, condition: $condition) {
      id
      groupname
      role
      folderID
      createdAt
      updatedAt
    }
  }
`;
export const createFileRestriction = /* GraphQL */ `
  mutation CreateFileRestriction(
    $input: CreateFileRestrictionInput!
    $condition: ModelFileRestrictionConditionInput
  ) {
    createFileRestriction(input: $input, condition: $condition) {
      id
      groupname
      role
      createdAt
      updatedAt
    }
  }
`;
export const updateFileRestriction = /* GraphQL */ `
  mutation UpdateFileRestriction(
    $input: UpdateFileRestrictionInput!
    $condition: ModelFileRestrictionConditionInput
  ) {
    updateFileRestriction(input: $input, condition: $condition) {
      id
      groupname
      role
      fileID
      createdAt
      updatedAt
    }
  }
`;
export const deleteFileRestriction = /* GraphQL */ `
  mutation DeleteFileRestriction(
    $input: DeleteFileRestrictionInput!
    $condition: ModelFileRestrictionConditionInput
  ) {
    deleteFileRestriction(input: $input, condition: $condition) {
      id
      groupname
      role
      fileID
      createdAt
      updatedAt
    }
  }
`;
