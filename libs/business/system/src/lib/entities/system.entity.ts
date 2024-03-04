import { ComponentEntityHealthState } from "@clearsight/business-component";

export interface SystemEntity {
    name: string;
    healthState: SystemEntityHealthState;
    components: Record<string, SystemEntityComponent>;
}

export interface SystemEntityComponent {
    id: string; // uuid
    name: string;
    healthState: ComponentEntityHealthState;
}

export type SystemEntityHealthState = "alive" | "sick" | "dead" | "unknown";