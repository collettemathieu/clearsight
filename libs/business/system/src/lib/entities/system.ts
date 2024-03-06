import { ComponentHealthState } from "@clearsight/business-component";

export interface System {
    name: string;
    healthState: SystemHealthState;
    components: Record<string, SystemComponent>;
}

export interface SystemComponent {
    id: string; // uuid
    name: string;
    healthState: ComponentHealthState;
}

export type SystemHealthState = "alive" | "sick" | "dead" | "unknown";