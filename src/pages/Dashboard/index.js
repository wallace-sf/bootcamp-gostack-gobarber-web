import React, { useState, useMemo, useEffect } from 'react';
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  parseISO,
  isEqual,
} from 'date-fns';
import locale from 'date-fns/locale/pt-BR';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashboard() {
  const [schedules, setSchedules] = useState([]);
  const [date, setDate] = useState(new Date());

  const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM 'de' yyyy", { locale }),
    [date]
  );

  useEffect(() => {
    async function loadSchedules() {
      const response = await api.get('/schedules', { params: { date } });

      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = new Date(checkDate.toUTCString());

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(a =>
            isEqual(parseISO(a.date), compareDate)
          ),
        };
      });

      setSchedules(data);
    }

    loadSchedules();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }

  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={40} color="#fff" />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={40} color="#fff" />
        </button>
      </header>

      <ul>
        {schedules.map(time => (
          <Time key={time.time} past={time.past} available={!time.appointment}>
            <strong>{time.time}</strong>
            <span>
              {time.appointment ? time.appointment.user.name : 'Em aberto'}
            </span>
          </Time>
        ))}
      </ul>
    </Container>
  );
}
