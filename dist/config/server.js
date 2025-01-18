"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
        keys: env.array('APP_KEYS'),
    },
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', 'Lw3inSkveGsQZ1PhbJFuyQ=='),
        },
        url: '/admin', // This should be the correct admin panel URL
        serveAdminPanel: true,
    },
});
