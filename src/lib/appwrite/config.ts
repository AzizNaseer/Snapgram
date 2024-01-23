import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: "https://cloud.appwrite.io/v1",
  projectId: "65af7d14bee95d50023c",
  databaseId: "65af86edb16d8f61740a",
  storageId: "65af8667bac8eba0a359",
  userCollectionId: "65af876e25f9fca8e378",
  postCollectionId: "65af873c9d8b9b1d91cf",
  savesCollectionId: "65af889503d093bd71e9",
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
