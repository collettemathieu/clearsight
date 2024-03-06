export interface Event {
    data: Record<string, unknown>;
    position: number;
    streamId: string;
    timestamp: Date;
    type: EventType;
    }

    export type EventType = "init";
