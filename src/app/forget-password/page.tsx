import AuthForm from "@/components/AuthForm";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <AuthForm
      title="Reset Your Password"
      description="Enter email to recieve recovery link"
      height="100vh"
    >
      <ForgotPasswordForm />
    </AuthForm>
  );
};

export default ForgotPassword;
