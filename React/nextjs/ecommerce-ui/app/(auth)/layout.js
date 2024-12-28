export const metadata = {
  title: 'Auth',
  description: 'Login and register page',
};

const AuthLayout = ({ children }) => {
  return (
    <div className={`h-screen w-full flex  justify-center items-center`}>
      {children}
    </div>
  );
};

export default AuthLayout;
