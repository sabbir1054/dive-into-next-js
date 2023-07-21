
import DashboardLayout from "@/Layouts/DashboardLayout";
import RootLayout from "@/Layouts/RootLayout";


const Dashboard = () => {
  return (
    <div>
      <h1>This is dashboard layout</h1>
    </div>
  );
};

export default Dashboard;

// Dashboard.getLayout = function getLayout(page) {
//     return (<DashboardLayout>{page }</DashboardLayout>)
// }

// if we need side nav also top nav

Dashboard.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
