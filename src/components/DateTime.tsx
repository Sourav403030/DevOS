import { useEffect, useState } from "react";

interface DateTimeInterface {
    date: string,
    time: string,
}

const DateTime = () => {
  const [newDate, setNewDate] = useState<DateTimeInterface>({
    date: "",
    time: "",
  });
  
  useEffect(() => {
    const updateDateTime = () => {
      const date: Date = new Date();
      const timeIn12Hr = date.toLocaleTimeString("en-US", {
        hour12: true,
        hour: "numeric",
        minute: "2-digit",
      });
      const todayDate: string = date.toDateString();

      setNewDate({
        date: todayDate,
        time: timeIn12Hr,
      });
    };

    // Set initial time immediately
    updateDateTime();
    
    // Set up interval to update every 30 seconds
    const interval: number = setInterval(updateDateTime, 1000);
    
    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <nav>
      <p className="text-sm">
        {newDate.date} {newDate.time}
      </p>
    </nav>
  );
};

export default DateTime;
