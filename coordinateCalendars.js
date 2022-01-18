// let fs = require('fs'),
//   path = require('path'),
//   usersPath = path.join(__dirname, 'users.json');
// eventsPath = path.join(__dirname, 'events.json');

// fs.readFile(usersPath, { encoding: 'utf-8' }, function (err, users) {
//   if (!err) {
//     fs.readFile(eventsPath, { encoding: 'utf-8' }, function (err, events) {
//       if (!err) {
//         calculateAvailTimes(users, events, 'Emily', 'Jane');
//       }
//     });
//   } else {
//     console.log(err);
//   }
// });
// const calculateAvailTimes = (users, events, ...names) => {
//
//   console.log(names);
// };
//
//
//

let users = [
  {
    id: 1,
    name: 'Jane',
  },
  {
    id: 2,
    name: 'John',
  },
  {
    id: 3,
    name: 'Maggie',
  },
  {
    id: 4,
    name: 'Nick',
  },
  {
    id: 5,
    name: 'Emily',
  },
  {
    id: 6,
    name: 'Joe',
  },
  {
    id: 7,
    name: 'Jordan',
  },
];

let events = [
  {
    id: 1,
    user_id: 1,
    start_time: '2021-07-05T13:00:00',
    end_time: '2021-07-05T13:30:00',
  },
  {
    id: 2,
    user_id: 2,
    start_time: '2021-07-05T13:30:00',
    end_time: '2021-07-05T15:00:00',
  },
  {
    id: 3,
    user_id: 3,
    start_time: '2021-07-05T16:00:00',
    end_time: '2021-07-05T17:00:00',
  },
  {
    id: 4,
    user_id: 3,
    start_time: '2021-07-05T19:30:00',
    end_time: '2021-07-05T20:00:00',
  },
  {
    id: 5,
    user_id: 4,
    start_time: '2021-07-05T20:00:00',
    end_time: '2021-07-05T21:00:00',
  },
  {
    id: 6,
    user_id: 5,
    start_time: '2021-07-05T15:00:00',
    end_time: '2021-07-05T15:30:00',
  },
  {
    id: 7,
    user_id: 6,
    start_time: '2021-07-05T13:00:00',
    end_time: '2021-07-05T13:30:00',
  },
  {
    id: 8,
    user_id: 7,
    start_time: '2021-07-05T19:00:00',
    end_time: '2021-07-05T19:30:00',
  },
  {
    id: 9,
    user_id: 1,
    start_time: '2021-07-06T14:30:00',
    end_time: '2021-07-06T15:00:00',
  },
  {
    id: 10,
    user_id: 1,
    start_time: '2021-07-06T16:00:00',
    end_time: '2021-07-06T17:00:00',
  },
  {
    id: 11,
    user_id: 1,
    start_time: '2021-07-06T19:00:00',
    end_time: '2021-07-06T20:00:00',
  },
  {
    id: 12,
    user_id: 2,
    start_time: '2021-07-06T14:00:00',
    end_time: '2021-07-06T14:30:00',
  },
  {
    id: 13,
    user_id: 3,
    start_time: '2021-07-06T15:00:00',
    end_time: '2021-07-06T16:00:00',
  },
  {
    id: 14,
    user_id: 4,
    start_time: '2021-07-06T14:00:00',
    end_time: '2021-07-06T14:30:00',
  },
  {
    id: 15,
    user_id: 4,
    start_time: '2021-07-06T16:00:00',
    end_time: '2021-07-06T17:30:00',
  },
  {
    id: 16,
    user_id: 4,
    start_time: '2021-07-06T20:00:00',
    end_time: '2021-07-06T20:30:00',
  },
  {
    id: 17,
    user_id: 5,
    start_time: '2021-07-06T13:00:00',
    end_time: '2021-07-06T13:30:00',
  },
  {
    id: 18,
    user_id: 5,
    start_time: '2021-07-06T17:00:00',
    end_time: '2021-07-06T19:00:00',
  },
  {
    id: 19,
    user_id: 6,
    start_time: '2021-07-06T13:00:00',
    end_time: '2021-07-06T14:30:00',
  },
  {
    id: 20,
    user_id: 6,
    start_time: '2021-07-06T20:30:00',
    end_time: '2021-07-06T21:00:00',
  },
  {
    id: 21,
    user_id: 7,
    start_time: '2021-07-06T15:00:00',
    end_time: '2021-07-06T16:00:00',
  },
  {
    id: 22,
    user_id: 7,
    start_time: '2021-07-06T18:00:00',
    end_time: '2021-07-06T19:00:00',
  },
  {
    id: 23,
    user_id: 7,
    start_time: '2021-07-06T19:30:00',
    end_time: '2021-07-06T20:00:00',
  },
  {
    id: 24,
    user_id: 1,
    start_time: '2021-07-07T15:00:00',
    end_time: '2021-07-07T15:45:00',
  },
  {
    id: 25,
    user_id: 1,
    start_time: '2021-07-07T17:00:00',
    end_time: '2021-07-07T17:15:00',
  },
  {
    id: 26,
    user_id: 1,
    start_time: '2021-07-07T19:00:00',
    end_time: '2021-07-07T19:45:00',
  },
  {
    id: 27,
    user_id: 2,
    start_time: '2021-07-07T14:00:00',
    end_time: '2021-07-07T14:30:00',
  },
  {
    id: 28,
    user_id: 3,
    start_time: '2021-07-07T13:00:00',
    end_time: '2021-07-07T14:00:00',
  },
  {
    id: 29,
    user_id: 3,
    start_time: '2021-07-07T15:00:00',
    end_time: '2021-07-07T16:00:00',
  },
  {
    id: 30,
    user_id: 3,
    start_time: '2021-07-07T17:00:00',
    end_time: '2021-07-07T21:00:00',
  },
  {
    id: 31,
    user_id: 4,
    start_time: '2021-07-07T13:00:00',
    end_time: '2021-07-07T13:30:00',
  },
  {
    id: 32,
    user_id: 4,
    start_time: '2021-07-07T16:00:00',
    end_time: '2021-07-07T16:30:00',
  },
  {
    id: 33,
    user_id: 4,
    start_time: '2021-07-07T18:00:00',
    end_time: '2021-07-07T18:30:00',
  },
  {
    id: 34,
    user_id: 4,
    start_time: '2021-07-07T20:00:00',
    end_time: '2021-07-07T20:30:00',
  },
  {
    id: 35,
    user_id: 5,
    start_time: '2021-07-07T14:00:00',
    end_time: '2021-07-07T15:00:00',
  },
  {
    id: 36,
    user_id: 5,
    start_time: '2021-07-07T17:00:00',
    end_time: '2021-07-07T18:00:00',
  },
  {
    id: 37,
    user_id: 5,
    start_time: '2021-07-07T20:00:00',
    end_time: '2021-07-07T21:00:00',
  },
  {
    id: 38,
    user_id: 6,
    start_time: '2021-07-07T13:00:00',
    end_time: '2021-07-07T14:00:00',
  },
  {
    id: 39,
    user_id: 6,
    start_time: '2021-07-07T15:15:00',
    end_time: '2021-07-07T15:45:00',
  },
  {
    id: 40,
    user_id: 6,
    start_time: '2021-07-07T19:00:00',
    end_time: '2021-07-07T19:30:00',
  },
  {
    id: 41,
    user_id: 6,
    start_time: '2021-07-07T20:45:00',
    end_time: '2021-07-07T21:00:00',
  },
  {
    id: 42,
    user_id: 7,
    start_time: '2021-07-07T16:15:00',
    end_time: '2021-07-07T17:15:00',
  },
  {
    id: 43,
    user_id: 7,
    start_time: '2021-07-07T18:00:00',
    end_time: '2021-07-07T18:30:00',
  },
];

let startWorkHrs = '13:00';

let endWorkHrs = '21:00';

function findAvailability(users, events, ...names) {
  const mergedEvents = mergeEvents(users, events, ...names);
  const datesArray = buildDatesArray(mergedEvents);
  const mergedScheduledEvents = mergeSchedules(
    datesArray,
    startWorkHrs,
    endWorkHrs
  );
  const availability = findAvailSlots(mergedScheduledEvents);

  return AvailableDatesAndTimes(availability);
}

function mergeEvents(users, events, ...names) {
  const userIds = [];
  names.forEach((nm) => {
    userIds.push(users.find((user) => user.name === nm).id);
  });
  return events.filter((e) => userIds.includes(e.user_id));
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

findAvailability(users, events, 'Emily', 'John', 'Nick');
