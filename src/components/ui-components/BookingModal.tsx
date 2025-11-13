"use client";
import React, { useState } from "react";
import ContactForm from "./ContactForm";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  if (!isOpen) return null;

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const previousMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1)
    );
  };

  const renderCalendarDays = () => {
    const days = [];

    // Empty cells for days before month starts
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day
      );
      const isSelected = selectedDate?.toDateString() === date.toDateString();

      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(date)}
          className={`p-2 text-center hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors ${
            isSelected
              ? "bg-orange-500 text-white"
              : "text-customBlack dark:text-gray-300"
          }`}>
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-6xl bg-white dark:bg-zinc-900 border border-zinc-500 max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl z-10 bg-white dark:bg-zinc-900 w-8 h-8 flex items-center justify-center">
          ×
        </button>

        <div className="flex flex-col md:grid md:grid-cols-2">
          {/* Left side - Booking Calendar */}
          <div className="bg-gray-100 dark:bg-zinc-800 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-customBlack dark:text-white">
              Book a consultation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              30 minute meeting
            </p>

            <div className="mb-6">
              <h3 className="text-xl mb-4 text-customBlack dark:text-white">
                Select a Day
              </h3>

              {/* Month navigation */}
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={previousMonth}
                  className="text-gray-600 dark:text-gray-400 hover:text-customBlack dark:hover:text-white">
                  ←
                </button>
                <span className="text-lg text-customBlack dark:text-white">
                  {monthNames[currentMonth.getMonth()]}{" "}
                  {currentMonth.getFullYear()}
                </span>
                <button
                  onClick={nextMonth}
                  className="text-gray-600 dark:text-gray-400 hover:text-customBlack dark:hover:text-white">
                  →
                </button>
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1 text-sm">
                {dayNames.map((day) => (
                  <div
                    key={day}
                    className="text-center text-gray-500 dark:text-gray-400 font-semibold p-2">
                    {day}
                  </div>
                ))}
                {renderCalendarDays()}
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  No times in {monthNames[currentMonth.getMonth()]}
                </p>
                <button className="text-orange-500 hover:text-orange-600">
                  View next month →
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white dark:bg-zinc-900 p-8 md:p-12 relative">
            {/* Or badge - hidden on mobile */}
            <div className="hidden md:flex absolute -left-6 top-12 bg-orange-500 text-white w-12 h-12 rounded-full items-center justify-center font-semibold">
              Or
            </div>
            {/* Or divider for mobile */}
            <div className="md:hidden flex items-center gap-4 mb-6">
              <div className="flex-1 border-t border-zinc-500"></div>
              <span className="text-orange-500 font-semibold">Or</span>
              <div className="flex-1 border-t border-zinc-500"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold mb-2 text-customBlack dark:text-white">
              Contact us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Fill out the form to send us a message
            </p>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
