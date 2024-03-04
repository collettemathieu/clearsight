export interface ComponentEntity {
    description: string;
    healthState: ComponentEntityHealthState;
    id: string; // uuid
    message: string;
    name: string;
    }

    export type ComponentEntityHealthState = "alive" | "sick" | "dead" | "unknown";