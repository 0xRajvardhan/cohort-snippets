import { atom, selector } from "recoil";

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

export const totalNotificationAtom = selector({
  key: "totalNotification",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const messagingAtomCount = get(messagingAtom);
    const notificationsAtomCount = get(notificationsAtom);
    return notificationsAtomCount + networkAtomCount + jobsAtomCount + messagingAtomCount;
  },
})
