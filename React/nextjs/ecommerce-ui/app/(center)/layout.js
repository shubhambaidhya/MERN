export const metadata = {
  title: 'Center',
  description: 'Center',
};

const CenterLayout = ({ children }) => {
  return (
    <div className={`h-screen w-full flex justify-center items-center`}>
      {children}
    </div>
  );
};

export default CenterLayout;
