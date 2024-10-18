"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./loginPage.module.css";

const LoginPage = () => {
    const { status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/");
        }
    }, [status, router]);

    if (status === "loading") {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div href="/" className={styles.socialButton} onClick={() => signIn("google")} >Sign in with Google</div>
                <div href="/" className={styles.socialButton} onClick={() => signIn("github")}>Sign in with Github</div>
                <div href="/" className={styles.socialButton}>Sign in with Facebook</div>
            </div>
        </div>
    );
}

export default LoginPage;
