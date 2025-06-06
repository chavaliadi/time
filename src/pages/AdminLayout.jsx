// src/pages/AdminLayout.jsx
import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom'; // Import Outlet for nested routes
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'; // MAKE SURE sheet.jsx EXISTS and is CLEANED
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'; // MAKE SURE dropdown-menu.jsx EXISTS and is CLEANED
import { Menu, Package2, Home, BarChart3, BookOpen, Settings, User, LogOut } from 'lucide-react';

// AdminLayout will now accept 'user' and 'onLogout' props
const AdminLayout = ({ user, onLogout }) => {
  const location = useLocation();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar (Desktop) */}
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/admin/dashboard" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">NDMS</span>
            </Link>
          </div>
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            <Link
              to="/admin/dashboard" // Updated path for Admin Dashboard
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${location.pathname === '/admin/dashboard' || location.pathname === '/admin' ? 'bg-muted text-primary' : ''}`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              to="/admin/batches" // Updated path for Batches
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${location.pathname.startsWith('/admin/batches') ? 'bg-muted text-primary' : ''}`}
            >
              <BarChart3 className="h-4 w-4" />
              Batches
            </Link>
            <Link
              to="/admin/subjects" // Updated path for Subjects
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${location.pathname.startsWith('/admin/subjects') ? 'bg-muted text-primary' : ''}`}
            >
              <BookOpen className="h-4 w-4" />
              Subjects
            </Link>
            <Link
              to="/admin/settings" // Assuming you'll add this later
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${location.pathname === '/admin/settings' ? 'bg-muted text-primary' : ''}`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
          {/* Logout Button in Desktop Sidebar */}
          <div className="mt-auto p-4">
            <Button
              onClick={onLogout} // Use the onLogout prop
              className="w-full justify-start text-muted-foreground hover:text-primary"
              variant="ghost"
            >
              <LogOut className="h-4 w-4 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col">
        {/* Header (Mobile & Desktop) */}
        <header className="flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px] lg:px-6">
          {/* Mobile Sheet Trigger (Hamburger Menu) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <SheetHeader>
                <SheetTitle>NDMS Navigation</SheetTitle>
                <SheetDescription>
                  Access different sections of the dashboard.
                </SheetDescription>
              </SheetHeader>
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="/admin/dashboard"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${location.pathname === '/admin/dashboard' || location.pathname === '/admin' ? 'bg-muted text-foreground' : ''}`}
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  to="/admin/batches"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${location.pathname.startsWith('/admin/batches') ? 'bg-muted text-foreground' : ''}`}
                >
                  <BarChart3 className="h-5 w-5" />
                  Batches
                </Link>
                <Link
                  to="/admin/subjects"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${location.pathname.startsWith('/admin/subjects') ? 'bg-muted text-foreground' : ''}`}
                >
                  <BookOpen className="h-5 w-5" />
                  Subjects
                </Link>
                <Link
                  to="/admin/settings"
                  className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground ${location.pathname === '/admin/settings' ? 'bg-muted text-foreground' : ''}`}
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </Link>
                {/* Logout Button in Mobile Sidebar */}
                <Button
                  onClick={onLogout} // Use the onLogout prop
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  variant="ghost"
                >
                  <LogOut className="h-5 w-5" />
                  Logout
                </Button>
              </nav>
            </SheetContent>
          </Sheet>

          {/* NDMS Title for mobile, user info for desktop */}
          <div className="w-full flex-1">
            <span className="text-xl font-semibold md:text-base md:hidden">NDMS</span>
            <span className="hidden md:block text-sm text-muted-foreground ml-4">
              Welcome, {user?.email || 'Admin'}!
            </span>
          </div>

          {/* User Avatar Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              {user?.email && <DropdownMenuDescription className="px-2 pb-2 text-xs">{user.email}</DropdownMenuDescription>}
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              {/* Logout Item in Profile Dropdown */}
              <DropdownMenuItem onClick={onLogout}> {/* Use the onLogout prop */}
                <LogOut className="h-4 w-4 mr-2" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {/* This is where the nested routes will render */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;