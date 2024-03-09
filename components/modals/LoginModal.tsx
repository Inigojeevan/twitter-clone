import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

interface UserData {
    email: string;
    password: string;
}

const LoginModal = () => {

    const LoginModal = useLoginModal();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try{
            setIsLoading(true)


            LoginModal.onClose();
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [LoginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} disabled = {isLoading} />
            <Input placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} disabled = {isLoading} />
        </div>
    )

    return (
        <Modal disabled={isLoading} isOpen={LoginModal.isOpen} title="Login" actionLabel="Sign-in" onClose={LoginModal.onClose} onSubmit={onSubmit} body={bodyContent}/>
    )
}

export default LoginModal;