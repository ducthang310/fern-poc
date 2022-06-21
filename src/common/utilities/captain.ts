import { pickBy } from 'lodash';
export interface IUser {
  firstName?: string;
  lastName?: string;
}

export class Captain {
  static isPhoneNumber(string): boolean {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(string).toLowerCase());
  }

  static objectRemoveNotAllowedProperties(
    data: any,
    allowedProps: string[],
  ): any {
    if (
      !data ||
      !allowedProps ||
      !allowedProps.length ||
      typeof data !== 'object'
    ) {
      return data;
    }
    const newData = {};
    allowedProps.forEach((prop) => {
      newData[prop] = data[prop];
    });
    return newData;
  }

  static getFullName(user: IUser): string {
    if (!user) {
      return null;
    }
    const tempArr = [];
    if (user.firstName) {
      tempArr.push(user.firstName);
    }
    if (user.lastName) {
      tempArr.push(user.lastName);
    }
    return tempArr.join(' ');
  }

  static removeUndefinedValuesFromObject(obj: any): any {
    return pickBy(obj, (value, key) => {
      return value !== undefined;
    });
  }
}
