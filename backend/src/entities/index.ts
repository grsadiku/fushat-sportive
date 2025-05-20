import { ActivityLog } from './activitylog.entity';
import { City } from './city.entity';
import { Constant } from './constant.entity';
import { Facilities } from './facilities.entity';
import { Reservations } from './reservations.entity';
import { Role } from './role.entity';
import { Sport } from './sport.entity';
import { State } from './states.entity';
import { User } from './user.entity';

const entities = [
  User,
  Sport,
  City,
  State,
  Facilities,
  ActivityLog,
  Role,
  Constant,
  Reservations,
];

export {
  User,
  Sport,
  City,
  State,
  Facilities,
  ActivityLog,
  Role,
  Constant,
  Reservations,
};
export default entities;
