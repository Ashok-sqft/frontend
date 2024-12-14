'use client';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useStore } from '@/Store/store';


const LocationFetcher: React.FC = () => {
  const { setLocation, setError } = useStore(); // Get the functions from store

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Fetch the location name using OpenCage API
          fetchLocationName(latitude, longitude);
        },
        (error) => {
          setError(error.message); // Update error in zustand store
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, [setLocation, setError]);

  const fetchLocationName = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json`,
        {
          params: {
            lat: latitude,
            lon: longitude,
            key: 'ea10ecc661e6465bb328bccc603f4534', // Use your OpenCage API key here
          },
        }
      );
      const placeName = response.data.results[0]?.formatted || 'Unknown location';
      setLocation(latitude, longitude, placeName); // Store the location name in Zustand
    } catch (error) {
      console.error('Error fetching location name:', error);
      setError('Failed to fetch location name.');
    }
  };

  return null; // This component runs in the background to update the Zustand store
};

export default LocationFetcher;
