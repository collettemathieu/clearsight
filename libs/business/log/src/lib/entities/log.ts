export interface Log {
    clientIp: string;
    error: LogError;
    id: string; // uuid
    level: LogLevel;
    message: string;
    processId: string; // uuid
    request: LogRequest;
    response: LogResponse;
    timestamp: Date;
    }

    export type LogLevel = 'error' | 'warn' | 'info' | 'debug';

    export interface LogError {
    code: number;
    message: string;
    stackTrace: string;
    }

    export interface LogRequest {
    body: any;
    headers: any;
    method: string;
    url: string;
    }

    export interface LogResponse {
    body: any;
    headers: any;
    statusCode: number;
    }

