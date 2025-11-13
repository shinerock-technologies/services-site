import contentData from "./data.json";

export type ContentData = typeof contentData;

export const useData = () => contentData;

export default contentData;
