import { useState } from 'react'
import './index.css';
import { Sidebar, SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { AppSidebar } from './components/Appsidebar';

const App = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger/>
        </main>
      </SidebarProvider>
    </div>
  );
}

export default App
