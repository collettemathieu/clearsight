# Clearsight

- [Clearsight](#clearsight)
  - [Business domain](#business-domain)
    - [System](#system)
    - [Component](#component)
    - [Log](#log)
    - [Event](#event)
  - [List of components](#list-of-components)
    - [The system component](#the-system-component)
    - [The system viewer component](#the-system-viewer-component)
    - [The logManager component](#the-logmanager-component)
    - [The eventManager component](#the-eventmanager-component)
    - [The healthInspector component](#the-healthinspector-component)
  - [Context map](#context-map)
    - [Component initialization](#component-initialization)
    - [Healthcheck of the components](#healthcheck-of-the-components)
    - [View of a the system component](#view-of-a-the-system-component)
  - [Clean architecture](#clean-architecture)
    - [Micro-frontend](#micro-frontend)
      - [Dependency tree](#dependency-tree)
      - [Control flow](#control-flow)
    - [Micro-service](#micro-service)

✨ UNDER CONSTRUCTION ✨

## Business domain

### System

```mermaid
classDiagram
    class System
    System : +String name
    System : +SystemHealthStatus healthStatus
    System : +SystemComponents components
    System : +getName()
```

### Component


```mermaid
classDiagram
    class Component
    Component : +String description
    Component : +ComponentHealthStatus healthStatus
    Component : +String id
    Component : +String message
    Component : +String name
```

### Log

```mermaid
classDiagram
    class Log
    Log : +string clientIp
    Log : +LogError error
    Log : +LogLevel level
    Log : +string message
    Log : +string processId
    Log : +LogRequest
    Log : +LogResponse
    Log : +Date timestamp
```

### Event

```mermaid
classDiagram
    class Event
    Event : +EventData data
    Event : +number position
    Event : +string streamId
    Event : +Date timestamp
    Event : +EventType type
```

## List of components

### The system component

Provide the name of the system.

### The system viewer component

Display a summary of the state of the system: its name and the list of the components with their health status.

### The logManager component

Handle the logs: catch, record and read the logs.

### The eventManager component

Handle the events: catch, record and read the events.

### The healthInspector component

Collect all components present in the system and check their health status.

Provide all components with their health status.

## Context map

### Component initialization

```mermaid
graph LR
    A[Component N] -- execute --> B(Init method) -- send --> D((Init event)) -- catch --> E[HealthInspector component] -- execute -->  F(Record method)
    D -- catch --> G[EventManager component] -- execute --> H(Record method)
    B -- execute --> X(Send Log method) -- request --> Y[LogComponent] -- execute --> Z(Record method)
```

### Healthcheck of the components

```mermaid
graph TD
    E[EventManager component] -- execute --> F(Record event method)
    A[HealthInspector component] -- execute --> B(Check method) -- send --> D((Check event request)) -- catch --> E 
    B -- request --> G[Component N] -- response --> H[HealthInspector component] -- execute --> I(Record method) -- send --> J((Check event response)) -- catch --> E
```

### View of a the system component

```mermaid
graph TD
    E[EventManager component] -- execute --> F(Record event method)
    A[SystemViewer component] -- execute --> B(View method) -- send --> D((System view event)) -- catch --> E 
    H[SystemViewer component] -- execute --> I(Aggregate method) -- display --> J(client)
    B -- request --> G[System Component] -- response --> H
    B -- request --> K[HealthInspector Component] -- response --> H
```

## Clean architecture

### Micro-frontend

#### Dependency tree

```mermaid
graph BT
    subgraph Business domain
        usecase
        interface
    end
    subgraph Request
    end
    subgraph Common
            httpFeature(Http feature)
            contract
        end
    subgraph Micro-frontend
        subgraph Routing
            rtRootCpt{Root route component}
            rtCpt1{Route 1 component}
        end
        subgraph Features
            feature1(Feature 1)
            feature2(Feature 2)
        end
        subgraph UI
            suic1(Smart ui component)
            duic1(Dumb ui component)
            suic2(Smart ui component)
            duic2(Dumb ui component)
        end
    end
    subgraph Micro-service
        ms(Micro service)
    end

    Request --> rtRootCpt
    rtRootCpt --> rtCpt1
    rtCpt1 --> feature1 -- execute --> usecase
    feature1 --> httpFeature
    suic2 --> duic1
    suic1 --> duic1
    suic1 --> duic2
    rtCpt1 --> suic1
    rtCpt1 --> suic2
    httpFeature -- use --> contract
    contract -- use --> interface
    ms -- use --> contract
```

#### Control flow



### Micro-service

```
📦src
 ┣ 📂utils
 ┃ ┣ 📜README.md
 ┃ ┣ 📜another.js
 ┃ ┣ 📜constants.js
 ┃ ┗ 📜index.js
 ┣ 📜README.md
 ┣ 📜app.js
 ┣ 📜models.js
 ┗ 📜routes.js
```