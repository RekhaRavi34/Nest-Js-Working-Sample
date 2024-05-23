export let SQLConnection: any = {};

  //Testing UAT DB connection
  SQLConnection = {
    type: 'mysql',
    host: 'aura-uat.cwfjz6cyloxy.me-south-1.rds.amazonaws.com',
    port: 3306,
    username: 'admin',
    password: 'zFs4upwKvvpRbbXcKSTf8La3MP4ymd',
    synchronize: false,
    multipleStatements: true,
    logging: true,
    entities: ['dist/**/**.entity{.ts,.js}'],
    database: 'salik_liva_master'
  };



