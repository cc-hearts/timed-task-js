export interface Config {
  redis: {
    port: number;
    host: string;
    db: number;
    password: string;
  };

  mysql: {
    host: string;
    password: string;
    user: string;
    port: number;
    database: string;
  };

  puppeteerConfig: {
    port: number
    xnLogin: {
      url: string
      userName: string
      password: string
    }
  }
}

export type callback = (...args: any[]) => any;



export interface InterEntity {
  id: number

  title: string

  description: string

  url: string

  inter_time: string

  method: number

  params: string

  cookie: string

  createTime: Date

  updateTime: Date

  isDelete: number
}
