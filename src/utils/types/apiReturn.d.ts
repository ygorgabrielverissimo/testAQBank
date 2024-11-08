export declare type Data = {
  xmlns: string;
  series: string;
  url: string;
  limit: number;
  offset: number;
  total: number;
  MRData: {
    DriverTable: {
      Drivers: [
        {
          driverId: string;
          url: string;
          givenName: string;
          familyName: string;
          dateOfBirth: string;
          nationality: string;
        },
      ];
    };
  };
};
