import path from "path";


export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "postgres");

  const connections = {
    postgres: {
      connection: {
        host: env("DATABASE_HOST", "db.qqtusiblccnjquqsslbh.supabase.co"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_DATABASE", "postgres"),
        user: env("DATABASE_USER", "postgres"),
        password: env("DATABASE_PASSWORD", "mrtuRO7rntu3A2zt"),
        ssl: env.bool("DATABASE_SSL", false)
          ? { rejectUnauthorized: false }  // Enables SSL based on env var
          : false,
      },
      pool: {
        min: 2,
        max: 10,
      },
      acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
    },
  };
};

