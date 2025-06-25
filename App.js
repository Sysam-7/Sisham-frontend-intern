import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const cities = [
    { name: 'New York', timeZone: 'America/New_York' },
    { name: 'London', timeZone: 'Europe/London' },
    { name: 'Tokyo', timeZone: 'Asia/Tokyo' },
  ];

  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {};
      cities.forEach(city => {
        const date = new Date().toLocaleTimeString('en-US', {
          timeZone: city.timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        newTimes[city.name] = date;
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  const isWorkingHour = (cityTime) => {
    const hour = parseInt(cityTime.split(':')[0]);
    return hour >= 9 && hour < 17;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>🌍 World Clock</Text>
      {cities.map(city => (
        <View
          key={city.name}
          style={[
            styles.clockContainer,
            isWorkingHour(times[city.name]) ? styles.working : styles.notWorking
          ]}
        >
          <Text style={styles.city}>{city.name}</Text>
          <Text style={styles.time}>{times[city.name] || '--:--:--'}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 100,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 28,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  clockContainer: {
    padding: 20,
    marginBottom: 20,
    width: '80%',
    borderRadius: 12,
    alignItems: 'center',
  },
  city: {
    fontSize: 22,
    marginBottom: 10,
  },
  time: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  working: {
    backgroundColor: '#d4edda', // light green
  },
  notWorking: {
    backgroundColor: '#f8d7da', // light red
  },
});
