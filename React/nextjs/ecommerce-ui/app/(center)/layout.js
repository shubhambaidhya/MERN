export const metadata = {
  title: 'Center',
  description: 'Center',
};

const CenterLayout = ({ children }) => {
  return (
    <div className={`h-full w-full flex justify-center items-center`}>
      {children}
    </div>
  );
};

export default CenterLayout;
