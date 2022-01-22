/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSpaceAdmin = /* GraphQL */ `
  subscription OnCreateSpaceAdmin {
    onCreateSpaceAdmin {
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
export const onUpdateSpaceAdmin = /* GraphQL */ `
  subscription OnUpdateSpaceAdmin {
    onUpdateSpaceAdmin {
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
export const onDeleteSpaceAdmin = /* GraphQL */ `
  subscription OnDeleteSpaceAdmin {
    onDeleteSpaceAdmin {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCandidate = /* GraphQL */ `
  subscription OnCreateCandidate {
    onCreateCandidate {
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
export const onUpdateCandidate = /* GraphQL */ `
  subscription OnUpdateCandidate {
    onUpdateCandidate {
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
export const onDeleteCandidate = /* GraphQL */ `
  subscription OnDeleteCandidate {
    onDeleteCandidate {
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
export const onCreateUserGroup = /* GraphQL */ `
  subscription OnCreateUserGroup {
    onCreateUserGroup {
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
export const onUpdateUserGroup = /* GraphQL */ `
  subscription OnUpdateUserGroup {
    onUpdateUserGroup {
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
export const onDeleteUserGroup = /* GraphQL */ `
  subscription OnDeleteUserGroup {
    onDeleteUserGroup {
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
export const onCreateFolder = /* GraphQL */ `
  subscription OnCreateFolder {
    onCreateFolder {
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
export const onUpdateFolder = /* GraphQL */ `
  subscription OnUpdateFolder {
    onUpdateFolder {
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
export const onDeleteFolder = /* GraphQL */ `
  subscription OnDeleteFolder {
    onDeleteFolder {
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
export const onCreateFile = /* GraphQL */ `
  subscription OnCreateFile {
    onCreateFile {
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
export const onUpdateFile = /* GraphQL */ `
  subscription OnUpdateFile {
    onUpdateFile {
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
export const onDeleteFile = /* GraphQL */ `
  subscription OnDeleteFile {
    onDeleteFile {
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
export const onCreateFolderRestriction = /* GraphQL */ `
  subscription OnCreateFolderRestriction {
    onCreateFolderRestriction {
      id
      groupname
      role
      folderID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFolderRestriction = /* GraphQL */ `
  subscription OnUpdateFolderRestriction {
    onUpdateFolderRestriction {
      id
      groupname
      role
      folderID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFolderRestriction = /* GraphQL */ `
  subscription OnDeleteFolderRestriction {
    onDeleteFolderRestriction {
      id
      groupname
      role
      folderID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFileRestriction = /* GraphQL */ `
  subscription OnCreateFileRestriction {
    onCreateFileRestriction {
      id
      groupname
      role
      fileID
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFileRestriction = /* GraphQL */ `
  subscription OnUpdateFileRestriction {
    onUpdateFileRestriction {
      id
      groupname
      role
      fileID
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFileRestriction = /* GraphQL */ `
  subscription OnDeleteFileRestriction {
    onDeleteFileRestriction {
      id
      groupname
      role
      fileID
      createdAt
      updatedAt
    }
  }
`;
