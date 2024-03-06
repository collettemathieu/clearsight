export interface Component {
    description: string;
    healthState: ComponentHealthState;
    id: string; // uuid
    message: string;
    name: string;
    }

    export type ComponentHealthState = "alive" | "sick" | "dead" | "unknown";