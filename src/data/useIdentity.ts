import identityData from "./identity.json";

export type Identity = typeof identityData;

export const useIdentity = () => identityData;

export default identityData;
