const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-2 bg-primary h-screen"></div>
        <div className="col-span-10 bg-slate-300">{children}</div>
      </div>
    </div>
  );
};

export default ClientLayout;
