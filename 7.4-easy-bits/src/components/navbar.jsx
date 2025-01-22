import { useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from "../store/atoms"

export function NavBar() {
    const networkAtomCount = useRecoilValue(networkAtom)
    const jobsAtomCount = useRecoilValue(jobsAtom)
    const messagingAtomCount = useRecoilValue(messagingAtom)
    const notificationsAtomCount = useRecoilValue(notificationsAtom)
    return (
        <>
            <button>Home</button>

            <button>My Network {networkAtomCount >= 100 ? "99+" : networkAtomCount}</button>
            <button>Jobs {jobsAtomCount >= 100 ? "99+" : jobsAtomCount}</button>
            <button>Messaging {messagingAtomCount >= 100 ? "99+" : messagingAtomCount}</button>
            <button>Notifications {notificationsAtomCount >= 100 ? "99+" : notificationsAtomCount}</button>

            <button>Me</button>
        </>
    )
}  