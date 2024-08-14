import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <SignIn path="/sign-in" />
    </div>
    );
}

// // pages/sign-in.js
// import { SignIn } from "@clerk/nextjs";
// import { useRouter } from "next/router";

// export default function SignInPage() {
//     const router = useRouter();

//     // Handle redirection after successful sign-in
//     const handleSignInSuccess = () => {
//         // Replace with the URL of your Streamlit app
//         router.push("http://localhost:8501"); // Replace with your Streamlit app URL
//     };

//     return (
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//             <SignIn
//                 path="/sign-in"
//                 afterSignIn={handleSignInSuccess} // Add the callback here
//             />
//         </div>
//     );
// }
