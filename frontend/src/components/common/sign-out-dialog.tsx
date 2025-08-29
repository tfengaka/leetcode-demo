import { useNavigate, useLocation } from '@tanstack/react-router';
import useAuthStore from '@/store/useAuthStore';
import { ConfirmDialog } from '@/components/common/confirm-dialog';
import { firebaseAuth } from '@/lib/firebase';

interface SignOutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SignOutDialog({ open, onOpenChange }: SignOutDialogProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIdToken, setUser } = useAuthStore();

  const handleSignOut = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        setIdToken(null);
        setUser(null);
        const currentPath = location.href;
        navigate({
          to: '/sign-in',
          search: { redirect: currentPath },
          replace: true,
        });
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <ConfirmDialog
      open={open}
      destructive
      onOpenChange={onOpenChange}
      title="Sign out"
      desc="Are you sure you want to sign out? You will need to sign in again to access your account."
      confirmText="Sign out"
      handleConfirm={handleSignOut}
      className="sm:max-w-sm"
    />
  );
}
