import { day01date, day01day, day01events } from "./day01";
import { day02date, day02day, day02events } from "./day02";
import { day03date, day03day, day03events } from "./day03";
import { day04date, day04day, day04events } from "./day04";
import { day05date, day05day, day05events } from "./day05";

export const tabs = [
  { day: day01day, date: day01date, schedule: day01events },
  { day: day02day, date: day02date, schedule: day02events },
  { day: day03day, date: day03date, schedule: day03events },
  { day: day04day, date: day04date, schedule: day04events },
  { day: day05day, date: day05date, schedule: day05events },
  { day: "TUE", date: "2024-07-09", schedule: day01events },
  { day: "WED", date: "2024-07-10", schedule: day01events },
  { day: "THU", date: "2024-07-11", schedule: day01events },
  { day: "FRI", date: "2024-07-12", schedule: day01events },
  { day: "SAT", date: "2024-07-13", schedule: day01events },
];
