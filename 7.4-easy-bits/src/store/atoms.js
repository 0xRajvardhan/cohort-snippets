import { atom } from "recoil";

export const networkAtom = atom({
  key: "network", 
  default: 102,  
});

export const jobsAtom = atom({
  key: "jobs",
  default: 0,
});

export const messagingAtom = atom({
  key: "messaging",
  default: 0,
});

export const notificationsAtom = atom({
  key: "notifications",
  default: 12,
});
