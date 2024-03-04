export interface EventEntity {
    id: string; // uuid;
    timestamp: Date;
    type: EventEntityType;
    traceId: string;
    metatData: any;
    source: string;
    payload: any;
    }

    export type EventEntityType = "init";
