export const metadata = {
  title: 'Center',
  description: 'Center',
};

const CenterLayout = ({ children }) => {
  return (
    <div
      className={`min-h-screen w-full flex flex-col gap-12  justify-center items-center`}
    >
      {children}
    </div>
  );
};

export default CenterLayout;
