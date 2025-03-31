import { useState, useEffect, useCallback } from 'react';
import userService from '@/services/userServices';
import type { User, UserUpdateData } from '@/models/user';

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const loadCurrentUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const currentUser = await userService.getCurrentUser();
      setUser(currentUser);
    } catch (err) {
      setError('Error loading user information');
      console.error('Error loading user:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProfile = useCallback(async (userData: UserUpdateData) => {
    setLoading(true);
    setError(null);
    
    try {
      if (userData.profileImage && 
          userData.profileImage !== user?.profileImage && 
          user?.id &&
          (userData.profileImage.startsWith('file:') || 
           userData.profileImage.startsWith('content:'))) {
        
        const imageUrl = await userService.uploadProfileImage(userData.profileImage, user.id);
        
        if (imageUrl) {
          userData.profileImage = imageUrl;
        } else {
          userData.profileImage = user.profileImage;
        }
      }
      
      const updatedUser = await userService.updateUserProfile(userData);
      if (updatedUser) {
        setUser(updatedUser);
      }
      return true;
    } catch (err) {
      setError('Error updating profile');
      console.error('Error updating profile:', err);
      return false;
    } finally {
      setLoading(false);
    }
  }, [user]);

  const changePassword = useCallback(async (oldPassword: string, newPassword: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await userService.changePassword(oldPassword, newPassword);
      if (!result) {
        setError('Error changing password');
      }
      return result;
    } catch (err) {
      setError('Error changing password');
      console.error('Error changing password:', err);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await userService.logout();
      if (result) {
        setUser(null);
      }
      return result;
    } catch (err) {
      setError('Error logging out');
      console.error('Error logging out:', err);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCurrentUser();
  }, [loadCurrentUser]);

  return {
    user,
    loading,
    error,
    loadCurrentUser,
    updateProfile,
    changePassword,
    logout
  };
}