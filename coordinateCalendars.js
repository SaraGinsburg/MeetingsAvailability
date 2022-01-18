function findAvailability(...names) {
  let endWorkHrs = '21:00';
  let startWorkHrs = '13:00';
  let employees = [];
  let meetings = [];

  const importFiles = async () => {
    let fs = require('fs'),
      path = require('path'),
      usersPath = path.join(__dirname, 'users.json');
    eventsPath = path.join(__dirname, 'events.json');

    try {
      const data1 = await fs.readFileSync(usersPath);
      const data2 = await fs.readFileSync(eventsPath);
      employees = JSON.parse(data1);
      meetings = JSON.parse(data2);
    } catch (err) {
      console.log(err);
    }
  };
  importFiles().then((x) => {
    const mergedEvents = mergeEvents(employees, meetings, ...names);
    const datesArray = buildDatesArray(mergedEvents);
    const mergedScheduledEvents = mergeSchedules(
      datesArray,
      startWorkHrs,
      endWorkHrs
    );
    const availability = findAvailSlots(mergedScheduledEvents);
    return AvailableDatesAndTimes(availability);
  });

  function mergeEvents(employees, meetings, ...names) {
    const userIds = [];
    names.forEach((nm) => {
      userIds.push(employees.find((user) => user.name === nm).id);
    });
    return meetings.filter((e) => userIds.includes(e.user_id));
  }

  function buildDatesArray(mergedEvents) {
    const eventsArray = [];
    mergedEvents.map((e) =>
      eventsArray.push([
        parsedTime(e.start_time)[0],
        timeToMin(parsedTime(e.start_time)[1]),
        timeToMin(parsedTime(e.end_time)[1]),
      ])
    );
    const SortFn = (a, b) => {
      return a === b ? 0 : a < b ? -1 : 1;
    };
    const sortedDates = [...eventsArray].sort((a, b) => {
      return a[0].localeCompare(b[0]) || SortFn(a[1], b[1]);
    });

    return sortedDates;
  }

  function mergeSchedules(sortedDates, startWorkHrs, endWorkHrs) {
    let days = [];
    let scheduled = [];
    let available = [];

    let startOfDay = timeToMin(startWorkHrs);
    let endOfDay = timeToMin(endWorkHrs);

    let todaysMeetings;
    let i = 0;
    let j = 0;

    // for (let j = 0; j < sortedDates.length; j++) {
    while (j < sortedDates.length) {
      days[i] = sortedDates[j][0];

      scheduled[i] = [[0, startOfDay]];
      todaysMeetings = scheduled[i];

      while (j < sortedDates.length && sortedDates[j][0] === days[i]) {
        let schedMeeting = todaysMeetings[todaysMeetings.length - 1];
        let [schedStart, schedEnd] = schedMeeting;

        let currMeeting = [sortedDates[j][1], sortedDates[j][2]];
        let [currStart, currEnd] = currMeeting;

        if (schedEnd >= currStart) {
          newSchedMeeting = [schedStart, Math.max(schedEnd, currEnd)];
          todaysMeetings.splice(todaysMeetings.length - 1, 1, newSchedMeeting);
        } else {
          todaysMeetings.push(currMeeting);
        }

        j++;
      }

      let lastMeeting = todaysMeetings[todaysMeetings.length - 1];
      if (lastMeeting[1] < endOfDay) {
        todaysMeetings.push([endOfDay, 1440]);
      }
      scheduled[i] = todaysMeetings;

      i++;
    }

    return { days, scheduled };
  }

  function findAvailSlots(mergedScheduledEvents) {
    let { scheduled, days } = mergedScheduledEvents;
    let availableSlots = [];

    for (i = 0; i < scheduled.length; i++) {
      availableSlots.push([]);
      for (k = 1; k < scheduled[i].length; k++) {
        let today = scheduled[i];
        let start = today[k - 1][1];
        let end = today[k][0];
        availableSlots[i].push([start, end]);
      }
    }

    return { days, availableSlots };
  }

  function AvailableDatesAndTimes(availability) {
    let { days, availableSlots } = availability;
    for (i = 0; i < days.length; i++) {
      for (j = 0; j < availableSlots[i].length; j++) {
        console.log(
          days[i],
          ' ',
          minToTime(availableSlots[i][j][0]),
          '-',
          minToTime(availableSlots[i][j][1])
        );
      }
      emptyLine(' ', 1);
    }
  }

  const parsedTime = (time) => {
    return time.split('T');
  };

  const timeToMin = (time) => {
    [hr, min, sec] = time.split(':');
    return hr * 60 + min * 1;
  };

  const minToTime = (min) => {
    let timeAr = [Math.floor(min / 60), min % 60];

    let val = timeAr.join(':');
    if (val.length === 4) val += '0';
    return val;
  };

  const emptyLine = (blank, num) => {
    let ar = [];
    for (let i = 0; i < num; i++) {
      ar.push(blank);
    }
    console.log(ar.join(', '));
  };
}
//
findAvailability(...process.argv.slice(2));
