
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <div className="w-full max-w-8xl px-4">{children}</div>
      </main>
    )
  }
  
  export default DashboardLayout