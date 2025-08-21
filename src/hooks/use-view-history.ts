'use client';
import { useState, useEffect, useCallback } from 'react';

const HISTORY_KEY = 'productViewHistory';
const MAX_HISTORY_LENGTH = 10;

export const useViewHistory = () => {
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(HISTORY_KEY);
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (error) {
      console.error('Failed to load view history from local storage', error);
    }
  }, []);

  const addProduct = useCallback((productId: string) => {
    setHistory(prevHistory => {
      // Add new product to the front, remove duplicates, and trim to max length
      const updatedHistory = [productId, ...prevHistory.filter(id => id !== productId)];
      const newHistory = updatedHistory.slice(0, MAX_HISTORY_LENGTH);
      try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(newHistory));
      } catch (error) {
        console.error('Failed to save view history to local storage', error);
      }
      return newHistory;
    });
  }, []);

  return { history, addProduct };
};
