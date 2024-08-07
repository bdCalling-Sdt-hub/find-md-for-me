export const SetLocalStorage = (key: string, value: any) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
};

export const GetLocalStorage = (key: string) => {
  if (typeof window === "undefined") {
    return null;
  }
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};
