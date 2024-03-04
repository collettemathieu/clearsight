export interface LogEntity {
    clientIp: string;
    error: LogEntityError;
    id: string; // uuid
    level: LogEntityLevel;
    message: string;
    processId: string; // uuid
    request: LogEntityRequest;
    response: LogEntityResponse;
    timestamp: Date;
    }

    export type LogEntityLevel = 'error' | 'warn' | 'info' | 'debug';

    export interface LogEntityError {
    code: number;
    message: string;
    stackTrace: string;
    }

    export interface LogEntityRequest {
    body: any;
    headers: any;
    method: string;
    url: string;
    }

    export interface LogEntityResponse {
    body: any;
    headers: any;
    statusCode: number;
    }

